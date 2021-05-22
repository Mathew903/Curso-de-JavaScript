let arreglo = ['pedro', 'juan', 'pepe', 'matias', 'roberto', 'martin'];

let resultado = arreglo.filter((numero) => numero.length > 4);

document.write(resultado + '<br>');

/* Metodos de Arrays

? __Transformadores__:

* pop() - elimina el ultimo elemento de un array y lo devuelve.

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias '];

document.write('Array original: <b>' + arreglo + '</b> <br>');

let resultado = arreglo.pop();

document.write(
	'Elemento removido: <b style = "color:red">' + resultado + '</b> <br>'
);

document.write('Resultado: <b>' + arreglo + '</b> <br>');

Como dijimos quita el ultima elemento de un array y ademas lo muestra y acà podemos comprobar como fue quedando el array.


!############################################


* shift() - elimina el primer elemento de un array y lo devuelve.

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias '];

document.write('Array original: <b>' + arreglo + '</b> <br>');

let resultado = arreglo.shift();

document.write(
	'Elemento removido: <b style = "color:red">' + resultado + '</b> <br>'
);

document.write('Resultado: <b>' + arreglo + '</b> <br>');

Nos quita el primero


!###########################################


* push() - agrega un elemento array al final de la lista.

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias '];

let resultado = arreglo.push('maria',"roberto");

document.write(resultado)

document.write(arreglo);

Nos agregò maria y roberto al final, podemos agregar muchas cosas, y tambien si queremos nos devuelve la cantidas de elementos que hay.

? Este es el opuesto de pop()

!#########################################


* reverse() - invierte el orden de los elementos de un array.

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias '];

let resultado = arreglo.reverse(); forma 1

arreglo.reverse() forma 2

document.write(resultado);

Nos invirtiò la posicion de los elementos. 

! No es necesario tener otra variable para cambiar o transformar, el array o elemento, en estos casos.


!########################################


* unshift() - agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias '];

arreglo.unshift('roberto');

document.write(arreglo);

Me agrega al principio "roberto"

? Este es el opuesto de shift().


!#######################################


* sort() - ordena los lementos de un array localmente y devuelve el arreglo ordenado.

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias '];

arreglo.sort();

document.write(arreglo);

Me los ordenò, basado en el "ORDEN DICCIONARIO O LEXICO O TAMBIEN PARA LOS NUMEROS"

!#######################################


* splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias ', 'roberto', 'martin'];

arreglo.splice(desde donde comienzo, cantidad de elementos a eliminar a continuacion,"que voy a agregar en el medio de lo que elimine");

arreglo.splice(0, 2, 'agustina');

document.write(arreglo);

Basicamente elijo desde donde comenzar y que elementos eliminar y/o agregar.

Lo que dice que va a comenzar desde la posicion 0 y va a elimir 2 elementos, osea, del 0 y otro mas, y ademas entre esos elementos removidos le agrego "agustina" o lo que sea.

arreglo.splice(0, 0, 'agustina', 'gustabo', 'carla');

Esto es si no quiero eliminar nada y solamente agregar elementos del principio o en la posicion que sea.

arreglo.splice(-1, 0, 'agustina', 'gustabo', 'carla');

Esto es agregarlo al final


? __Accesores__:

* join() - une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias ', 'roberto', 'martin'];

document.write(arreglo + '<br>');

let resultado = arreglo.join(' - ');

document.write(resultado);


Esto convierte un array en una cadena de texto o string.

Ademas nos da una nueva cadena de texto y podemos agregar elementos para esa cadena, como estos guiones.

! Esto si depende de una variable.

let resultado = arreglo.join('<br> elemento: ');

document.write('elemento: ' + resultado);

Tambien podemos hacer esto.


!##################################################


* slice()- devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias ', 'roberto', 'martin'];

document.write(arreglo + '<br>');

let resultado = arreglo.slice(0, 5);

document.write(resultado);

Lo que hace esto es desde una posicion hasta otra mostrarnos solo algunos elementos del array, si queremos mostrar todos los elementos excepto el ultimos colocamos, desde la posicion "0" hasta la "-1" (0,-1). Pero si queremos mostrar todos solo colocamos el "0" y la segunda posicion vacia (0) aunque no tendria sentido, para eso ni usar este  metodo XD.


!####################################


* metodos ya vistos en cadenas: toString(), indexOf(), lastIndexOf(), includes()

let resultado = arreglo.includes(' marcos '); nos devuelve true o false.

let resultado = arreglo.indexOf(' marcos '); Posicion o indice.

let resultado = arreglo.lastIndexOf(' o '); Selecciona la palabra entera pero nos muestra la ultima posicion de una palabra repetida, muestra la ultima.


? __De Repeticion__:

* filter() - Crea un nuevo array con todos los elementos que cumplan con la condicion.

Es como un bucle

let arreglo = ['pedro ', ' juan ', ' marcos ', ' matias ', 'roberto', 'martin'];

arreglo.filter((numero) => document.write(numero + '<br>'));

Acá lo que dice que la variable numero va a ser igual a cada elemento del array, cuando vaya pasando el bucle, es decir "numero", en la primera vuelta va a ser igual a "pedro", luego a "juan" y asi.

Lo que esta dentro de filter es una funcion pero escrita de una forma mas sencilla

length = para saber cuantas letras tiene un string y cuantos elementos tiene un array.

let resultado = arreglo.filter((numero) => numero.length > 4);

Esto nos devuelve las palabras o arreglos que tengan 4 letras y asi.

Con filter se puede crear otro array con tales condiciones.


!###########################################


*forEach() - Ejecuta la funcion indicada una vez por cada elemento del array

let resultado = arreglo.forEach((numero) => numero.length > 4);

Pero encambio acá esto no funciona.

Este hace lo mismo que el filter, nada mas que con filter se puede crear otro array con tales condiciones.
*/
