<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/enzonotario.png',
    name: 'Enzo Notario',
    title: 'Creador',
    links: [
      { icon: 'github', link: 'https://github.com/enzonotario' },
      { icon: 'twitter', link: 'https://twitter.com/enzonotario_' }
    ]
  },
  {
    avatar: 'https://www.github.com/Trollhunters501PC.png',
    name: 'Trollhunters501PC',
    title: 'Colaborador',
    links: [
      { icon: 'github', link: 'https://github.com/Trollhunters501PC' },
      { icon: 'youtube', link: 'https://www.youtube.com/@trollhunters501' },
      { icon: 'discord', link: 'https://discordapp.com/users/951997245375545424' }
    ]
  },
  {
    avatar: 'https://www.github.com/AntaresGT.png',
    name: 'AntaresGT',
    title: 'Colaborador',
    links: [
      { icon: 'github', link: 'https://github.com/AntaresGT' },
    ]
  },
]
</script>

# Introducción

EsJS es un lenguaje de programación que utiliza palabras del idioma español para escribir código. La gramática de EsJS es la misma que la de JavaScript, solo que utiliza tokens del idioma español. Al compilarse, el código EsJS es equivalente al código JavaScript, por lo que puedes utilizarlo en cualquier lugar donde se ejecute JavaScript.

El siguiente código EsJS:

```esjs
funcion iniciar() {
    const fecha = crear Fecha()
    consola.escribir("Hola Mundo!", fecha)
}

iniciar()
```

Produce el código JavaScript:

```js
function iniciar() {
    const fecha = new Date()
    console.log("Hola Mundo!", fecha)
}

iniciar()
```

## ¿Por qué usar EsJS?

EsJS fue creado con la intención de facilitar a hispanohablantes el aprendizaje de la programación al utilizar palabras del idioma español, pero con la misma capacidad de JavaScript. Una vez que se aprende a programar en EsJS, es muy fácil cambiar a JavaScript, ya que la gramática es la misma.


## ¿Cuál es la diferencia entre EsJS y JavaScript?

EsJS es un lenguaje de programación que utiliza palabras del idioma español para escribir código. EsJS compila el código escrito en español a código JavaScript.

A su vez, JavaScript es un lenguaje de programación interpretado, que utiliza palabras del idioma inglés para escribir código. Es uno de los lenguajes de programación más utilizados en el mundo.

Por lo tanto, EsJS y JavaScript son lenguajes muy similares, y gracias a la utilización de plugins adecuados, EsJS puede hacer prácticamente lo mismo que JavaScript. De esta manera, EsJS es prácticamente igual a JavaScript en términos de funcionalidades y capacidades.

## Guía EsJS

La guía de EsJS está basada en la [Guía de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/) de [MDN Web Docs](https://developer.mozilla.org/), convenientemente adaptada a EsJS.

Es importante entender que el código EsJS que escribimos es transpilado a JavaScript en el momento previo a ejecutarse. Por lo que, si bien escribimos código EsJS, en realidad se ejecuta código JavaScript.

De esta manera, esta guía enlazará algunos términos/conceptos a documentación que corresponde a JavaScript, pero que también aplican a EsJS, sólo que utilizando tokens en español.

La lista de tokens en español que emplea EsJS, y su equivalencia a JavaScript, puede consultarse en: [Palabras reservadas](./sintaxis/palabras-reservadas).

## Colaboradores

EsJS es un proyecto de código abierto, y cualquier persona puede contribuir al mismo. Si deseas colaborar, puedes hacerlo a través de [GitHub](https://github.com/es-js/esjs).

<VPTeamMembers size="small" :members />
