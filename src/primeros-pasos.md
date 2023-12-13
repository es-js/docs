# Primeros pasos

## Prueba en línea

¿Quieres probar EsJS sin tener que instalar nada en tu equipo? Puedes hacerlo en línea utilizando el [EsJS Editor](https://editor.esjs.dev/).

## Instalación

### Prerequisitos

- [Node.js](https://nodejs.org/) (>= 18.0.0)
- [Vite](https://vitejs.dev/) (>= 2.0.0)
- Terminal para ejecutar comandos
- Editor de código
  - Recomendado: [Visual Studio Code](https://code.visualstudio.com/) con la extensión [EsJS](https://marketplace.visualstudio.com/items?itemName=EnzoNotario.vscode-esjs)

### Instalación automática

La forma más fácil de crear un proyecto EsJS es utilizando el siguiente comando, que te guiará en la creación de un proyecto a partir de una plantilla:

::: code-group

```bash[npm]
npm create esjs
```

```bash[pnpm]
pnpm create esjs
```

```bash[yarn]
yarn create esjs
```

```bash[bun]
bun create esjs
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

Para agregar EsJS a un proyecto existente, sigue los siguientes pasos:

1. Instala EsJS como dependencia de desarrollo:

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
   bun install @es-js/vite-plugin-esjs --dev
   ```

   :::
2. Agrega el plugin de EsJS a tu configuración de Vite:

   ```js[vite.config.js]
   import { defineConfig } from 'vite'
   import EsJS from '@es-js/vite-plugin-esjs'

   export default defineConfig({
     plugins: [
       EsJS()
     ],
     resolve: {
       extensions: [
         // Otras extensiones...
         '.js',
         '.esjs',
       ]
     }
   })
    ```
3. Listo, ya puedes crear archivos `.esjs` e importarlos desde tu archivo `.js` principal.

## Tutorial Interactivo

Puedes aprender EsJS de forma interactiva en [Aprender.EsJS.dev](https://aprender.esjs.dev/) (Trabajo en progreso).
