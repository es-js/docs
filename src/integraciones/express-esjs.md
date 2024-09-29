# EsJS + Express

1. Crear proyecto Node.js:

  ::: code-group

  ```bash[npm]
  npm init -y
  ```
  ```bash[pnpm]
  pnpm init -y
  ```
  ```bash[yarn]
  yarn init -y
  ```
  ```bash[bun]
  bun init -y
  ```
  :::

  - Estructura de carpetas recomendada:

    ```plaintext
    .
    ├── src
    │   ├── app.esjs
    │   └── otro-archivo.esjs
    ├── vite.config.js
    └── package.json
    ```

    - `src/app.esjs`: Archivo principal de la aplicación.
    - `src/otro-archivo.esjs`: Módulo esjs.
    - `vite.config.js`: Archivo de configuración de Vite.

2. Instalar dependencias:
  - Dependencias de desarrollo
    ::: code-group

    ```bash[npm]
    npm install vite vavite @es-js/vite-plugin-esjs --save-dev
    ```
    ```bash[pnpm]
    pnpm install vite vavite @es-js/vite-plugin-esjs --save-dev
    ```
    ```bash[yarn]
    yarn add vite vavite @es-js/vite-plugin-esjs --save-dev
    ```
    ```bash[bun]
    bun add vite vavite @es-js/vite-plugin-esjs --save-dev
    ```

    :::
  - Dependencias de producción
    ::: code-group

    ```bash[npm]
    npm install express
    ```
    ```bash[pnpm]
    pnpm install express
    ```
    ```bash[yarn]
    yarn add express
    ```
    ```bash[bun]
    bun add express
    ```

    :::

3. Crear archivo `vite.config.js` con la siguiente configuración:

  ```js
  import { URL, fileURLToPath } from 'node:url'
  import { defineConfig } from 'vite'
  import EsJS from '@es-js/vite-plugin-esjs'
  import { vavite } from "vavite";

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [
      // https://github.com/es-js/esjs
      EsJS(),

      // https://github.com/cyco130/vavite
      vavite({
        serverEntry: './src/app.esjs',
      }),
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
      outDir: './compilado'
    },
    server: {
      port: 4500 // Acá puedes cambiar el puerto del servidor de desarrollo (opcional)
    }
  })
  ```

4. Crear archivo `src/app.esjs` con el siguiente contenido:

  ```esjs
  importar express desde 'express'
  importar httpDevServer desde 'vavite/http-dev-server'

  const servidor = express()
  const puerto = process.env.PORT || 4500

  servidor.use('/', (req, res) => {
    res.send('¡Hola, mundo hispano hablante!')
  })

  si (httpDevServer) {
    httpDevServer.on('request', servidor)
    consola.escribir(`Servidor corriendo en el puerto ${puerto}`)
  }
  sino {
    servidor.listen(puerto, () => {
      consola.escribir(`Servidor corriendo en el puerto ${puerto}`)
    })
  }
  ```

5. Agregar las siguientes líneas al archivo `package.json`:

  ```json
  {
    "type": "module",
    "scripts": {
      "des": "vite",
      "prod": "vite build --ssr --mode=production",
      "prev": "vite preview"
    }
  }
  ```

6. Ejecutar el servidor de desarrollo:

  ::: code-group

  ```bash[npm]
  npm run des
  ```
  ```bash[pnpm]
  pnpm des
  ```
  ```bash[yarn]
  yarn des
  ```
  ```bash[bun]
  bun run des
  ```
  :::

  Navega a `http://localhost:4500` para ver el resultado.