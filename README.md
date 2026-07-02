# 🎬 Jigsaw's Letter

Una experiencia web interactiva y envolvente basada en la temática del personaje Jigsaw de la saga Saw. Una invitación personalizada que combina efectos de TV antigua, diálogos dinámicos, y mecánicas de elección para crear un viaje narrativo único.

## 📖 Descripción

"Jigsaw's Letter" es una página web de una sola sesión (SPA) construida con **HTML/CSS/JavaScript vanilla**, sin frameworks ni librerías externas. Simula una grabación de televisión descompuesta con estética CRT, donde el icónico Jigsaw dirige una invitación personalizada a través de múltiples escenas interactivas.

### Características principales:

✨ **Experiencia retro auténtica**
- Efectos CRT: scanlines, viñeta oscura, ruido estático
- Transiciones tipo "cambio de canal"
- Simulación de TV apagándose al final

🎮 **Mecánicas interactivas**
- 2 momentos de selección de diálogo con respuestas personalizadas
- Efecto de máquina de escribir para el texto
- Botones contextuales que aparecen dinámicamente

🎵 **Audio sincronizado**
- Efecto de TV estática al inicio (5 segundos)
- Tema musical de fondo sincronizado
- Efecto de apagado al finalizar

📱 **Diseño responsive**
- Se adapta a diferentes tamaños de pantalla
- Mantiene la estética retro en cualquier resolución

## 🚀 Instalación y uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nada más. Sin servidor, sin instalación de dependencias.

### Pasos para ejecutar

1. **Descarga la carpeta completa** del repositorio:
   ```
   Jigsaw_Game/
   ├── index.html
   ├── style.css
   ├── script.js
   └── assets/
       ├── jigsaw.png
       ├── peluche.png
       ├── tema.mp3
       ├── static.mp3
       └── turnoff.mp3
   ```

2. **Abre el archivo `index.html`** con tu navegador:
   - Haz doble clic en `index.html`, o
   - Arrastra `index.html` a tu navegador, o
   - Usa una extensión como Live Server (VS Code)

3. **¡Disfruta la experiencia!**

## 🎯 Flujo de escenas

```
Inicio
  ↓
[Efecto estático - 5s] → Saludo "Hola Anael"
  ↓
Primera selección de diálogo
  ├─ Opción A: "Sos fan mio?"
  └─ Opción B: "Creo que no tuve que haberme dormido..."
  ↓
Respuesta personalizada
  ↓
4 Diálogos universales
  ↓
Segunda selección de diálogo
  ├─ Opción A: "Voy a despertar dentro de poco..."
  └─ Opción B: "Pues si es que se mueren de unas formas..."
  ↓
Diálogos previos a la jaula
  ↓
Revelación de la jaula (peluche con barrotes)
  ↓
6 Diálogos finales con reglas
  ↓
[Fade-out + Efecto de apagado] → Fin
```

## 📁 Estructura del proyecto

```
Jigsaw_Game/
│
├── index.html          # Estructura HTML (6 escenas)
├── style.css           # Estilos CRT y responsive
├── script.js           # Lógica de transiciones, diálogos y audio
├── README.md           # Esta documentación
│
└── assets/
    ├── jigsaw.png      # Imagen de Jigsaw (45% altura)
    ├── peluche.png     # Imagen del peluche en la jaula
    ├── tema.mp3        # Música de fondo (~2-3 min)
    ├── static.mp3      # Efecto de TV estática (5s)
    └── turnoff.mp3     # Efecto de apagado de TV
```

## 💻 Tecnología

| Componente | Tecnología |
|------------|-----------|
| Markup | HTML5 |
| Estilos | CSS3 (sin preprocesadores) |
| Interactividad | Vanilla JavaScript (ES6) |
| Audio | HTML5 Audio API |
| Imágenes | PNG comprimido |

**Ningún framework, ninguna librería externa.** El proyecto es completamente autónomo.

