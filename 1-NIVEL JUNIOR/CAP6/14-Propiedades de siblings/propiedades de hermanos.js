


const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement('P');
const h2_nuevo = document.createElement('H2');

const h2_antiguo = document.querySelector('.h2');

h2_nuevo.innerHTML = 'soy un titulo';

console.log(h2_antiguo.previousElementSibling);





/* Propiedades de Siblings (hermanos)

* nextSibling - El hermano que le sigue.

console.log(h2_antiguo.nextSibling);

En este caso, el hermano seria el texto pero cuenta los espacios vacios, pero basicamente muestra el hermano que sigue (seria el h4).

!########################


* previousSibling - muestra el hermano anterior, el que está antes.

console.log(h2_antiguo.previousSibling);

En este caso nos mostraria "texto" ya que hay espaciados, pero esto es molesto, miremos las siguientes propiedades.

!#######################


* nextElementSibling - Muestra el elemento hermano siguiente

console.log(h2_antiguo.nextElementSibling);

En este caso si nos muestra el h4, sacando los espacios vacios.

!######################

* previousElementSibling - muestra el elemento hermano anterior

console.log(h2_antiguo.previousElementSibling);

En este caso nos muestra el elemento hermano anterior, como cambiamos las posiciones, ahora seria h4.

sin contar espacios.

*/

