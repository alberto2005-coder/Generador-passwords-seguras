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
