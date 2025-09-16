const charSets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
        readableLowercase: 'abcdefghijkmnpqrstuvwxyz',
        readableUppercase: 'ABCDEFGHJKMNPQRSTUVWXYZ',
        readableNumbers: '23456789'
    };

function getCharacterSet() {
    let charset = '';
    const isReadable = document.getElementById('readable').checked;

    if (document.getElementById('lowercase').checked) {
        charset += isReadable ? charSets.readableLowercase : charSets.lowercase;
    }

    if (document.getElementById('uppercase').checked) {
        charset += isReadable ? charSets.readableUppercase : charSets.uppercase;
    }

    if (document.getElementById('numbers').checked) {
        charset += isReadable ? charSets.readableNumbers : charSets.numbers;
    }

    if (document.getElementById('symbols').checked) {
        const customSymbols = document.getElementById('customSymbols').value;
        charset += customSymbols || charSets.symbols;
    }

    if (document.getElementById('spaces').checked) {
        charset += ' ';
    }

    // Añadir caracteres obligatorios
    const includeChars = document.getElementById('includeChars').value;
    if (includeChars) {
        charset += includeChars;
    }

    // Remover caracteres excluidos
    const excludeChars = document.getElementById('excludeChars').value;
    if (excludeChars) {
        for (let char of excludeChars) {
            charset = charset.replace(new RegExp(char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '');
        }
    }

    return charset;
}

function hasSequentialChars(password) {
    const sequences = ['123456789', 'abcdefghijklmnopqrstuvwxyz', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    for (let seq of sequences) {
        for (let i = 0; i <= seq.length - 3; i++) {
            if (password.toLowerCase().includes(seq.substr(i, 3))) {
                return true;
            }
        }
    }
    return false;
}

    function hasRepeatingChars(password) {
        for (let i = 0; i < password.length - 1; i++) {
            if (password[i] === password[i + 1]) {
                return true;
            }
        }
        return false;
    }

    function generatePassword() {
        const length = parseInt(document.getElementById('length').value);
        const startsWith = document.getElementById('startsWith').value;
        const endsWith = document.getElementById('endsWith').value;
        const noSequential = document.getElementById('noSequential').checked;
        const noRepeat = document.getElementById('noRepeat').checked;
        const includeChars = document.getElementById('includeChars').value;

        let charset = getCharacterSet();

        if (!charset) {
            throw new Error('Debes seleccionar al menos un tipo de carácter');
        }

        const availableLength = length - startsWith.length - endsWith.length - includeChars.length;

        if (availableLength < 0) {
            throw new Error('La longitud total debe ser mayor que el prefijo + sufijo + caracteres obligatorios');
        }

        let password = '';
        let attempts = 0;
        const maxAttempts = 1000;

        do {
            password = startsWith;

            // Agregar caracteres obligatorios primero
            password += includeChars;

            // Generar la parte restante
            for (let i = 0; i < availableLength; i++) {
                let char;
                let charAttempts = 0;

                do {
                    char = charset[Math.floor(Math.random() * charset.length)];
                    charAttempts++;
                } while (noRepeat && password.length > 0 && char === password[password.length - 1] && charAttempts < 50);

                password += char;
            }

            // Mezclar la parte central (después del prefijo y antes del sufijo)
            if (includeChars.length > 0 || availableLength > 0) {
                const middlePart = password.slice(startsWith.length);
                const shuffledMiddle = middlePart.split('').sort(() => Math.random() - 0.5).join('');
                password = startsWith + shuffledMiddle;
            }

            password += endsWith;
            attempts++;

        } while ((noSequential && hasSequentialChars(password)) || 
                (noRepeat && hasRepeatingChars(password)) && attempts < maxAttempts);

        if (attempts >= maxAttempts) {
            throw new Error('No se pudo generar una contraseña que cumpla todos los criterios. Intenta relajar algunas restricciones.');
        }

        return password;
    }

    function calculateStrength(password) {
        let score = 0;

        if (password.length >= 8) score += 1;
        if (password.length >= 12) score += 1;
        if (/[a-z]/.test(password)) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;
        if (password.length >= 16) score += 1;

        if (score <= 2) return { level: 'Débil', class: 'strength-weak', width: '25%' };
        if (score <= 4) return { level: 'Media', class: 'strength-medium', width: '50%' };
        if (score <= 6) return { level: 'Fuerte', class: 'strength-strong', width: '75%' };
        return { level: 'Muy Fuerte', class: 'strength-very-strong', width: '100%' };
    }

    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = type;
        messageDiv.textContent = message;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '20px';
        messageDiv.style.right = '20px';
        messageDiv.style.padding = '10px 20px';
        messageDiv.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
        messageDiv.style.color = 'white';
        messageDiv.style.borderRadius = '5px';
        messageDiv.style.zIndex = '1000';

        document.body.appendChild(messageDiv);

        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 3000);
    }

    function generatePasswords() {
        try {
            const quantity = parseInt(document.getElementById('quantity').value);
            const resultsDiv = document.getElementById('passwordResults');
            resultsDiv.innerHTML = '';

            for (let i = 0; i < quantity; i++) {
                const password = generatePassword();
                const strength = calculateStrength(password);

                const passwordContainer = document.createElement('div');
                passwordContainer.style.marginBottom = '20px';

                const passwordDisplay = document.createElement('div');
                passwordDisplay.className = 'password-display';
                passwordDisplay.textContent = password;

                const copyBtn = document.createElement('button');
                copyBtn.textContent = '📋 Copiar';
                copyBtn.className = 'copy-btn';
                copyBtn.onclick = () => {
                    navigator.clipboard.writeText(password);
                    showMessage('¡Contraseña copiada!', 'success');
                };

                const strengthMeter = document.createElement('div');
                strengthMeter.className = 'strength-meter';
                strengthMeter.innerHTML = `
                    <div class="strength-text">Fortaleza: ${strength.level}</div>
                    <div class="strength-bar">
                        <div class="strength-fill ${strength.class}" style="width: ${strength.width}"></div>
                    </div>
                `;

                passwordContainer.appendChild(passwordDisplay);
                passwordContainer.appendChild(copyBtn);
                passwordContainer.appendChild(strengthMeter);

                resultsDiv.appendChild(passwordContainer);
            }

        } catch (error) {
            document.getElementById('passwordResults').innerHTML = 
                `<div class="error">❌ ${error.message}</div>`;
        }
    }

// Generar contraseña inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    generatePasswords();
});