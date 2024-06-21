# Terminal

El paquete [`@es-js/terminal`](https://npmjs.com/package/@es-js/terminal) provee un componente de línea de comandos que permite interactuar con el Usuario.

## Funciones

El objeto Terminal provee funciones para interactuar con el Usuario.

### escribir

Escribe un mensaje en la terminal.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir("Hola mundo desde EsJS")
```

</EsEditor>

### leer

Lee un valor ingresado por el Usuario.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir("Ingresa tu nombre:")

const nombre = esperar Terminal.leer()

Terminal.escribir(`Hola ${nombre}`)
```

</EsEditor>

### leerCadena

Lee una cadena ingresada por el Usuario.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir("Ingresa tu nombre:")
const nombre = esperar Terminal.leerCadena()

Terminal.escribir("Ingresa tu apellido:")
const apellido = esperar Terminal.leerCadena()

Terminal.escribir(`Hola ${nombre} ${apellido}`)
```

</EsEditor>

### leerNumero

Lee un número ingresado por el Usuario.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir("Ingresa tu edad:")
const edad = esperar Terminal.leerNumero()

Terminal.escribir(`Tienes ${edad} años`)
```

</EsEditor>

### leerSecreto

Lee un valor ingresado por el Usuario sin mostrarlo en la terminal.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir("Ingresa tu contraseña:")
const contraseña = esperar Terminal.leerSecreto()

Terminal.escribir("Ingresa tu contraseña nuevamente:")
const contraseña2 = esperar Terminal.leerSecreto()

Terminal.escribir(contraseña === contraseña2 ? "Las contraseñas coinciden" : "Las contraseñas no coinciden")
```

</EsEditor>

### leerEnter

Lee el ingreso de un Enter por parte del Usuario.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir("Presiona Enter para continuar")
esperar Terminal.leerEnter()
Terminal.escribir("Continuando...")
```

</EsEditor>

### limpiar

Limpia la terminal.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir("Hola mundo desde EsJS")
Terminal.escribir("Presiona Enter para limpiar la terminal")
esperar Terminal.leerEnter()
Terminal.limpiar()
```

</EsEditor>

### centrar

Centra el texto en la terminal.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir(Terminal.centrar("Hola mundo desde EsJS"))
```

</EsEditor>

### alinearIzquierda

Alinea el texto a la izquierda en la terminal.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir(Terminal.alinearIzquierda("Hola mundo desde EsJS"))
```

</EsEditor>

### alinearDerecha

Alinea el texto a la derecha en la terminal.

<EsEditor hide-console hide-preview="false">

```esjs
importar { Terminal } desde "@es-js/terminal"

Terminal.escribir(Terminal.alinearDerecha("Hola mundo desde EsJS"))
```

</EsEditor>
