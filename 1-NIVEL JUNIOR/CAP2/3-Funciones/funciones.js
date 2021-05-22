const saludar = (nombre) => document.write(nombre);

saludar('mati');

/* function verificacion() {
	let verificar = prompt('Coloca tu edad');

	if (verificar == '18') {
		return 'sos mayor podes pasar';
	} else {
		return 'eres menor';
	}
}

let verifili = verificacion();

document.write(verifili);

*/

/* 1° forma de crear funciones

function saludar() {
 	let pregunta = prompt('¿hola como estas?');
 	if (pregunta == 'bien y vos') {
 		alert('me alegro, yo bien');
 	} else {
 		alert('uh bueno, yo bien');
 	}
 }

 saludar();

*/

/* 2° forma

 saludar = function(){};

 pero esta forma no seria muy utilizada sino es mejor la primera.

*/

/* Funciones

? Una funcion es una porcion de codigo. Agarramos toda una parte del codigo de nuestro programa para volverla a reutilizar nuevamente.  

todo: Por ejemplo, nosotro queremos que una parte de nuestro codigo se ejecute varias veces, pero para eso tendriamo que aplicarlo varias veces y se nos haria muy pesado y muchas lineas de codigo, para eso se puede simplificar con un valor o una palabra que contenga todo ese codigo y asi seria mas facil ejecutarlo, ocupando mucho menos codigo y de una manera mas entendible y prolija.

Que en este caso ese "contenedor" seria la funcion:
function; donde se le agrega la funcion: function variable(y el nombre de una variable).

* function saludar() { 
	let pregunta = prompt('¿hola como estas?');
	if (pregunta == 'bien y vos') {
		alert('me alegro, yo bien');
	} else {
		alert('uh bueno, yo bien');
	}
}

saludar();

De este manera se coloca una funcion, y dentro de las llaves va nuestro codigo.

! para llamar a la funcion se coloca fuera de la funcion, el nombre de la funcion, en este caso: saludar();

* Con solo una palabra nos ahorramos escribir muchisimas lineas de codigo, y es muy sencillo llamar a la funcion

! cada funcion solo puede hacer una cosa, no hacer varias cosas.

*/

/* Ejemplo practico 

function contar() {
	let palabras = ['hola', ' saludo ', ' funcion '];
	let palabras2 = [' despido ', ' trabajo ', palabras];

	forFin: for (palabra in palabras2) {
		if (palabra == 2) {
			break forFin;
			for (palabra of palabras) {
				document.write(palabra + '<br>');
			}
		} else {
			document.write(palabras2[palabra] + '<br>');
		}
	}
}

contar();

*/

/* Return

todo: " Esto sirve para devolvernos un valor "

function verificacion() {
	let verificar = prompt('Coloca tu edad');

	if (verificar == '18') {
		return 'sos mayor podes pasar';
	} else {
		return 'eres menor';
	}
}

let verifili = verificacion();

document.write(verifili);

? Lo que significa esto que, al colocar document.write() la funcion no tiene un valor o un tipo de dato en si, sino que solo avisa, en cambio si colocamos un return que contenga un tipo de dato, este nos devuelve algo y con eso se conecta con la funcion. Entonces al llamar a la varible, la variable es igual a la funcion "verificacion()" y esta es igual al return.

! Una cosa es lo que hace la funcion y otra cosa es lo que retorna o devuelve ¡

Ademas de retornarnos algo, finaliza la funcion

*/

/* Parametros

? Con los parametros lo que hacemos que las varibales las definimos cuando llamamos a una funcion, los valores serian los parametros y hirian dentro de la variable de la funcion, ejemplo:

function sumar(num1, num2) {
	let res = num1 + num2;
	document.write(res + '<br>');
}

sumar(20, 50);

sumar(70, 140);

Entonces aca num1 y num2, le podemos dar cualquier valor sin escribir nuevamente el codigo y ademas podemos ejecutarlo varias veces, con la facilidad de cambiar solo los valores de los parametros.

! Entonces num1 y num2, tienen estan definidos pero sino le damos un valor no funcionariaa, cuando recibe valor esto funciona. ¡

Otro ejemplo mejor es retornar nuestro valor:

function sumar(num1, num2) {
	let respuesta = num1 + num2;
	return respuesta;
}

let suma = sumar(20, 50);

document.write(suma);

otro ejemplo mas:

function saludar(nombre) {
    let saludo = `!Hola ${nombre}¡ ¿todo bien? `;
    document.write(saludo);
}

saludar('Mati');

(backtiks = ALT + 96)

*/

/* Scope

function saludar(nombre) {
	 saludo = `!Hola ${nombre}¡ ¿todo bien? `;
	document.write(saludo);
}

document.write(saludo)

saludar('Mati');

en este caso si no colocamos let, la variable pasaria hacer global y si es glogal dependiento nuestro codigo prodia general muchos problemas.

! Muy importante colocar let para que la variable solo sea valida su alcanze sea valido solo en la funcion o el bloque donde sea colocada

function saludar(nombre) {
	let saludo = `!Hola ${nombre}¡ ¿todo bien? `;
	document.write(saludo);
}

document.write(saludo)

saludar('Mati');

? ahora si se llama a la funcion por fuera daria error ya que solo es valida dentro de la funcion saludar();

*/

/* Funciones flecha

3° forma

! Es otra manera de aplicar las funciones pero:

const saludar = nombre => {
	let saludo = `!Hola ${nombre}¡ ¿todo bien?`;
	document.write(saludo);
};

saludar('mati');

la palabra funcion pasa a tener el valor de la flecha, osea la flecha representaria una funcion; y el parametro pasaria al lado de la flecha o funcion.

function = "=>"

Entonces lo que dice es que saludar tiene como parametro nombre y es una funcion que hace tal cosa.

! Ademas un buen beneficio es que no es necesario utilizar parentesis para el parametro

!Otra cosa mas que si solo se aplica una sola linea de codigo ni siquiera hace falta colocar las llaves, ademas de que se "retorna" automaticamente el valor.

const saludar = nombre => document.write(saludo);

saludar('mati');

*/
