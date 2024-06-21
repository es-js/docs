# Bucle `hacer` ... `mientras` (do ... while loop)

La declaración `hacer` ... `mientras` ejecuta un bloque de código al menos una vez, y luego repite el bloque de código mientras una condición sea verdadera.

```esjs
hacer {
    // código
} mientras (condicion);
```

## Ejemplo

<EsEditor>

```esjs
mut i = 0;

hacer {
    consola.escribir(i);
    i = i + 1;
} mientras (i < 5);
```

</EsEditor>
