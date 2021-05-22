// arrays(arreglos): son un contenedor de distintos tipos de elementos que pueden ser de diferentes tipos de datos. Por ejemplo tengo un contenedor o una caja de verduras con muchas manzanas pero a su vez no solo tengo manzanas sino que tengo mas frutas, como naranja, frutilla, pera, etc. eso seria un ejemplo claro. En conclusion, es conjunto de datos a lo que los podemos llamar, los datos estan asociados a un indice, posicion. El primer elemento esta en el indice o posicion 0, siempre en programacion la primera posicion es 0.

// aplicarlo en codigo

/* let marcas = [
 	' samsung ',
    ' motorola ',
 	' apple ',
 	' LG ',
 	' xiaomi ',
 	' huawei ',
 	' alcatel ',
 	' blackberry ',
 	' Nokia ',
 	1,
 	2,
 	'matias',
 ];*/

//Llamar un elemento: document.write(marcas[9]);

//document.write(marcas[1]);

/* Arrays Asociativos 
Un array asociativo es una coleccion ordenada de items o elementos. Cada elemento posee un valor.

Como declaramos un array asociativo. Se utilizan llaves {} para generar el array de elementos "clave: valor".

*/

let persona = {
	nombre: 'matias',
	edad: 16,
	altura: '1.65m',
	estudio: 'secundaria',
	carrera: 'electronica',
	curso: '5° 3°',
};

let nombre = persona['nombre'];
let edad = persona['edad'];
let altura = persona['altura'];
let estudio = persona['estudio'];
let carrera = persona['carrera'];
let curso = persona['curso'];

let frase = `El nombre es: <b>${nombre}</b> <br>
            Su edad es: <b>${edad}</b> <br>
            tiene una altura de: <b>${altura}</b>
`;

document.write(frase);

// document.write(persona['nombre']);

// Ademas de que los arrays contengan variables o items con valores, estos valores o items puede ser utilizados en otras variables, como se esta viendo y ser utilizados.

// <br> es para dar un espacio hacia abajo a otro elemento. Acordarse que una buena manera de concatenar es usar los bicks y la variable entre ${variable} el signo de dinero y las llaves.
