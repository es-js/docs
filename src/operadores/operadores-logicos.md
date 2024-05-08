Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano.

> Sin embargo, los operadores `&&` y `||` en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano. Los operadores lógicos se describen en la siguiente tabla.

| Operador            | Uso              | Descripción                                                                                                                                                                                                                              |
|---------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AND Lógico` (`&&`) | `expr1 && expr2` | Devuelve `expr1` si se puede convertir a `falso`; de lo contrario, devuelve `expr2`. Por lo tanto, cuando se usa con valores booleanos, `&&` devuelve `verdadero` si ambos operandos son `verdadero`; de lo contrario, devuelve `falso`. |
| `OR lógico` (`\|\|`)               | `expr1 \|\| expr2` | Devuelve `expr1` si se puede convertir a `verdadero`; de lo contrario, devuelve `expr2`. Por lo tanto, cuando se usa con valores booleanos, `||` devuelve `true` si alguno de los operandos es `true`; si ambos son falsos, devuelve `falso`. |
| `NOT lógico` (`!`)  | `!expr`          | Devuelve `falso` si su único operando se puede convertir a `true`; de lo contrario, devuelve `true`.                                                                                                                                      |

Ejemplos de expresiones que se pueden convertir a `falso` son aquellos que se evalúan como `null`, 0, `NaN`, la cadena vacía ("") o `undefined`.

El siguiente código muestra ejemplos del operador `&&` (`AND` lógico).

```esjs
mut a1 =  true && true;     // t && t devuelve true
mut a2 =  true && falso;    // t && f devuelve falso
mut a3 = falso && true;     // f && t devuelve falso
mut a4 = falso && (3 == 4); // f && f devuelve falso
mut a5 = 'Cat' && 'Dog';    // t && t devuelve Dog
mut a6 = falso && 'Cat';    // f && t devuelve falso
mut a7 = 'Cat' && falso;    // t && f devuelve falso
```

El siguiente código muestra ejemplos del operador || (`OR` lógico).

```esjs
mut o1 =  true || true;     // t || t devuelve true
mut o2 = falso || true;     // f || t devuelve true
mut o3 =  true || falso;    // t || f devuelve true
mut o4 = falso || (3 == 4); // f || f devuelve falso
mut o5 = 'Cat' || 'Dog';    // t || t devuelve Cat
mut o6 = falso || 'Cat';    // f || t devuelve Cat
mut o7 = 'Cat' || falso;    // t || f devuelve Cat
```

El siguiente código muestra ejemplos de el operador ! (`NOT` lógico).

```esjs
mut n1 = !true;  // !t devuelve falso
mut n2 = !falso; // !f devuelve true
mut n3 = !'Cat'; // !t devuelve falso
```
