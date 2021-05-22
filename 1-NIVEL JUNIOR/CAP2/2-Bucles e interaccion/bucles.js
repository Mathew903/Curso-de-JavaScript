let array1 = [' coca ', ' pepsi ', ' manaos '];

let array2 = [' tang ', ' arcor ', array1, ' jugito '];

forFin: for (let array in array2) {
	if (array == 2) {
		for (let array of array1) {
			break forFin;
			document.write(array + '<br>');
		}
	} else {
		document.write(array2[array] + '<br>');
	}
}

/* for (let i = 6; i >= 0; i--) {
	document.write(i + '<br>');
}
*/

/* let i = 6;

for (i; i < 10; i++) {
	document.write(i + '<br>');
}

document.write(i);
*/

/* While
 * *  Bucles: es una condicion donde siempre repite la misma funcion hasta que la condicion ya no se pueda complir mas; si se coloca un igual se le agrega otro dato mas, dependiendo si se suma. Ademas se le puede agregar un <br> para dar un espacio dentro del document.write(variables + "<br>"); Asi.
  
  let numero = 0;

 while (numero <= 5) {
 	numero++;

 	document.write(numero + '<br>');
 }
 */

/* Do while
 * ! do while: En este se escribe la condicion primero, o lo que quiero que haga, y luego se ejecuta la condicion, o se "pregunta". primero ejecuta el codigo y luego la condicion;
  
let numero = 0; 

 do {
 	numero++;

 	document.write(numero + '<br>');
 }

 while (numero <= 8);

*/

/* break

* termina la sentencia, es decir:
 
 let numero = 0;

while (numero < 1000) {
	numero++;
	document.write(numero);
	if (numero == 10) {
		break;
	}
}

de esta manera podemos finalizar cualquier cosa en el momento deseado y pedido.
*/

/* For (bucle determinado o finito):

todo: Se ejecuta las veces que le indiquemos

* primero
declaramos e inicializacion(variable)

for (let i = 0)

* segundo
condicion

for (let i = 0; i < 6)

* tercero
iteracion(aumento o decremento)

for (let i = 0; i < 6; i++)

* ############################################

- primero se coloca el for y luego se le agrega una variables i de iteracion que la igualamos a 0:

for (let i = 0)

! las variables no pueden ser cambiadas su valor dentro de un mismo bloque pero cuando está en distinto bloque si se puede 

- segundo es la condicion:

for (let i = 0; i < 6)

entonces esto se va a ejecutar mientras que "i" sea menor a 6

- tercero: aumento o decremento, por ejemplo:

for (let i = 0; i < 6; i++) aca entonces, esto se ejecuta mientras que i sea menor que 6, se suma un valor hasta que se ya no se pueda cumplir la funcion

* En conclusion, esto es asi, esto se ejecutara mientras "i" sea menor a 6 y ha eso se le sumara un numero hasta que no se pueda cumplir la funcion.

for (let i = 0; i < 6; i++) {
	document.write(i + '<br>');
}

* ###############################################

* Otro ejemplo seria que: 

for (let i = 6; i >= 0; i--) {
	document.write(i + '<br>');
}

acá es,  mientras "i" sea mayor o igual a 6, se resta un numero y asi hasta llegar a 0, cuando llega a -1 ya no se puede ejecutar ya que este es menor a "0".

* ##############################

! otra forma de ejecutar el for es:

let i;

for(i = 6; i >= 0; i++);

! otra forma mejor:

let i = 6;

for(i; i >= 6; i++)

* ###############################

Si se decea utilizar un break en donde queramos parar seria asi:

for (let i = 0; i < 20; i++) {
	document.write(i + '<br>');
	if (i == 12) {
		break;
	}
}

si se quiere parar justo en el numero sin mencionarlo como en este caso, que pare en el 12 pero no mencionarlo, deberiamos mostrar primero el condicional:

for (let i = 0; i < 20; i++) {
	if (i == 12) {
		break;
	}
    document.write(i + '<br>');
}

*/

/* Continue

! esto es cuando nos queremos saltear un valor o saltearnos una iteracion:

for (let i = 0; i < 20; i++) {
	if (i == 15) {
		continue;
	}
	document.write(i + '<br>');
}

En este caso el contador se saltea el 15 y continuando contando pero sin mostrar el 15.
*/

/* For in (devuelve indice), for of (devuelve valor):

! for in y for of nos ahorra la manera de escribir todo lo basico de un for, es decir:

let animales = ["gato ", " perro ", " leon ", " loro ", " mono "]

for(animal in animales); 

* animal(la variable que creamos) en cada vuelta del bucle va a ser igual ha cada valor de la variable "animales" osea de la otra variable. Osea la primera vuelta va a ser igual a "gato", en la segunda vuelta será igual a "perro" y asi.

la diferencia entre for in y for of, es que uno nos devuelve el indice osea la posicion de cada elemento(in) y el otro el valor de la posicion en si (of).

! si se quiere mostrar en "in", se debe aclara primero la variable con los valores,es decir, de esta manera:

for (animal in animales) {
	document.write(animales[animal] + '<br>');
}

en este caso, se coloca animal ya que animal toma el valor de los elementos dentro de "animales", seria lo mismo que colocar:

animales[0], pero se coloca: animales[animal] ya que llama a todos los elementos.

*/

/* label

Es una sentencia que nos permite asociar un bucle a un nombre para poder terminarlo cuando queramos.

! si queremos terminar un bucle cuando llegamos hasta un punto pero que no ejecute lo que sigue, sin saltearse eso, utilizamos label: seria como una varibale que contiene una funcion, es decir: 

let array1 = [' coca ', ' pepsi ', ' manaos '];

let array2 = [' tang ', ' arcor ', array1, ' jugito '];

forFin: for (let array in array2) {
	if (array == 2) {
		for (let array of array1) {
			break / continue forFin;
			document.write(array + '<br>');
		}
	} else {
		document.write(array2[array] + '<br>');
	}
}

!el denominado "forFin:" es un label donde contiene al for principal, pero cuando el if llega al valor 2 se quiere terminar el ciclo, entonces con la funcion break y llamando al label, osea, break forFin se finaliza todo, y todo.
 

todo: Como también se puede utilizar un continue para saltearse todo el ciclo

*/