## 🎨 Paleta de colores

- **Verde terminal**: `#33ff33` (botones, énfasis)
- **Gris claro**: `#e0e0e0` (diálogos)
- **Negro profundo**: `#050505`, `#000` (fondos)
- **Gris oscuro**: `#111`, `#1a1a1a` (acentos)
- **Rojo oscuro**: `#9c0e0e` (etiqueta inicial)

## 🔧 Personalización

### Cambiar los diálogos

Todos los textos están centralizados en el objeto `DIALOGUES` dentro de [script.js](script.js):

```javascript
const DIALOGUES = {
  greeting: "Hola Anael.",
  responseFirstA: "Así es Anael, me llamo Jigsaw...",
  // ... más diálogos
};
```

Simplemente edita los strings y los cambios se reflejarán inmediatamente.

### Cambiar los audios

Reemplaza los archivos en la carpeta `assets/`:
- `tema.mp3` — música de fondo
- `static.mp3` — efecto de inicio (debe ser ~5s)
- `turnoff.mp3` — efecto de cierre

### Cambiar las imágenes

Reemplaza `jigsaw.png` y `peluche.png` en `assets/` manteniendo los mismos nombres de archivo.

## 🎬 Notas técnicas

### Timing de transiciones

Las transiciones están calibradas para una experiencia fluida:
- **Efecto estático inicial**: 5000ms
- **Tiempo entre diálogos**: 1000-1500ms
- **Fade-out final**: 0.5s
- **Secuencia de apagado**: 6 segundos totales

Puedes ajustar los `setTimeout()` en [script.js](script.js) si deseas modificar el ritmo.

### Bloqueo de múltiples clics

El botón de inicio se desactiva después del primer clic para evitar la duplicación de eventos. Esto es intencional.

### Compatibilidad de audio

Los navegadores modernos requieren interacción del usuario para reproducir audio. El primer clic del usuario gatilla:
1. El efecto estático
2. Luego la música de fondo

Esto respeta las políticas de autoplay de navegadores.

## 📱 Compatibilidad

✅ **Navegadores soportados:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

❌ **No compatible:**
- Internet Explorer (versiones antiguas)
- Navegadores sin soporte para Audio API

## 🎁 Cómo compartir

### Opción 1: Comprimir y enviar (Recomendado)
```bash
# Comprime la carpeta
zip -r Jigsaw_Game.zip Jigsaw_Game/

# Envía el archivo ZIP
# Anael descomprime y abre index.html
```

### Opción 2: GitHub
1. Sube este repositorio a GitHub
2. Comparte el link con Anael
3. Anael descarga o clona el repositorio

### Opción 3: Google Drive / OneDrive
Sube la carpeta comprimida y comparte el enlace de descarga.

**⚠️ Importante**: Siempre asegúrate de que se descarguen **TODOS los archivos**, incluyendo la carpeta `assets/`. Solo el HTML no funcionará.

## 🛠️ Desarrollo

Si deseas contribuir o hacer cambios:

1. Edita [index.html](index.html) para cambiar la estructura o agregar escenas
2. Edita [style.css](style.css) para modificar la estética
3. Edita [script.js](script.js) para cambiar la lógica de diálogos o interactividad
4. Prueba en tu navegador (abre directamente o usa Live Server)

No necesitas build steps, compilación, ni servidor. Todo funciona localmente.

## 📝 Licencia

Este proyecto es personal/educativo. Úsalo libremente, cópialo, modificalo, compártelo.

## 👥 Créditos

- **Personaje**: Jigsaw (Billy Crumb) - Saga Saw
- **Temática**: Estética retro-CRT y TV antigua
- **Desarrollo**: Construcción con HTML/CSS/JavaScript vanilla
- **Destinataria**: Anael

---

**¿Preguntas?** Revisa la estructura del proyecto o ajusta los diálogos en [script.js](script.js).

**¡Que disfrutes la experiencia!** 🎬
