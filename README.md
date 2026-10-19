# 🔐 Generador de Contraseñas Seguras

Este proyecto es un **Generador de Contraseñas Seguras** de aspecto moderno y premium, desarrollado con **HTML, CSS y JavaScript (Vanilla)**. Permite crear contraseñas aleatorias cumpliendo estrictas reglas de seguridad y personalización. Cuenta con una interfaz rediseñada con efectos *glassmorphism*, modo oscuro automático/manual con persistencia, logotipo propio y optimizaciones de usabilidad (UX) y SEO.

---

## 📦 Estructura del Proyecto

```
generador-contrasenas/
│
├─ index.html          # Página principal y estructura
├─ styles.css          # Hojas de estilo modernas (claro/oscuro y variables)
├─ script.js           # Lógica del generador, modo oscuro y sincronización
├─ logo.png            # Logotipo de marca del generador
└─ README.md           # Documentación del proyecto
```

---

## ⚙️ Funcionalidades

* **Interfaz Moderna & Premium**: Diseño estético responsivo y adaptable con efecto *glassmorphism* y tipografías Outfit y JetBrains Mono.
* **Modo Claro / Oscuro**: Interruptor de tema flotante animado, con detección automática del tema del sistema operativo y persistencia mediante `localStorage`.
* **Control Deslizante Inteligente**: Barra deslizable (slider) para ajustar la longitud de la contraseña en tiempo real, sincronizada de forma bidireccional con la casilla numérica.
* **Copiado Rápido con Feedback**: Botón de copiado con transición animada instantánea (`✓ Copiado` con color verde neón) y notificaciones toast flotantes.
* **SEO & Social Share**: Configuración SEO completa (canonical, keywords, autor, publisher, robots) y etiquetas Open Graph y Twitter Cards integradas para compartir en redes sociales de forma optimizada.
* **Configuración de Seguridad Avanzada**:
  - Selección de longitud (4-128 caracteres) y cantidad (1-20 contraseñas).
  - Selección de tipos de caracteres (mayúsculas, minúsculas, números, símbolos y espacios).
  - Inclusión obligatoria y exclusión de caracteres personalizados.
  - Prefijos y sufijos obligatorios.
  - Reglas especiales para evitar secuencias comunes (`123`, `abc`) o repeticiones de caracteres.
  - Indicador dinámico de fortaleza de contraseña.
  - Generación opcional de contraseñas "legibles" (evitando `0`, `O`, `l`, `I`).

---

## 🛠️ Tecnologías

* **HTML5**: Estructura de la página.
* **CSS3**: Estilos modernos con gradientes, sombras y diseño responsivo.
* **JavaScript (Vanilla)**: Lógica de generación de contraseñas, validación y medición de fortaleza.

---

## 🚀 Cómo Usar

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en cualquier navegador moderno.
3. Configurar las opciones de la contraseña según tus necesidades.
4. Hacer clic en **“Generar Contraseñas”**.
5. Copiar la contraseña usando el botón 📋 si lo deseas.

---

## 💡 Notas

* La longitud mínima de la contraseña es 4 caracteres y la máxima 128.
* La cantidad máxima de contraseñas que se pueden generar a la vez es 20.
* Si se aplican demasiadas restricciones (prefijo, sufijo, caracteres obligatorios y exclusiones) puede que la generación falle; en ese caso, relaja algunas opciones.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y distribuirlo libremente, con atribución al autor.

---

## 📜 MIT License

```
MIT License

Copyright (c) 2025 [Alberto Ortiz]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


---

# English Version

A **secure password generator** with a modern, premium look, built with **HTML, CSS and vanilla JavaScript**. It creates random passwords following strict security and customization rules, with a glassmorphism UI, automatic/manual dark mode, its own logo, and UX/SEO optimizations.

## Project Structure

```
generador-contrasenas/
│
├─ index.html          # Main page and structure
├─ styles.css          # Modern styles (light/dark and variables)
├─ script.js           # Generator logic, dark mode and sync
├─ logo.png            # Brand logo
└─ README.md           # Project documentation
```

## Features

* **Premium UI**: responsive glassmorphism design with Outfit and JetBrains Mono fonts.
* **Light / Dark mode**: animated floating theme toggle, with automatic OS theme detection and `localStorage` persistence.
* **Smart slider**: drag the slider to adjust password length in real time, synced both ways with the number input.
* **Fast copy with feedback**: instant animated copy button (`✓ Copied` in neon green) and floating toast notifications.
* **SEO & Social Share**: full SEO setup (canonical, keywords, author, publisher, robots) plus Open Graph and Twitter Cards.
* **Advanced security configuration**:
  - Length (4–128 characters) and quantity (1–20 passwords).
  - Character types (uppercase, lowercase, numbers, symbols and spaces).
  - Mandatory inclusion and custom character exclusion.
  - Required prefixes and suffixes.
  - Special rules to avoid common sequences (`123`, `abc`) or repeats.
  - Dynamic strength meter.
  - Optional "readable" passwords (avoiding `0`, `O`, `l`, `I`).

## Tech Stack

* **HTML5** — page structure
* **CSS3** — gradients, shadows and responsive design
* **JavaScript (Vanilla)** — generation logic, validation and strength meter

## How to Use

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Configure the password options as needed.
4. Click **"Generate Passwords"**.
5. Copy a password with the 📋 button.

## Notes

* Minimum password length is 4 characters, maximum is 128.
* Up to 20 passwords can be generated at once.
* If too many restrictions are applied (prefix, suffix, mandatory characters and exclusions) generation may fail — relax some options.

## License

This project is released under the **MIT** License. You are free to use, modify and distribute it with attribution to the author.

