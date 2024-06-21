# `funcion` (function)

Una función es un bloque de código que puede ser ejecutado en cualquier momento. En EsJS, las funciones se declaran explícitamente con la palabra clave `funcion`:

```esjs
funcion miFuncion() {
    // código
}
```

## Ejemplo

<EsEditor>

```esjs
funcion miFuncion() {
    consola.escribir('Hola mundo');
}

miFuncion();
```

</EsEditor>

## Parámetros (arguments)

Una función puede recibir parámetros. Los parámetros son variables que se declaran en la definición de la función y que pueden ser accedidas dentro del cuerpo de la función.

```esjs
funcion miFuncion(parametro1, parametro2) {
    // código
}
```

### Ejemplo

<EsEditor>

```esjs
funcion miFuncion(parametro1, parametro2) {
    consola.escribir(parametro1 + parametro2);
}

miFuncion(1, 2);
```

</EsEditor>

## Retorno (return)

Una función puede retornar un valor. El valor retornado puede ser asignado a una variable o usado en cualquier otra parte del programa.

```esjs
funcion miFuncion() {
    retornar 1;
}
```

### Ejemplo

<EsEditor>

```esjs
funcion miFuncion() {
    retornar 1;
}

mut x = miFuncion();
```

</EsEditor>

## Funciones anónimas (anonymous functions)

Una función anónima es una función que no tiene nombre. En EsJS, las funciones anónimas se declaran explícitamente con la palabra clave `funcion`:

```esjs
funcion() {
    // código
}
```

### Ejemplo

<EsEditor>

```esjs
(funcion() {
    consola.escribir('Hola mundo');
})();
```

</EsEditor>

## Funciones flecha (arrow functions)

Una función flecha es una alternativa más corta para declarar funciones anónimas. En EsJS, las funciones flecha se declaran explícitamente usando la sintaxis `=>`:

```esjs
() => {
    // código
}
```

### Ejemplo

<EsEditor>

```esjs
(() => {
    consola.escribir('Hola mundo');
})();
```

</EsEditor>
