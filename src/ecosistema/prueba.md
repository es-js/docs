# Prueba

El paquete [`@es-js/prueba`](https://npmjs.com/package/@es-js/prueba) provee funciones para realizar pruebas unitarias.

## Funciones de prueba

Las funciones de prueba se utilizan para ejecutar código y verificar que el resultado sea el esperado.

### prueba

Ejecuta una prueba unitaria.

<EsEditor>

```esjs
importar { prueba } desde "@es-js/prueba"

prueba("Nombre de mi prueba", funcion () {
    // Código de mi prueba
})
```

</EsEditor>

### pruebas

Ejecuta varias pruebas unitarias.

<EsEditor>

```esjs
importar { pruebas } desde "@es-js/prueba"

pruebas({
    "Nombre de mi prueba 1": funcion () {
        // Código de mi prueba 1
    },
    "Nombre de mi prueba 2": funcion() {
        // Código de mi prueba 2
    }
})
```

</EsEditor>

## Funciones de aserción

Las funciones de aserción se utilizan para verificar que una condición se cumpla. Si la condición no se cumple, la prueba falla.

### afirmar

Afirma que una expresión es verdadera.

<EsEditor>

```esjs
importar { afirmar, prueba } desde "@es-js/prueba"

prueba("1 + 1 es igual a 2", funcion () {
    afirmar(1 + 1 === 2)
})
```

</EsEditor>

### afirmarIguales

Afirma que dos valores son iguales.

<EsEditor>

```esjs
importar { afirmarIguales, prueba } desde "@es-js/prueba"

prueba("1 + 1 es igual a 2", funcion () {
    afirmarIguales(1 + 1, 2)
})
```

</EsEditor>

### afirmarDistinto

Afirma que dos valores son distintos.

<EsEditor>

```esjs
importar { afirmarDistinto, prueba } desde "@es-js/prueba"

prueba("1 + 1 no es igual a 3", funcion () {
    afirmarDistinto(1 + 1, 3)
})
```

</EsEditor>

### afirmarSimilares

Afirma que dos valores son similares (es decir, que son iguales pero no necesariamente del mismo tipo).

<EsEditor>

```esjs
importar { afirmarSimilares, prueba } desde "@es-js/prueba"

prueba("1 + 1 es igual a 2", funcion () {
    afirmarSimilares(1 + 1, "2")
})
```

</EsEditor>

### afirmarVerdadero

Afirma que una expresión es verdadera.

<EsEditor>

```esjs
importar { afirmarVerdadero, prueba } desde "@es-js/prueba"

prueba("1 + 1 es igual a 2", funcion () {
    afirmarVerdadero(1 + 1 === 2)
})
```

</EsEditor>

### afirmarFalso

Afirma que una expresión es falsa.

<EsEditor>

```esjs
importar { afirmarFalso, prueba } desde "@es-js/prueba"

prueba("1 + 1 no es igual a 3", funcion () {
    afirmarFalso(1 + 1 === 3)
})
```

</EsEditor>


## Funciones de prueba asincrónicas

Las funciones de prueba asincrónicas se utilizan para realizar pruebas unitarias que involucran código asincrónico.

### pruebaAsincrona

Ejecuta una prueba unitaria asincrónica.

<EsEditor>

```esjs
importar { pruebaAsincrona } desde "@es-js/prueba"

pruebaAsincrona("Nombre de mi prueba asincrónica", asincrono funcion () {
    // Código de mi prueba asincrónica
})
```

</EsEditor>

### pruebasAsincronas

Ejecuta varias pruebas unitarias asincrónicas.

<EsEditor>

```esjs
importar { pruebasAsincronas } desde "@es-js/prueba"

pruebasAsincronas({
    "Nombre de mi prueba asincrónica 1": asincrono funcion () {
        // Código de mi prueba asincrónica 1
    },
    "Nombre de mi prueba asincrónica 2": asincrono funcion() {
        // Código de mi prueba asincrónica 2
    }
})
```

</EsEditor>
