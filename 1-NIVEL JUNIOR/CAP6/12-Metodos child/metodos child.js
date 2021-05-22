const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement('P');
const h2_nuevo = document.createElement('H2');

const h2_antiguo = document.querySelector('.h2');

h2_nuevo.innerHTML = 'soy un titulo';

let respuesta = contenedor.hasChildNodes();

if (respuesta) {
	document.write('el elemento tiene hijos');
} else {
	document.write('el elemento no tiene hijos');
}

/* Metodos child

* appenchild() - Ya visto

* replacechild() - reemplaza un elemento hijo

const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement('P');
const h2_nuevo = document.createElement('H2');

const h2_antiguo = document.querySelector('.h2');

h2_nuevo.innerHTML = "soy un titulo"

contenedor.replaceChild(h2_nuevo, h2_antiguo);

Bien lo que hacemos es reemplazar un nodo hijo por otro nodo hijo, y se asi de esta manera.

! El primer valor es el valor al que se cambia (al que se elige para nuevo valor, "h2_nuevo") y el segundo  valor es el valor antiguo (al cual se reemplaza, "h2_antiguo").

!########################


* removeChild() - remueve un elemento hijo.

contenedor.removeChild(h2_antiguo);

De esta manera lo que hacemos es remover o eliminar el hijo. el valor es al que se va a remover (h2_antiguo).



* hasChildNodes() - verifica si tiene un elemento hijo o no.

Esto es para verificar si tiene un elemento hijo o no.

let respuesta = contenedor.hasChildNodes()

if (respuesta) {
    document.write("el elemento tiene hijos")
} 
else {
    document.write("el elemento no tiene hijos")
}

De esta manera lo que dice es si tiene o no hijos, si es "true" si tiene, pero si es "false" no tiene.

let respuesta = h2_antiguo.hasChildNodes();

Acá podemos comprobar si un ya un hijo en si, tiene elementos o no, en este caso seria el texto.

*/
