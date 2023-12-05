# Variables

Una variable es un espacio de memoria que almacena un valor. En EsJS, las variables se declaran explícitamente con la palabra clave `var` (variables locales) o `global` (variables globales).

## Variables locales `var`

Las variables locales son variables que solo pueden ser accedidas desde el bloque de código donde fueron declaradas. Se declaran con la palabra clave `var`:

```esjs
    var x = 1
```

### Ejemplo

<InlinePlayground>

```esjs
    si (verdadero) {
        var x = 1
        
        consola.escribir(x) // Muestra `1`
    }
    
    /**
    * La siguiente línea de código muestra `undefined`, ya que `x` es 
    * una variable local y no puede ser accedida desde fuera del bloque
    * de código donde fue declarada.
    */
    consola.escribir(tipoDe x)
```

</InlinePlayground>

## Variables globales `global`

Las variables globales son variables que pueden ser accedidas desde cualquier parte del programa. Se declaran con la palabra clave `global`:

```esjs
    global x = 1
```

### Ejemplo

<InlinePlayground>

```esjs
    si (verdadero) {
        global x = 1
        
        consola.escribir(x) // Muestra `1`
    }
    
    /**
    * La siguiente línea de código muestra `number`, ya que `x` es 
    * una variable global y puede ser accedida desde cualquier parte
    * del programa.
    */
    consola.escribir(tipoDe x)
```

</InlinePlayground>
