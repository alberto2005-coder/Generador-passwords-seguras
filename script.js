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
    messageDiv.className = `toast-msg toast-${type}`;
    messageDiv.textContent = message;
    
    // Apply styling programmatically for immediate effect
    messageDiv.style.position = 'fixed';
    messageDiv.style.bottom = '30px';
    messageDiv.style.right = '30px';
    messageDiv.style.padding = '14px 24px';
    messageDiv.style.background = type === 'success' 
        ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
        : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    messageDiv.style.color = 'white';
    messageDiv.style.borderRadius = '12px';
    messageDiv.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    messageDiv.style.fontFamily = 'inherit';
    messageDiv.style.fontWeight = '600';
    messageDiv.style.fontSize = '0.95rem';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.display = 'flex';
    messageDiv.style.alignItems = 'center';
    messageDiv.style.gap = '8px';
    messageDiv.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25)';
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(20px)';

    document.body.appendChild(messageDiv);

    // Trigger animation
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 10);

    // Hide and remove
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(20px)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                document.body.removeChild(messageDiv);
            }
        }, 300);
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

            const passwordCard = document.createElement('div');
            passwordCard.className = 'password-card';

            const passwordHeader = document.createElement('div');
            passwordHeader.className = 'password-header';

            const passwordDisplay = document.createElement('div');
            passwordDisplay.className = 'password-display';
            passwordDisplay.textContent = password;

            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.innerHTML = `<span>📋</span> Copiar`;
            copyBtn.onclick = () => {
                navigator.clipboard.writeText(password);
                copyBtn.innerHTML = `<span>✓</span> Copiado`;
                copyBtn.classList.add('copied');
                showMessage('¡Contraseña copiada!', 'success');
                setTimeout(() => {
                    copyBtn.innerHTML = `<span>📋</span> Copiar`;
                    copyBtn.classList.remove('copied');
                }, 2000);
            };

            passwordHeader.appendChild(passwordDisplay);
            passwordHeader.appendChild(copyBtn);

            const strengthMeter = document.createElement('div');
            strengthMeter.className = 'strength-meter';
            strengthMeter.innerHTML = `
                <div class="strength-header">
                    <span class="strength-text">Fortaleza de contraseña</span>
                    <span class="strength-label" style="color: var(--${strength.class})">${strength.level}</span>
                </div>
                <div class="strength-bar">
                    <div class="strength-fill ${strength.class}" style="width: ${strength.width}"></div>
                </div>
            `;

            passwordCard.appendChild(passwordHeader);
            passwordCard.appendChild(strengthMeter);

            resultsDiv.appendChild(passwordCard);
        }

    } catch (error) {
        document.getElementById('passwordResults').innerHTML = 
            `<div class="error">❌ ${error.message}</div>`;
    }
}

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
}

themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});

// Length Slider Logic
const lengthSlider = document.getElementById('length-slider');
const lengthInput = document.getElementById('length');
const lengthValSpan = document.getElementById('length-val');

function syncLengthValue(value) {
    lengthSlider.value = value;
    lengthInput.value = value;
    lengthValSpan.textContent = value;
}

lengthSlider.addEventListener('input', (e) => {
    syncLengthValue(e.target.value);
});

lengthInput.addEventListener('input', (e) => {
    let val = parseInt(e.target.value) || 16;
    if (val < 4) val = 4;
    if (val > 128) val = 128;
    syncLengthValue(val);
});

// Generar contraseña inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    syncLengthValue(lengthInput.value);
    generatePasswords();
});