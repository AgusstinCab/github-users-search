# GitHub Users Search 🔍

Aplicación web desarrollada con JavaScript puro que permite buscar usuarios de GitHub y visualizar información relevante de sus perfiles junto con algunos de sus repositorios públicos utilizando la API oficial de GitHub.

## 🌐 Demo

👉 **Ver aplicación en línea:**
https://agusstincab.github.io/github-users-search/

## 📸 Vista previa

![GitHub Users Search](./assets/preview.png)

## 🚀 Características

* Búsqueda de usuarios por nombre de usuario de GitHub.
* Visualización de información del perfil:

  * Foto de perfil.
  * Nombre de usuario.
  * Biografía.
  * Cantidad de seguidores.
  * Cantidad de seguidos.
  * Número de repositorios públicos.
* Muestra los repositorios públicos más recientes del usuario.
* Acceso directo a los repositorios desde la aplicación.
* Diseño responsive adaptable a dispositivos móviles.
* Manejo de errores cuando el usuario no existe o se produce un problema al consultar la API.

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* API REST de GitHub

## 📂 Estructura del proyecto

```text
├── assets
│   ├── preview.png
│   └── github_logo.png
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ Instalación y uso

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/github-user-finder.git
```

2. Accede al directorio del proyecto:

```bash
cd github-user-finder
```

3. Configura la URL de la API en el archivo `script.js`:

```javascript
const API_URL = "https://api.github.com/users/";
```

4. Abre el archivo `index.html` en tu navegador.

## 🔗 API utilizada

Este proyecto consume la API pública de GitHub para obtener información de usuarios y repositorios.

**Endpoint de usuario**

```text
https://api.github.com/users/{username}
```

**Ejemplo**

```text
https://api.github.com/users/octocat
```

## 📸 Vista previa

La aplicación permite buscar cualquier usuario de GitHub y visualizar rápidamente información relevante de su perfil, estadísticas y repositorios públicos.

> Agrega aquí una captura de pantalla del proyecto para mostrar su funcionamiento.

## 📖 Cómo funciona

1. Ingresa un nombre de usuario de GitHub en el campo de búsqueda.
2. Presiona **Enter**.
3. La aplicación realiza una consulta a la API de GitHub.
4. Se muestra la información del perfil junto con sus repositorios públicos más recientes.

## 🔮 Posibles mejoras

* Implementar un indicador de carga (Loading Spinner).
* Ordenar repositorios por cantidad de estrellas.
* Mostrar la descripción de cada repositorio.
* Agregar historial de búsquedas.
* Implementar modo oscuro/claro.
* Mostrar más repositorios mediante paginación.
* Añadir información adicional del perfil (ubicación, empresa, sitio web, etc.).

## 🤝 Contribuciones

Las contribuciones, sugerencias y reportes de errores son bienvenidos.

Si deseas colaborar:

1. Haz un Fork del proyecto.
2. Crea una nueva rama para tu mejora.
3. Realiza los cambios.
4. Envía un Pull Request.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.

---

Desarrollado con ❤️ utilizando JavaScript y la API pública de GitHub.
