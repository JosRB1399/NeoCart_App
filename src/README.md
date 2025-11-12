# 🛒 NeoCart_App — Gestión de Estado Avanzada en React

**Autor:** Josué Rubio López  
**Curso:** Java17 Frontend Developer — ReactJS (Gestión de Estado Avanzada)  
📅 **Entrega:** 12 de noviembre de 2025  

## 🌟 **Resumen Ejecutivo**

**NeoCart_App** es una aplicación web desarrollada en **React v19** que simula una **tienda online con carrito de compras**, enfocada en la **gestión de estado global** mediante tres enfoques: 

1. **UseState (estado local tradicional):**

- El hook useState permite gestionar el estado local dentro de componentes funcionales de React. Su implementación facilita el control directo de variables dinámicas en la interfaz, brindando simplicidad y eficiencia en aplicaciones de pequeña escala o con lógica de estado limitada. 

Representa la base del manejo de estados en React antes de incorporar soluciones globales más avanzadas.
  
2. **Zustand (gestión minimalista y reactiva):**

- Zustand ofrece una alternativa ligera y flexible para la administración global del estado. Su arquitectura basada en hooks simplifica la comunicación entre componentes, evitando la complejidad de configuraciones extensas. 

Gracias a su enfoque reactivo, mejora el rendimiento y mantiene un código más limpio y modular, ideal para proyectos que buscan escalabilidad sin sobrecargar la estructura.
 
3. **Redux Toolkit con createAsyncThunk (gestión estructurada y asíncrona):**

- Redux Toolkit proporciona una solución robusta y estandarizada para la gestión global del estado. Su integración con createAsyncThunk permite manejar operaciones asíncronas de manera eficiente, asegurando consistencia en la manipulación de datos provenientes de APIs u otras fuentes externas. 

Este enfoque fomenta una arquitectura predecible, escalable y alineada con los principios modernos de desarrollo en React. 

El proyecto demuestra dominio en el manejo de flujos de datos, refactorización progresiva del estado y la implementación de lógica asíncrona simulando la carga de productos desde una API.

## ⚙️ **Arquitectura y Proceso de Desarrollo**

**El desarrollo siguió una evolución por etapas:**

1. **Estado Local (useState):**  

   - Se implementó una lista de productos y un carrito de compras básico.  
   - La comunicación entre componentes se realizó mediante *props*.  

2. **Refactorización con Zustand:**  

   - Se eliminó el *prop drilling* y se centralizó el estado global en `cartStore.js`.  
   - Los componentes accedieron directamente al estado y acciones del store.  

3. **Migración a Redux Toolkit:**  

   - Se creó un `cartSlice.js` para estructurar el estado global del carrito.  
   - Se configuró el store global (`store.js`) y se usó `<Provider>` en `main.jsx`.  
   - Se aplicaron los hooks `useSelector` y `useDispatch` para la interacción con el estado.

4. **Lógica Asíncrona con createAsyncThunk:** 
 
   - En `productSlice.js` se simuló la carga de productos desde una API.  
   - Se manejaron los ciclos de vida (*pending*, *fulfilled*, *rejected*) con *extraReducers*.  
   - Se mostró un mensaje de carga dinámico en `ProductList.jsx`.

Cada fase representó un salto en escalabilidad y profesionalismo en la gestión del estado global en React.

## 🧩 **Estructura del Proyecto**

NeoCart_App/
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
│
└── src/
    ├── assets/
    │   ├── AuricularesInalámbricosPro.png
    │   ├── SmartwatchFitBand.png
    │   ├── LaptopUltrabookAirLite.png
    │   ├── TecladoMecánicoRGB.png
    │   ├── CámaraWebHD.png
    │   ├── MouseGamerXSpeed.png
    │   ├── MochilaTechPackUrban.png
    │   ├── CargadorInalámbricoFastCharge.png
    │   └── AltavozBluetoothNeoSound.png
    │
    ├── components/
    │   ├── ProductList.jsx
    │   ├── ShoppingCart.jsx
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── Footer.css
    │   └── ShoppingCart.css
    │
    ├── store/
    │   ├── cartSlice.js
    │   ├── productSlice.js
    │   └── store.js
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css

## 🧠 **Stack Tecnológico**

