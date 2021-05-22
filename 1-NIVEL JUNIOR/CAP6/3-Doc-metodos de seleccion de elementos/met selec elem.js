

/* Document - Metodos de Selecciòn de elementos

! Nodos para document

* getElementById() - Selecciona un elemento por ID.

document.getElementById() document es el objeto y el otro es un metodo.

let parrafo = document.getElementById('parrafo');

!Aca solamente selecciona al elemento ID

document.write(parrafo);

? Esto nos indica que elemento es seleccionado

!###############################


* getElementsByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.

Este nos devuelve una coleccion, una lista de elementos.

let parrafo = document.getElementsByTagName('p');

document.write(parrafo[0]);

El elemento seleccionado seria la primera etiqueta "p", si se colocase 1 se selecciona otro "p" y asi. Mas que nada selecciona a los objetos como tal.

!################################


* querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.

let parrafo = document.querySelector('.parrafo');

document.write(parrafo);

De esta manera nos llamamos a los selectores, es decir a las clases, y al llamarlas es:  ".nombre de la clase" asi. Importante el "." Ademas que solo devuelve el primero y solo uno.

* querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

let parrafo = document.querySelectorAll('.parrafo');

document.write(parrafo);

Selecciona todos los elementos relacionados.

Ademas nos devuelve un NodeList, osea, una lista de nodos y esos nodos son los seleccionados. 

document.write(parrafo[0]); seleccionar
*/
