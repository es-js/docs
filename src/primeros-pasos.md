# Primeros pasos

## Prueba en línea

¿Quieres probar EsJS sin tener que instalar nada en tu equipo? Puedes hacerlo en línea utilizando el [EsJS Editor](https://editor.esjs.dev/).

## Instalación

### Prerequisitos

- [Node.js](https://nodejs.org/) (>= 18.0.0)
- Terminal para ejecutar comandos
- Editor de código
  - Recomendado: [Visual Studio Code](https://code.visualstudio.com/) con la extensión [EsJS](https://marketplace.visualstudio.com/items?itemName=EnzoNotario.vscode-esjs)

### Instalación automática

La forma más fácil de crear un proyecto EsJS es utilizando el siguiente comando, que te guiará en la creación de un proyecto a partir de una plantilla:

::: code-group

```bash[npm]
npm create esjs@latest
```

```bash[pnpm]
pnpm create esjs@latest
```

```bash[yarn]
yarn create esjs@latest
```

```bash[bun]
bun create esjs@latest
```

:::

Una vez que se haya creado el proyecto, puedes ejecutarlo con el siguiente comando:

::: code-group

```bash[npm]
npm run dev
```

```bash[pnpm]
pnpm dev
```

```bash[yarn]
yarn dev
```

```bash[bun]
bun run dev
```

:::

Navega a `http://localhost:3000` para ver el resultado.

### Instalación manual

La instalación manual puede realizarse utilizando [Babel](https://babeljs.io/) o [Vite](https://vitejs.dev/). Se recomienda utilizar Vite, ya que es más rápido y fácil de configurar.

#### Instalación con Vite

1. Crea un nuevo proyecto Vite con Vanilla JS:

  ::: code-group

  ```bash[npm]
  npm init vite@latest
  ```

  ```bash[pnpm]
  pnpm init vite@latest
  ```

  ```bash[yarn]
  yarn create vite@latest
  ```

  ```bash[bun]
  bun create vite@latest
  ```

  :::

  - Estructura del proyecto recomendada:

  ```plaintext
  ├── src/
  |   ├── vite.svg
  |   ├── contador.esjs
  │   ├── miapp.esjs
  |   ├── principal.js
  │   └── ...
  ├── index.html
  ├── style.css
  ├── package.json
  ├── vite.config.js
  └── ...
  ```

  - `src/contador.esjs` es un archivo de ejemplo que puedes eliminar.
  - `src/miapp.esjs` es el archivo principal de tu aplicación.
  - `src/principal.js` es el archivo que carga EsJS en tu HTML.
  - `index.html` es el archivo HTML principal de tu aplicación.
  - `style.css` es el archivo CSS principal de tu aplicación.
  - `vite.config.js` es el archivo de configuración de Vite.
  - `package.json` es el archivo de configuración de npm.

2. Instala las dependencias de desarrollo:
  
  ::: code-group

  ```bash[npm]
  npm install @es-js/vite-plugin-esjs --save-dev
  ```

  ```bash[pnpm]
  pnpm add @es-js/vite-plugin-esjs --save-dev
  ```

  ```bash[yarn]
  yarn add @es-js/vite-plugin-esjs --dev
  ```

  ```bash[bun]
  bun add @es-js/vite-plugin-esjs --dev
  ```

  :::

3. Configura Vite para usar EsJS en `vite.config.js`:

  **Nota**: Si no tienes un archivo `vite.config.js`, crea uno en la raíz del proyecto.

  ```js
  import { URL, fileURLToPath } from 'node:url'
  import { defineConfig } from 'vite'
  import EsJS from '@es-js/vite-plugin-esjs'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [
      // https://github.com/es-js/esjs
      EsJS()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.esjs',
      ],
    },
    build: {
      target: 'esnext',
      outDir: './compilado'
    },
    server: {
      port: 3000 // Puedes cambiar el puerto si lo necesitas
    }
  })
  ```

4. Modifica los archivos anteriormente mencionados para que se vean de la siguiente manera:

  ::: code-group

  ```html[index.html]
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto EsJS</title>
  </head>
  <body>
    <!-- Div donde se montará el componente -->
    <div id="app"></div>
    <!-- Archivo encargado de cargar esjs en tu HTML -->
    <script type="module" src="src/principal.js"></script>
  </body>
  </html>
  ```

  ```js[src/principal.js]
  import './miapp.esjs'
  ```

  ```esjs[src/miapp.esjs]
  importar '../style.css'
  importar viteLogo desde './vite.svg'
  importar { Contar } desde './contador.esjs'

  document.querySelector('#app').innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://es.js.org" target="_blank">
        <img src="https://es.js.org/assets/logo.png" class="logo vanilla esjs" alt="EsJs logo" />
      </a>
      <h1>Hola Vite + EsJs!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Clic en EsJs logo para más información.
      </p>
    </div>
  `

  Contar(document.querySelector('#counter'))
  ```

  ```esjs[src/contador.esjs]
  exportar funcion Contar(elemento) {
    mut conteo = 0
    const modContador = (conteo_actual) => {
      conteo = conteo_actual
      elemento.innerHTML = `Contador en ${conteo}`
    }
    elemento.addEventListener('click', () => modContador(conteo + 1))
    modContador(0)
  }
  ```

  ```css[style.css]
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vanilla:hover {
    filter: drop-shadow(0 0 2em #512DA8);
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }

  ```
  :::

5. Ejecuta tu proyecto:
  
    ::: code-group
  
    ```bash[npm]
    npm run dev
    ```
  
    ```bash[pnpm]
    pnpm dev
    ```
  
    ```bash[yarn]
    yarn dev
    ```
  
    ```bash[bun]
    bun run dev
    ```
  
    :::
  
    Navega a `http://localhost:3000` para ver el resultado.

Te recomendamos algunas integraciones para que puedas continuar aprendiendo sobre EsJS:

- [Instalación EsJS + Express](./integraciones/express-esjs.md)
- [Instalación Hono + Knex + MySql](./integraciones/hono-knex-mysql.md)

## Tutorial Interactivo

Puedes aprender EsJS de forma interactiva en [Aprender.EsJS.dev](https://aprender.esjs.dev/) (Trabajo En Progreso).
