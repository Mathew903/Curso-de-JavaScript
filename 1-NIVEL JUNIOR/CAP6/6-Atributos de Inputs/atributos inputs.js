





/* Atributos de Inputs

!Nodos element

* className

const input = document.querySelector('.input');

document.write(input.className)

Me muestra el nombre de la clase

!###########################


* value

const input = document.querySelector('.input');

document.write(input.value);

Muestra el valor escrito en el input

!#########################


* type

const input = document.querySelector('.input');

document.write(input.type);

El tipo de input

document.write((input.type = 'color'));

Ademas de que se puede asignar un nuevo valor al "type"

input.type = "range"

Mas facil es de esta manera

!#######################


* accept

const input = document.querySelector('.input');

input.accept = "image/png"

Esto solo funciona para el tipo de input "file", que lo que permite es seleccionar un archivo, entonces con accept nosotros decimos que tipo de archivo va a seleccionar.
Como colocamos acá solo va a seleccionar archivos ".png"


!######################


* form

comunicacion de un input con un form.

!########################


* minlength

Minima cantidad de caracteres que tiene que tener un input.

const input = document.getElementById("input");

input.minLength = 30;

? Esto es si se quiere modificar el valor.

input.setAttribute("minLength",5)

!########################


* placeholder

input.setAttribute("placeholder","que tal")

placeholder lo que hace es darnos un titulo dentro del input, o como un texto de descripcion de lo que colocaremos, de esta manera puedo modificar el texto.

input.placeholder = "hola"

De esta manera lo aplicamos.

!########################


* required

input.required = "true"

Esto significa que es requerido completar este campo o formulario.

*/
