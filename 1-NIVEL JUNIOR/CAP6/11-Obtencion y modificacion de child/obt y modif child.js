




/* Obtencion y modificacion de child (hijos)

!Nodo element

* firstChild - obtiene el primer hijo.

const primerHijo = contenedor.firstChild;

console.log(primerHijo)

En este caso el resultado en consola seria el h2.

Se aplica sin dejar espacios

!################


* lastChild - obtiene el ultimo hijo.

const primerHijo = contenedor.lastChild;

console.log(primerHijo)

Nos daria en consola un "p".

Se aplica sin dejar espacios

!################


* firstElementChild - Nos permite obtener el primer elemento "hijo".

De esta forma se podra hacer dejando espacios y no habrá la necesidad de no dejar espacios.

const primerHijo = contenedor.firstElementChild;

console.log(primerHijo)

Nos obtiene el h2 y ahora es mas comodo ya que se puede dejar espacios en el html

!################


* lastElementChild - Nos permite obtener el ultimo elemento "hijo".

const primerHijo = contenedor.lastElementChild;

console.log(primerHijo)

Nos muestra el ultimo elemento.

!###############


* childNodes - Nos devuelve todos los nodos hijos.

const hijos = contenedor.childNodes;

console.log(primerHijo)

Nos devuelve todo los nodos (incluyendo los espacios vacios) en forma de lista.

Ademas de que el texto es un nodo

No se pueden agregar valores ya que no es un array pero si se puede recorrer, con forEach, como un objeto.

hijos.forEach(hijo => console.log(hijo))

solo se pueden recorrer los nodelist.

!###############


* children - Nos devuelve solamente los elementos hijos.

ahora nos saca los textos vacios.

const hijos = contenedor.children;

y ahora solo recorre los elementos hijos "fisicos", sin contar los espacios vacios que no lo son.

const hijos = contenedor.children;

hijos.forEach(hijo => console.log(hijo));

Pero los elementos htmlcolection no se pueden recorrer entonces esta funcion no sirve.

Pero de esta manera si se puede recorrer:

for (hijo of hijos) {
    console.log(hijo)
}
*/
