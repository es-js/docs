# Bucle `mientras` (while loop)

El bucle `mientras` ejecuta un bloque de código mientras una condición sea verdadera.

```esjs
mientras (condicion) {
    // código
}
```

## Ejemplo

<EsEditor>

```esjs
mut i = 0;

mientras (i < 5) {
    consola.escribir(i);
    i = i + 1;
}
```

</EsEditor>
