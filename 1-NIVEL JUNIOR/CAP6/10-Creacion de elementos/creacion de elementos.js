



/* Creacion de Elemento

!Nodo document

* createElements()

const item = document.createElement("LI")

document.write(item) 

Acá creamos un elemento li (un elementoo de lista "li").

? Esto se aplica al document.

! importante: dentro de lo que se escriba en este metodo va todo en MAYUSCULA.

!#######################

* createTextNode()

const textoItem = document.createTextNode('Este es un item de la lista');

Lo que hacemos aca es darle un texto al elemento. 

? Esto se aplica al document.

!######################


* appendChild()

Metodo de los hijos.

Lo que hace es aplicar un metodo a los hijos, en este caso meter un nodo dentro de otro nodo.

item.appendChild(textoItem);

lo que hicimos fue aplicar un texto del nodo dentro de otro nodo.

contenedor.appendChild(item);

Lo que hicimos aca fue colocar la lista dentro del contenedor (div). super

todo: Se puede ahorrar codigo aplicando esto:

const contenedor = document.querySelector('.contenedor');

const item = document.createElement('LI');

item.textContent = "este es un item"

contenedor.appendChild(item);

console.log(contenedor);

! pero esto de aca no seria un objeto como antes.

!#####################


* createDocumentFragment()
 
esto nos ahorra el uso excesivo de recursos.

si queremos aplicar algo nuevo esto nos ayuda.

const contenedor = document.querySelector('.contenedor');

const fragmento = document.createDocumentFragment()


for (i = 0; i < 10; i++){
    const item = document.createElement('LI');
    item.textContent = "este es un item"
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento)

De esta manera ahorramos muchos recursos.

*/
