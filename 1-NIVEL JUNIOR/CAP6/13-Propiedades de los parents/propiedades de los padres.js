

const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement('P');
const h2_nuevo = document.createElement('H2');

const h2_antiguo = document.querySelector('.h2');

h2_nuevo.innerHTML = 'soy un titulo';


console.log(contenedor.parentNode);




/* Propiedades de los parents (padres)

* parentElement - Selecciona el padre elemento de un elemento

Selecciona el padre elemento de un elemento

estas dos propiedades son casi lo mismo, solo en cosas muy muy importantes son distintas, pero mayormente no.

console.log(contenedor.parentElement);

Aca nos muestra el padre de contenedor, en este caso "body".


!####################


* parentNode - Este selecciona el padre de un elemento, parent node en este caso.

Este selecciona el padre de un elemento, parent node en este caso.

No se usa tanto como el anterior.

console.log(contenedor.parentNode);

Nos muestra lo mismo que la propiedad anterior.

*/