| Categoría  | Herramienta / Tecnología | Descripción  |
|------------|--------------------------|--------------|
| **Framework** | React v19 | Librería para interfaces reactivas |
| **Gestión de Estado** | useState / Zustand / Redux Toolkit | Enfoques progresivos de control de estado |
| **Asincronía**   | createAsyncThunk | Simulación de llamadas API |
| **Empaquetador** | Vite | Entorno rápido con recarga instantánea |
| **Lenguaje** | JavaScript (ES6+) | Hooks, destructuring y JSX moderno |
| **Estilos**  | CSS | Diseño adaptable y minimalista |
| **Control de versiones** | Git / GitHub | Control y despliegue del proyecto |

## 🧱 **Análisis del Código Fuente**

| Archivo  | Descripción |
|----------|-------------|
| ⚙️ **App.jsx** | Punto de integración principal; estructura la UI y componentes globales |
| 🧩 **ProductList.jsx**  | Lista de productos; en RTK despacha `fetchProducts()` y muestra estado de carga |
| 🧩 **ShoppingCart.jsx** | Muestra la cantidad de productos en el carrito  |
| 🧩 **cartSlice.js**    | Define el slice del carrito con reducers y acciones `addToCart` |
| 🧩 **productSlice.js** | Maneja productos cargados asíncronamente con `createAsyncThunk` |
| ⚙️ **store.js** | Configura el store global de Redux con `configureStore` |
| 🧠 **cartStore.js (Zustand)** | Versión minimalista del estado global sin Redux |

## 💼 **Desempeño y Calidad del Código**

El proyecto evidencia un nivel técnico sobresaliente al integrar de forma coherente diversas tecnologías dentro del ecosistema React. 

La adopción combinada de Redux Toolkit y Zustand garantiza una gestión del estado global eficiente, predecible y escalable, reforzando la estabilidad general de la aplicación.

Asimismo, la estructura modular del código refleja una clara separación de responsabilidades, promoviendo la mantenibilidad y la extensibilidad del sistema. 

Se aprecia un enfoque metódico y profesional en la organización de los componentes, el control de la lógica asíncrona y la optimización de la experiencia de usuario.

En conjunto, el desarrollo denota un alto estándar de calidad técnica y una comprensión sólida de los principios modernos de ingeniería de software.

## 🧩 **Conclusión**

**NeoCart_App** representa un dominio completo de las herramientas modernas de React para la gestión global y asíncrona del estado.  

El proyecto integra una evolución pedagógica clara: desde el estado local hasta arquitecturas escalables con Redux Toolkit.

**Se demuestra:**

- Capacidad de refactorización y abstracción de estado,  
- Correcta implementación de flujos de datos unidireccionales,  
- Control de asincronía con Redux Thunk,  
- Comprensión de patrones de arquitectura React moderna.

El resultado es una aplicación modular, mantenible y profesional.

## 🖼️ **Vista General del Proyecto**

| 💡 **Característica**   | ✨ **Descripción** |
|------------------------|--------------------|
| **Gestión Global de Estado** | Combinación de Zustand y Redux Toolkit    |
| **Simulación Asíncrona**     | Carga dinámica de productos desde API simulada |
| **Diseño Modular**      | Componentes reutilizables y desacoplados       |
| **Flujo Unidireccional de Datos** | Coherencia y trazabilidad del estado |
| **Interfaz Responsiva** | Experiencia de usuario limpia y moderna |

## 📜 **Licencia y Créditos**

Proyecto desarrollado con fines académicos para el curso  
**FrontEnd Developer – DS-202502-115V (Gestión de Estado en React con Zustand y Redux Toolkit).**

Todo el desarrollo fue realizado por **Josué Rubio López**, aplicando buenas prácticas en React moderno y arquitectura escalable.

💻 *NeoCart_App — una tienda online que demuestra la evolución del estado global en React.*

## 👨‍💻 **Autor**

**Josué Rubio López**  
📧 **Correo:** josuerubiolopez@gmail.com  
💼 **Rol:** Desarrollador Front-End  
🌍 **Ubicación:** Perú  

> “Dominar el estado global en React no es solo controlar los datos, sino entender cómo fluye la experiencia del usuario.”
