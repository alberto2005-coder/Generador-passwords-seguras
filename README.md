# 🔐 Generador de Contraseñas Seguras

Este proyecto es un **Generador de Contraseñas Seguras** completamente personalizable, desarrollado con **HTML, CSS y JavaScript**. Permite crear contraseñas aleatorias cumpliendo reglas de seguridad y personalización, con opciones para prefijos, sufijos, inclusión/exclusión de caracteres y mucho más.

---

## 📦 Estructura del Proyecto

```
generador-contrasenas/
│
├─ index.html          # Página principal
├─ styles.css          # Estilos externos
├─ script.js           # Funciones de generación y validación de contraseñas
└─ README.md           # Documentación del proyecto
```

---

## ⚙️ Funcionalidades

* Configuración de longitud y cantidad de contraseñas.
* Selección de tipos de caracteres:

  * Letras minúsculas y mayúsculas
  * Números
  * Símbolos
  * Espacios opcionales
* Caracteres obligatorios y exclusión de caracteres.
* Prefijo y sufijo personalizado.
* Evitar secuencias (`123`, `abc`, `qwe`) y caracteres repetidos consecutivos.
* Indicador de **fortaleza de contraseña**.
* Botón para copiar la contraseña al portapapeles.
* Contraseñas “legibles” evitando caracteres confusos (`0`, `O`, `l`, `I`).

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
