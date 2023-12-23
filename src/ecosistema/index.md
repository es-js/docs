# Ecosistema EsJS

El lenguaje EsJS está compuesto por un conjunto de librerías que se pueden utilizar de forma independiente o combinadas entre sí. Cada librería tiene una funcionalidad específica y se puede utilizar en cualquier proyecto que utilice EsJS/JavaScript.

## Prueba

[`@es-js/prueba`](https://npmjs.com/package/@es-js/prueba) es una librería que permite escribir pruebas unitarias que se ejecutan en un navegador web.

<InlinePlayground only-playground>

```esjs
importar { afirmar, prueba } desde "@es-js/prueba"

prueba("prueba de ejemplo", funcion () {
  const resultado = 1 + 1
  afirmar(resultado === 2)
})
```

</InlinePlayground>


<div class="pt-8 flex justify-center">
<a class="action primary-soft" href="/ecosistema/prueba">Ver más</a>
</div>

## Terminal

[`@es-js/terminal`](https://npmjs.com/package/@es-js/terminal) es un componente que permite interactuar con el Usuario a través de la línea de comandos en un navegador web.

<InlinePlayground only-playground hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir("Ingresa tu nombre:")
const nombre = esperar Terminal.leer()
Terminal.escribir(`Hola ${nombre}`)
```

</InlinePlayground>

<div class="pt-8 flex justify-center">
<a class="action primary-soft" href="/ecosistema/terminal">Ver más</a>
</div>

## Tiza

[`@es-js/tiza`](https://npmjs.com/package/@es-js/tiza) es una librería que permite escribir mensajes en la Terminal con colores y estilos.

<InlinePlayground only-playground hide-console hide-preview="false">

```esjs
importar { tiza } desde "@es-js/tiza"
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir(
    Terminal.centrar(
        tiza.fondoIndigo.negrita.blanco.subrayado(
            "Hola mundo desde EsJS"
        )
    )
)
```

</InlinePlayground>

<div class="pt-8 flex justify-center">
<a class="action primary-soft" href="/ecosistema/tiza">Ver más</a>
</div>
