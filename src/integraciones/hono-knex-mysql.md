# EsJS + Hono + Knex + MySQL

Hono es un framework para crear aplicaciones Web / APIs. Junto con Knex y MySQL, puedes crear aplicaciones con base de datos de manera sencilla.

## Iniciar un proyecto EsJS

Para iniciar un proyecto EsJS + Hono, puedes utilizar el siguiente comando:

::: code-group

```bash[npm]
npm create esjs@latest hono
```

```bash[pnpm]
pnpm create esjs@latest hono
```

```bash[yarn]
yarn create esjs@latest hono
```

```bash[bun]
bun create esjs@latest hono
```

:::

## Instalar Knex

Dentro de tu proyecto EsJS, instala Knex con el siguiente comando:

::: code-group

```bash[npm]
npm install -D knex mysql2
```

```bash[pnpm]
pnpm install -D knex mysql2
```

```bash[yarn]
yarn add -D knex mysql2
```

```bash[bun]
bun add -D knex mysql2
```

:::

## Archivo de Entorno

Crea un archivo `.env` en la raíz de tu proyecto con las siguientes variables de entorno, reemplazando los valores de acuerdo a tu configuración:

```bash
VITE_DB_HOST=localhost
VITE_DB_PORT=3306
VITE_DB_USER=root
VITE_DB_PASSWORD=password
VITE_DB_NAME=esjs
```

## Configurar Base de Datos

Dentro de la carpeta `api`, crea un archivo `bd.esjs` para configurar Knex con MySQL y definir las funciones para interactuar con la base de datos:

```esjs
importar knex desde 'knex'

exportar const bd = knex({
  client: 'mysql2',
  connection: {
    host: importar.meta.env.VITE_DB_HOST,
    port: importar.meta.env.VITE_DB_PORT,
    user: importar.meta.env.VITE_DB_USER,
    password: importar.meta.env.VITE_DB_PASSWORD,
    database: importar.meta.env.VITE_DB_NAME,
  },
})

exportar asincrono funcion migraciones() {
  retornar bd.schema.createTableIfNotExists('tareas', tabla => {
    tabla.increments('id')
    tabla.string('nombre')
    tabla.string('descripcion')
    tabla.boolean('completada').defaultTo(falso)
    tabla.timestamp('fechaCreacion').defaultTo(bd.fn.now())
  })
}

exportar asincrono funcion crearTarea(nombre, descripcion) {
  retornar bd('tareas').insert({ nombre, descripcion })
}

exportar asincrono funcion obtenerTareas() {
  retornar bd('tareas').select('*').orderBy('fechaCreacion', 'desc')
}

exportar asincrono funcion eliminarTarea(id) {
  retornar bd('tareas').where({ id }).delete()
}

exportar asincrono funcion completarTarea(id) {
  retornar bd('tareas').where({ id }).update({ completada: verdadero })
}

exportar asincrono funcion descompletarTarea(id) {
  retornar bd('tareas').where({ id }).update({ completada: falso })
}
```

## Crear Rutas

En el archivo `api/app.esjs`, puedes utilizar las funciones definidas en `bd.esjs` y definir las rutas para crear, obtener, eliminar, completar y descompletar tareas:

```esjs
importar { Hono } desde 'hono'
importar { html } desde 'hono/html'
importar {
  migraciones,
  crearTarea,
  obtenerTareas,
  eliminarTarea,
  completarTarea,
  descompletarTarea,
} desde './bd.esjs'

exportar const app = crear Hono().basePath('/')

app.get('/', asincrono c => {
  esperar migraciones()

  const tareas = esperar obtenerTareas()

  retornar c.html(html`
    <h1>
      Lista de Tareas con
      <a href="https://es.js.org/" target="_blank">EsJS</a>
      +
      <a href="https://hono.dev/" target="_blank">Hono</a>
      +
      <a href="http://knexjs.org/" target="_blank">Knex</a>
      +
      <a href="https://www.mysql.com/" target="_blank">MySQL</a>
    </h1>

    <div>
      <h2>Crear Tarea</h2>

      <form action="/tareas" method="POST">
        <input type="text" name="nombre" placeholder="Nombre de la tarea" />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción de la tarea"
        />
        <button type="submit">Crear tarea</button>
      </form>
    </div>

    <div>
      <h2>Tareas</h2>

      <ul>
        ${tareas.mapear(
          tarea => html`
            <li>
              ${tarea.completada ? html`<s>` : ''}

              <strong> ${tarea.nombre} </strong>
              <p>${tarea.descripcion}</p>
              <!-- fecha de creacion -->
              <small>${tarea.fechaCreacion}</small>

              ${tarea.completada ? html`</s>` : ''}

              <div style="display: flex; gap: 1rem;">
                <form action="/tareas/${tarea.id}/completar" method="POST">
                  <button type="submit">Completar</button>
                </form>

                <form action="/tareas/${tarea.id}/descompletar" method="POST">
                  <button type="submit">Descompletar</button>
                </form>

                <form action="/tareas/${tarea.id}" method="POST">
                  <button type="submit">Eliminar</button>
                </form>
              </div>

              <hr />
            </li>
          `,
        )}
      </ul>
    </div>
  `);
})

app.post('/tareas', asincrono c => {
  const cuerpo = esperar c.req.parseBody()

  esperar crearTarea(cuerpo.nombre, cuerpo.descripcion)

  retornar c.redirect('/')
})

app.post('/tareas/:id', asincrono c => {
  const { id } = c.req.param()

  esperar eliminarTarea(id)

  retornar c.redirect('/')
})

app.post('/tareas/:id/completar', asincrono c => {
  const { id } = c.req.param()

  esperar completarTarea(id)

  retornar c.redirect('/')
})

app.post('/tareas/:id/descompletar', asincrono c => {
  const { id } = c.req.param()

  esperar descompletarTarea(id)

  retornar c.redirect('/')
})

app.get('/api/hola', c => c.json({ mensaje: '¡Hola mundo desde EsJS + Hono!' }))

exportar porDefecto app
```

## Ejecutar el Servidor

Para ejecutar el servidor, utiliza el siguiente comando:

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

Navega a [`http://localhost:5173`](http://localhost:5173) para ver tu aplicación en acción. ¡Disfruta creando aplicaciones con EsJS, Hono, Knex y MySQL! 🚀

## Despliegue en Vercel

Puedes subir este proyecto a [GitHub](https://github.com/) y desplegarlo en [Vercel](https://vercel.com/) con los siguientes pasos:

1. Crea un repositorio en GitHub y sube tu proyecto.
2. Crea una cuenta en Vercel y conecta tu cuenta de GitHub.
3. Importa tu proyecto desde GitHub a Vercel.
4. Configura las variables de entorno en Vercel con los mismos valores que en tu archivo `.env`. Ten en cuenta que el servidor de MySQL debe ser accesible desde Internet.
5. ¡Listo! Tu aplicación estará disponible en línea en Vercel.
