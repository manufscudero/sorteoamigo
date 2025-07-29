
# 🎁 Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.
## 🖼️ Capturas de pantalla

![Amigo Secreto Demo](assets/demo-screenshot.png)

### Interfaz principal
![Interfaz Principal](assets/interfaz-principal.png)

### Resultado del sorteo
![Resultado del Sorteo](assets/resultado-sorteo.png)

## 📋 Descripción

**Amigo Secreto** es una aplicación que permite a los usuarios crear una lista de amigos y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Perfecta para organizar intercambios de regalos en fiestas, oficinas, familia o cualquier grupo de amigos.

## ✨ Características

### Funcionalidades Principales
- ➕ **Agregar amigos**: Ingresa nombres mediante un campo de texto
- 👁️ **Visualizar lista**: Los nombres se muestran en una lista organizada
- 🎲 **Sorteo aleatorio**: Selección aleatoria del amigo secreto
- ✏️ **Validación de entrada**: Previene campos vacíos y nombres duplicados

### Funcionalidades Adicionales
- 🗑️ **Eliminar amigos**: Botón individual para quitar nombres de la lista
- ⌨️ **Soporte de teclado**: Presiona Enter para agregar amigos rápidamente
- 🎨 **Interfaz atractiva**: Diseño moderno con animaciones suaves
- 📱 **Responsive**: Adaptado para dispositivos móviles y desktop
- ♿ **Accesibilidad**: Implementa buenas prácticas de accesibilidad web

## 🚀 Cómo usar

### 1. Agregar amigos
![Paso 1](assets/paso-1.gif)
- Escribe el nombre de un amigo en el campo de texto
- Haz clic en "Añadir" o presiona Enter
- El nombre aparecerá en la lista debajo

### 2. Gestionar la lista
![Paso 2](assets/paso-2.gif)
- Para eliminar un amigo, haz clic en el botón "×" junto a su nombre
- Puedes agregar tantos amigos como desees

### 3. Realizar el sorteo
![Paso 3](assets/paso-3.gif)
- Una vez que tengas al menos un amigo en la lista
- Haz clic en "Sortear amigo"
- El resultado aparecerá con una animación especial

## 🛠️ Instalación

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de software adicional

### Configuración
1. Clona o descarga este repositorio
2. Asegúrate de tener la siguiente estructura de archivos:
```
amigo-secreto/
├── index.html
├── app.js
├── style.css
└── assets/
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

3. Abre `index.html` en tu navegador web
4. ¡Listo para usar!

## 📁 Estructura del proyecto

```
├── index.html          # Estructura HTML principal
├── app.js              # Lógica de la aplicación en JavaScript
├── style.css           # Estilos y diseño
├── assets/             # Recursos multimedia
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Documentación del proyecto
```

## 🎯 Funciones JavaScript principales

- `agregarAmigo()`: Agrega un nuevo amigo a la lista
- `sortearAmigo()`: Realiza el sorteo aleatorio
- `eliminarAmigo(index)`: Elimina un amigo específico
- `actualizarListaAmigos()`: Actualiza la visualización de la lista
- `mostrarResultado(amigo)`: Muestra el resultado del sorteo

## 🎨 Características de diseño

- **Gradientes modernos**: Colores vibrantes y atractivos
- **Animaciones suaves**: Efectos de transición para mejor UX
- **Tipografía**: Combinación de Inter y Merriweather
- **Responsive design**: Adaptable a diferentes tamaños de pantalla
- **Estados visuales**: Feedback visual para acciones del usuario

## 📱 Responsive Design

<div align="center">
  <img src="assets/desktop-view.png" alt="Vista Desktop" width="45%">
  <img src="assets/mobile-view.png" alt="Vista Mobile" width="45%">
</div>

La aplicación se adapta perfectamente a cualquier dispositivo, desde móviles hasta pantallas de escritorio.

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como proyecto de práctica de JavaScript vanilla.

## 🐛 Reportar problemas

Si encuentras algún error o tienes sugerencias, por favor abre un [issue](../../issues) en este repositorio.

---

¡Disfruta organizando tus intercambios de amigo secreto! 🎉
