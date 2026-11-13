# Generador de contraseñas seguras

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![MIT](https://img.shields.io/badge/Licencia-MIT-green)](LICENSE)

[Español](#español) · [English](#english)

---

## Español

### Índice

- [Descripción](#descripción)
- [Demo](#demo)
- [Características](#características)
- [Cómo usarlo](#cómo-usarlo)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Limitaciones de seguridad](#limitaciones-de-seguridad)
- [Licencia](#licencia)

### Descripción

Herramienta web para generar contraseñas aleatorias con control fino sobre su composición: longitud, tipos de carácter, prefijos, sufijos, exclusiones y reglas anti-secuencias. Todo ocurre en el navegador, sin servidores ni dependencias, y con tema claro/oscuro persistente.

### Demo

**Pruébalo:** <https://alberto2005-coder.github.io/Generador-passwords-seguras/>

### Características

- **Interfaz glassmorphism** responsiva, con tipografías Outfit y JetBrains Mono.
- **Tema claro/oscuro** automático o manual, guardado en `localStorage`.
- **Longitud 4–128** y hasta **20 contraseñas** a la vez.
- **Tipos de carácter**: mayúsculas, minúsculas, números, símbolos y espacios.
- **Caracteres obligatorios y excluidos** definidos por ti.
- **Prefijos y sufijos** obligatorios.
- **Reglas anti-secuencia**: evita `123`, `abc` y repeticiones.
- **Contraseñas legibles**: excluye caracteres ambiguos como `0`, `O`, `l` e `I`.
- **Medidor de fortaleza** dinámico.
- **Copia rápida** con confirmación visual y notificaciones toast.

### Cómo usarlo

1. Abre `index.html` en un navegador moderno (doble clic sirve).
2. Ajusta longitud, cantidad y tipos de carácter.
3. Añade reglas extra si las necesitas (prefijo, sufijo, exclusiones).
4. Pulsa **Generar contraseñas**.
5. Copia la que quieras con el botón de copiar.

También puedes servirlo en local:

```bash
python -m http.server 8000
```

### Estructura del proyecto

```text
Generador-passwords-seguras/
├── index.html      # Estructura y controles
├── styles.css      # Tema claro/oscuro y estilos
├── script.js       # Generación, fortaleza, tema y copia
├── logo.png
├── LICENSE
└── README.md
```

### Limitaciones de seguridad

- La generación usa `Math.random`, que **no es un generador criptográficamente seguro**. Para contraseñas que vayas a usar de verdad, cambia la fuente de aleatoriedad a `crypto.getRandomValues`.
- Si aplicas demasiadas restricciones a la vez (prefijo, sufijo, obligatorios y exclusiones), la generación puede no encontrar una combinación válida; relaja alguna opción.
- No hay almacenamiento de contraseñas: si cierras la pestaña, se pierden. Usa un gestor de contraseñas para guardarlas.

### Licencia

**MIT** — consulta [LICENSE](LICENSE).

---

## English

### Table of contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [How to use](#how-to-use)
- [Project structure](#project-structure)
- [Security limitations](#security-limitations)
- [License](#license)

### Overview

A web tool for generating random passwords with fine-grained control over their composition: length, character types, prefixes, suffixes, exclusions and anti-sequence rules. Everything runs in the browser, with no servers or dependencies, plus a persistent light/dark theme.

### Demo

**Try it:** <https://alberto2005-coder.github.io/Generador-passwords-seguras/>

### Features

- **Glassmorphism UI**, responsive, using the Outfit and JetBrains Mono typefaces.
- **Light/dark theme**, automatic or manual, stored in `localStorage`.
- **Length 4–128** and up to **20 passwords** at once.
- **Character types**: uppercase, lowercase, numbers, symbols and spaces.
- **Required and excluded characters** chosen by you.
- **Required prefixes and suffixes**.
- **Anti-sequence rules**: avoids `123`, `abc` and repeats.
- **Readable passwords**: skips ambiguous characters such as `0`, `O`, `l` and `I`.
- **Dynamic strength meter**.
- **Quick copy** with visual confirmation and toast notifications.

### How to use

1. Open `index.html` in a modern browser (double-clicking works).
2. Adjust length, quantity and character types.
3. Add extra rules if needed (prefix, suffix, exclusions).
4. Click **Generate passwords**.
5. Copy the one you want with the copy button.

You can also serve it locally:

```bash
python -m http.server 8000
```

### Project structure

```text
Generador-passwords-seguras/
├── index.html      # Markup and controls
├── styles.css      # Light/dark theme and styles
├── script.js       # Generation, strength, theme and copy
├── logo.png
├── LICENSE
└── README.md
```

### Security limitations

- Generation uses `Math.random`, which is **not a cryptographically secure generator**. For passwords you actually rely on, switch the randomness source to `crypto.getRandomValues`.
- If you stack too many constraints (prefix, suffix, required characters and exclusions), generation may fail to find a valid combination; relax an option.
- Passwords are not stored: closing the tab loses them. Use a password manager to keep them.

### License

**MIT** — see [LICENSE](LICENSE).
