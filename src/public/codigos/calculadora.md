```esjs
importar { html, reactive } desde "npm/@arrow-js/core/+esm"
importar { setup } desde "npm/twind/shim/+esm"

const datos = reactive({
  numero: "",
  calculos: [],
})

const operaciones = {
  "+": (acarreo, entrada) => acarreo + entrada,
  "-": (acarreo, entrada) => acarreo - entrada,
  "/": (acarreo, entrada) => acarreo / entrada,
  "*": (acarreo, entrada) => acarreo * entrada,
}

funcion calcular() {
  datos.calculos.agregar(interpretarDecimal(datos.numero) || 0)
  datos.numero = Cadena(
    datos.calculos.reducir(
      (acarreo, op, index, calculos) =>
        esNuN(op) ? operaciones[op](acarreo, calculos[index + 1]) : acarreo,
      datos.calculos.sacarPrimero()
    )
  )
  datos.calculos = []
}

funcion operar(op) {
  si (datos.numero) {
    datos.calculos.agregar(interpretarDecimal(datos.numero))
    datos.calculos.agregar(op)
    datos.numero = ""
  }
}

const operacion = (op) => {
  retornar html`<button class="p-2 bg-indigo-100 hover:bg-indigo-200 rounded"
    @click="${() => operar(op)}">
    ${op}
  </button>`
}

funcion limpiar() {
  datos.numero = ""
  datos.calculos = []
}

const digito = (numero) => {
  retornar html`<button class="p-2 bg-gray-100 hover:bg-gray-200 rounded"
    @click="${() => {
      datos.numero += numero
    }}"
  >
    ${numero}
  </button>`
}

const app = document.getElementById("app")

const plantilla = html`
<div class="w-full h-full grid place-items-center">
  <div class="w-60">
    <p class="p-2 text-center text-xs text-gray-900 dark:text-white">
      Calculadora simple creada con <br/>
      <a href="https://es.js.org/" target="_blank" class="text-indigo-800 dark:text-indigo-400">EsJS</a>
      + 
      <a href="https://www.arrow-js.com/" target="_blank" class="text-indigo-800 dark:text-indigo-400">ArrowJS</a>
      + 
      <a href="https://twind.dev/" target="_blank" class="text-indigo-800 dark:text-indigo-400">Twind</a>
    </p>

    <div class="w-60 bg-white border rounded">
      <div class="w-full h-10 grid items-center px-2 text-xl text-right border-b">${() => datos.numero}</div>
      <div class="w-full h-8 grid items-center px-2 bg-gray-100 text-sm text-right">
        ${() => datos.calculos.join(" ") + " " + datos.numero}
      </div>

      <div class="grid grid-cols-3 gap-1 px-3 py-2 mx-auto">
        ${() => [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0].map((n) => digito(n))}
        ${() => Object.keys(operaciones).map((n) => operacion(n))}
        <button class="h-10 text-xs bg-red-100 hover:bg-red-200 rounded" @click="${limpiar}">Limpiar</button>
        <span></span>
        <button class="p-2 bg-green-100 hover:bg-green-200 rounded" @click="${calcular}">&equals;</button>
      </div>
    </div>
  </div>

</div>
`

plantilla(app)

setup({
  mode: "silent",
  darkMode: "class",
})
```
