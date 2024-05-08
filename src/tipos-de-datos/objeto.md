# Objeto (Object)

Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de propiedad puede ser una función, que se denomina método del objeto.

```esjs
mut miObjeto = {
    propiedad: 'valor',
    metodo() {
        consola.escribir('Hola mundo');
    }
};
```

## Propiedades

Las propiedades de un objeto se pueden acceder utilizando la notación de punto o la notación de corchetes.

```esjs
mut miObjeto = {
    propiedad: 'valor'
};

consola.escribir(miObjeto.propiedad); // 'valor'

consola.escribir(miObjeto['propiedad']); // 'valor'
```

## Métodos

Los métodos de un objeto se pueden acceder utilizando la notación de punto o la notación de corchetes.

```esjs
mut miObjeto = {
    metodo() {
        consola.escribir('Hola mundo');
    }
};

miObjeto.metodo(); // 'Hola mundo'

miObjeto['metodo'](); // 'Hola mundo'
```
