import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfigWithTheme } from 'vitepress'
// @ts-expect-error - esjsSyntax is a json file
import esjsSyntax from '@es-js/language-tools/esjs.tmLanguage.json' assert {type: 'json'}
import { metaData } from './constants'

const isDev: boolean = process.env.NODE_ENV === 'development'
const gtagId: string = isDev ? 'G-TEST' : 'G-0XH36H9K3M'
const links = []

export default async () => {
  const esjsLanguage = {
    ...esjsSyntax,
    id: 'esjs',
    name: 'esjs',
    scopeName: 'source.esjs',
  }

  const defaultSidebar = [
    {
      text: 'Empezando',
      items: [
        {
          items: [
            { text: 'Introducción', link: '/introduccion' },
            { text: 'Primeros pasos', link: '/primeros-pasos' },
          ],
        },
      ],
    },

    {
      text: 'Guía EsJS',
      items: [
        {
          items: [
            { text: 'Gramática y Tipos', link: '/guia/gramatica-y-tipos' },
            { text: 'Control del flujo y manejo de errores', link: '/guia/control-del-flujo-y-manejo-de-errores' },
            { text: 'Bucles e iteración', link: '/guia/bucles-e-iteracion' },
            { text: 'Funciones', link: '/guia/funciones' },
            { text: 'Expresiones y operadores', link: '/guia/expresiones-y-operadores' },
            { text: 'Números y fechas', link: '/guia/numeros-y-fechas' },
            { text: 'Formato de texto', link: '/guia/formato-de-texto' },
          ],
        },
      ],
    },

    {
      text: 'Sintaxis',
      items: [
        {
          items: [
            { text: 'Palabras reservadas', link: '/sintaxis/palabras-reservadas' },
            { text: 'Comentarios', link: '/sintaxis/comentarios' },
            { text: 'Variables', link: '/sintaxis/variables' },
            { text: 'Constantes', link: '/sintaxis/constantes' },
            { text: 'Operadores', link: '/sintaxis/operadores' },
            { text: 'Condición si ... sino', link: '/sintaxis/condicion-si' },
            { text: 'Declaración elegir', link: '/sintaxis/elegir' },
            { text: 'Bucle para', link: '/sintaxis/para' },
            { text: 'Bucle mientras', link: '/sintaxis/mientras' },
            { text: 'Bucle hacer ... mientras', link: '/sintaxis/hacer-mientras' },
            { text: 'Módulos', link: '/sintaxis/modulos' },
          ],
        },
      ],
    },

    {
      text: 'Tipos de datos',
      items: [
        {
          items: [
            { text: 'Booleano', link: '/tipos-de-datos/booleano' },
            { text: 'nulo', link: '/tipos-de-datos/nulo' },
            { text: 'Numero', link: '/tipos-de-datos/numero' },
            { text: 'Cadena', link: '/tipos-de-datos/cadena' },
            { text: 'Objeto', link: '/tipos-de-datos/objeto' },
            { text: 'Matriz', link: '/tipos-de-datos/matriz' },
            { text: 'funcion', link: '/tipos-de-datos/funcion' },
            { text: 'Simbolo', link: '/tipos-de-datos/simbolo' },
          ],
        },
      ],
    },

    {
      text: 'Avanzado',
      items: [
        {
          items: [
            { text: 'Elevación', link: '/avanzado/elevacion' },
          ],
        },
      ],
    },

    {
      text: 'Integraciones',
      items: [
        {
          items: [
            { text: 'EsJS + Express', link: '/integraciones/express' },
            { text: 'Hono + Knex + MySQL', link: '/integraciones/hono-knex-mysql' },
          ],
        },
      ],
    },
  ]

  return defineConfigWithTheme(
    {
      lang: metaData.lang,
      title: metaData.title,
      description: metaData.description,
      markdown: {
        theme: {
          light: 'vitesse-light',
          dark: 'vitesse-dark',
        },
        languages: [
          esjsLanguage,
        ],
      },
      cleanUrls: true,

      head: [
        ['meta', { name: 'theme-color', content: '#673AB7' }],

        // OG Tags
        ['meta', { property: 'og:title', content: 'EsJS: JavaScript con sintaxis en Español' }],
        ['meta', { property: 'og:description', content: 'Lenguaje de programación con sintaxis en Español' }],
        ['meta', { property: 'og:image', content: 'https://es.js.org/assets/og-image.png' }],
        ['meta', { property: 'og:url', content: 'https://es.js.org/' }],
        ['meta', { property: 'og:type', content: 'website' }],

        // Twitter Tags
        ['meta', { name: 'twitter:title', content: 'EsJS: JavaScript con sintaxis en Español' }],
        ['meta', { name: 'twitter:description', content: 'Lenguaje de programación con sintaxis en Español' }],
        ['meta', { name: 'twitter:image', content: 'https://es.js.org/assets/og-image.png' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

        [
          'script',
          {
            async: 'true',
            src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
          },
        ],
        [
          'script',
          {},
          `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${gtagId}');`,
        ],
      ],

      rewrites: {
        '/guia/introduccion.md': '/introduccion.md',
        '/guia/empezando.md': '/primeros-pasos.md',
      },

      themeConfig: {
        logo: '/assets/logo.png',

        outline: [1, 3],

        nav: [
          { text: 'Guía', link: '/guia/empezando' },
          { text: 'Ecosistema', link: '/ecosistema/' },
          { text: 'Ejemplos', link: '/ejemplos' },
          { text: 'Tutorial', link: 'https://aprender.esjs.dev/' },
        ],

        sidebar: {
          '/': defaultSidebar,
          '/guia/': defaultSidebar,
          '/sintaxis/': defaultSidebar,
          '/tipos-de-datos/': defaultSidebar,
          '/avanzado/': defaultSidebar,

          '/ecosistema/': [
            {
              text: 'Ecosistema',
              items: [
                {
                  items: [
                    { text: 'Prueba', link: '/ecosistema/prueba' },
                    { text: 'Terminal', link: '/ecosistema/terminal' },
                    { text: 'Tiza', link: '/ecosistema/tiza' },
                  ],
                },
              ],
            },
          ],
        },

        editLink: {
          pattern: 'https://github.com/es-js/docs/edit/main/src/:path',
          text: 'Editar esta página en GitHub',
        },

        socialLinks: [
          { icon: 'discord', link: 'https://discord.gg/BG4NuwQyMW' },
          { icon: 'github', link: 'https://github.com/es-js/esjs' },
        ],

        footer: {
          message: 'Publicado bajo licencia MIT.',
          copyright: 'Copyright © 2022-presente Enzo Notario',
        },

        algolia: {
          appId: 'JXOQXAM65O',
          apiKey: '7545f38dfa3c4f435bbad0de83ec7189',
          indexName: 'esjs',
        },
      },

      transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id)) {
          links.push({
            url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
            lastmod: pageData.lastUpdated,
          })
        }
      },

      buildEnd: async ({ outDir }) => {
        const sitemap = new SitemapStream({
          hostname: 'https://es.js.org/',
        })
        const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
        sitemap.pipe(writeStream)
        links.forEach(link => sitemap.write(link))
        sitemap.end()
        await new Promise(resolve => writeStream.on('finish', resolve))
      },

      ignoreDeadLinks: [
        // ignore all localhost links
        /^https?:\/\/localhost/,
      ],
    },
  )
}
