# Web de Selección de Comida para Establecimientos

## Bienvenido! 👋

Este proyecto es una web diseñada para establecimientos, permitiendo la selección de comida, cantidades y reflejando los precios en tiempo real. También incluye una sección de métodos de pago, aunque estos no están habilitados, siendo únicamente una representación visual. Al final dejaré los enlaces del diseño en el que me basé y las APIs que utilicé.

### Captura de pantalla

<p align="center">
  <img src="https://github.com/Emazs/frontend-food-pos/blob/main/src/assets/disign/home_desktop.png?raw=true" width="30%">
  <img src="https://github.com/Emazs/frontend-food-pos/blob/main/src/assets/disign/dashboard_desktop.png?raw=true" width="30%">
  <img src="https://github.com/Emazs/frontend-food-pos/blob/main/src/assets/disign/config_desktop.png?raw=true" width="30%">
</p>


### Enlaces

- Repositorio: [GitHub](https://github.com/Emazs/frontend-food-pos/)
- Demo en vivo: [Sitio web](https://frontend-food-pos.vercel.app/login)

## Proceso de desarrollo

Para este proyecto, me enfoqué en la creación de una interfaz intuitiva y amigable para el usuario, donde los establecimientos puedan seleccionar fácilmente sus productos y visualizar el costo total en tiempo real. La página tiene un login, en esta utilicé [fakestoreapi](https://fakestoreapi.com/) para simular una conexión a backend con su endpoint de login, el cual retorna un token simulando el uso de JWT. Para mostrar las comidas usé [themealdb](https://www.themealdb.com/api.php). La parte más desafiante fue la gestión del estado para actualizar correctamente las cantidades y precios de los productos seleccionados, además del correcto filtrado de las comidas usando las categorías y el input de búsqueda. Para las rutas utilicé react-router en su última versión, además de Tailwind CSS y el uso de Zod para realizar validaciones cuando en la parte de configuración se desea agregar un plato nuevo. El diseño fue tomado y adaptado para diferentes dispositivos de: [@yahyaamirudin](https://www.figma.com/community/file/944188956363619079)

### Tecnologías utilizadas

- React
- React Router
- Tailwind CSS
- Flexbox y Grid
- Context API para gestión de estado
- Fetch y consumo de APIs
- Zod para validaciones de formularios

## Autor

- GitHub - [@Emazs](https://github.com/Emazs)

## Configuración del Proyecto

Este proyecto fue desarrollado con React y Vite, utilizando las siguientes herramientas:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) para Fast Refresh con Babel.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) para Fast Refresh con SWC.

Para ejecutar el proyecto localmente:

1. Clonar el repositorio
   ```bash
   git clone https://github.com/Emazs/frontend-food-pos/
   ```
2. Instalar dependencias
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo
   ```bash
   npm run dev
   ```
4. Para entrar puedes usar el usuario y contraseña
   ```bash
   usuario: johnd 
   contraseña: m38rmF$
   ```

