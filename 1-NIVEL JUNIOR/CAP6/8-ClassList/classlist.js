


/* clases, classList y metodos de classList

!Nodo element

classList es una particularidad de las clases de los objetos.

* add() - Añade una clase.

titulo.classList.add('grande'); Se agrega de esta forma, con un "punto" para los metodos.

De esta manera si nos fijamos en la consola en los valores, nos muestra que se nos agrego la clase "grande".

Si vamos a css y queremos usar la clase grande y aplicamos valores esto funcionará.

!#########################


* remove() - Remueve una clase.

titulo.classList.remove('grande');

Si nos fijamos removimos una clase, la eliminamos, si nos fijamos en consola esta ya no aparece y los estilos dados tambien.

!#########################


* item() - Devuelve la clase del indice especificado.

titulo.classList.item(1);

Esto nos devuelve la clase segun la posicion dada en un mismo objeto.
Dependiendo la posicion que querramos nos devuelve una clase

let valor = titulo.classList.item(1);
document.write(valor); Esto nos muestra el valor de la clase elegida.

Esto no altera o cambia a las clases, nos devuelve algo que le pedimos.

!#######################


* contains() - Verifica si ese elemento posee o no, la clase especificada.

let valor = titulo.classList.contains("grande");

Esto nos verifica si la clase existe, si existe el resultado es "true", si no existe es "false". Mas que nada verificamos si existe o no.

if (valor) { 
	document.write('la clase existe');
} else {
	document.write('la clase no existe');
}

Podemos aplicar esto por ejemplo, para darnos un dato mas entendible.

! si el valor no lleva nada en el if, osea que no lleva "== tal valor", quiere decir que el valor es "true".

ejemplo de utilizar los metodos anteriores:

nombreDeClase = "grandee"
let valor = titulo.classList.contains(nombreDeClase);

if (valor) {
	titulo.classList.remove(nombreDeClase)
} else {
	titulo.classList.add(nombreDeClase)
}

basicamente significa que si existe tal clase, elimina esa clase pero si no existe la agrega.

!########################


* toggle() - Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

Viendo el ejemplo anterior, estar validando valores y luego ver si lo eliminamos o no, se puede hacer mas facil.

Lo que hace este metodo es, si existe tal clase la elimina pero si no existe la agrega.

titulo.classList.toggle("grande")

Con esto simplificamos todo el ejemplo anterior.

Pero si no queremos que elimine la clase, está un segundo valor que es true o false, en este caso true fuerza al metodo a dejar el valor aunque exista.

titulo.classList.toggle("grande",true)

Pero que pasa si no existe el valor, lo agrega igual y nos daria true, pero si existe el valor(sacano el true), lo elimina y nos da false.

!####################


* replace() - Reemplaza una clase por otra.

titulo.classList.replace("grande","hola")

Como bien dice reemplaza una clase por la otra, el primer valor es la clase a la que queremos modificar y el segundo valor es la clase nueva que queremos agregar.

Si no existe la clase a la que vamos a reemplazar nos devuelve false.
*/