El `operador condicional` es el único operador de EsJS que toma tres operandos. El operador puede tener uno de dos valores según una condición. La sintaxis es:

```esjs
condicion ? valor1 : valor2
```

Si `condicion` es `verdadero`, el operador tiene el valor de `valor1`. De lo contrario, tiene el valor de `valor2`. Puedes utilizar el operador condicional en cualquier lugar donde normalmente utilizas un operador estándar.

Por ejemplo:

<EsEditor>

```esjs
mut edad = 20;
mut estado = (edad >= 18) ? 'Mayor de edad' : 'Menor de edad';

consola.escribir(estado);
```

</EsEditor>

Esta declaración asigna el valor "`Mayor de edad`" a la variable `estado` si `edad` es de dieciocho años o más. De lo contrario, asigna el valor "`Menor de edad`" a `estado`.
