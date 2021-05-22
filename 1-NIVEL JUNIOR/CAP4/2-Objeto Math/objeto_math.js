let numero = Math.LOG10E;

document.write(numero);

// ? __Objeto Math__ - Bàsico

/* __Metodos__

! variable = Math."metodo"

* sqrt() - Devuelve la raiz cuadrada positiva de un numero.

let numero = Math.sqrt(4);

document.write(numero);

Como resultado nos da 2, ya que la raiz cuadrada de 4 es 2, dentro de este metodo va el valor a aplicarse la operacion


!#################################


* cbrt() - Devuelve la raiz cubica de un numero.

let numero = Math.cbrt(8);

document.write(numero);

Como resultado 2, ya que la raiz cubica de 8 es 2.


!#################################


* max() - Devuelve el mayor de cero o mas numero.

let numero = Math.max(4, 12, 85, 659, 1420, 7, 0);

document.write(numero);

Devuelve el numero mas grande de los que haya.

!#################################

* min() - Devuelve el mas pequeño a cero o mas numeros.

let numero = Math.min(4, 12, 85, 659, 1420, 7, 2,0,-2);

document.write(numero);

Devuelve el numero mas chico.

* random() - Devuelve un numero pseudo-aleatorio entre 0 y 1.

let numero = Math.random();

document.write(numero);

Es decir nos devuelve numeros entre el 0 y el 1, no llegan a 0 y tambien al 1.

let numero = Math.random(); numero "aleatorio"

let numero = Math.random() * 100;
numero = numero.toString();

let num = numero[0] + numero[1];
if (numero[1] == '.') {
	num = numero[0];
}

document.write(num);

pero si quisiesemos un numero entero redondeado no nos sirve este metodo sino el siguiente.


!###############################


* round() - Devuelve el valor de un numero redondeado al numero entero mas cercano.

Este nos redondea al numero mas cercano.

Con este nos ahorramos todo el codigo anterior, solo con colocar este metodo.

let numero = Math.random() * 100;

numero = Math.round(numero);

document.write(numero);

Con esto nos ahorramos mucho, lo que queremos redondear va entre los parentesis.

Pero esta propiedad nos da un resultado entre dos numeros  incluidos, entre el 0 y el 100, pero si quisiesemos que estos parametros no esten incluidos, bueno esto se hace con el siguiente metodo.


!#############################


* floor() - Devuelve el mayor entero menor que o igual a un numero.

let numero = Math.random() * 100;

numero = Math.floor(4.99999);

document.write(numero);

Acà aunque el numero sea muy cercano al otro numero devolvera menor que este o igual, es decir, el 4.99999 se podria redondear a 5 pero no lo redondea para abajo osea se redondea a 4. Siempre redondea para abajo.

Retomando lo anterior:

let numero = Math.random() * 99;

numero = Math.floor(numero + 1);

document.write(numero);

De esta manera tendriamos no incluidos al 0 y al 100, ya que es entre esos dos numero los resultados dados.

for (i = 0; i < 1000; i++) {
	let numero = Math.random() * 99;

	numero = Math.floor(numero + 1);

	document.write(numero + '<br>');
}

Acà se comprueba que el 0 y el 100 no estan incluidos.

Osea los numeros entre 100 y 0, desde el 1 al 99.


!######################################


* fround() - Devuelve la representacion flotante de precision simple mas cercana de un numero.

Esto es un metodo de precicion, es decir un numero de 4 byte(que son 16 bit).

Es decir, nos redonde un numero pero con 15 digitos mas(flotantes).

let numero = Math.fround(5.9996547489794564);

document.write(numero);


!#######################################


* trunc() - Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios.

Este no redondea, sino que quita la parte fraccionaria o  decimal.

let numero = Math.trunc(99.99999999);

document.write(numero);

Resultado: 99

*/

/* __Propiedades__

Estas propiedades adoptan los numeros de precicion de 16 bits.

* PI - Radio de la circunferencia de un circulo respecto a su diametro, aproximadamente 3.14159.


let numero = Math.PI;

document.write(numero);


let numero = Math.PI * 2;

document.write(numero);


Dos operaciones con PI, asi se aplican estas propiedades.

!###############################


* SQRT1_2 - Raiz cuadrada de 1/2; equivalente, 1 sobre la raiz cuadrada de 2, aproximadamente 0.707.


let numero = Math.SQRT1_2 ;

document.write(numero);


!###############################


* SQRT2 - Raiz cuadrada de 2, aproximadamente 1.414.


let numero = Math.SQRT2;

document.write(numero);


·····································


* E - Constante de Euler, la base de los logaritmos naturales, aproximadamente 2.718.


let numero = Math.E;

document.write(numero);


!###############################


* LN2 - Logaritmo natural de 2, aproximadamente 0.693.


let numero = Math.LN2;

document.write(numero);


!###############################


* LN10 - Logaritmo natural de 10, aproximadamente 2.303.


let numero = Math.LN10;

document.write(numero);


!###############################


* LOG2E - Logaritmo de E con base 2, aproximadamente 1.443.


let numero = Math.LOG2E;

document.write(numero);


!###############################


* LOG10E - Logaritmo de E con base 10, aproximadamente 0.434.


let numero = Math.LOG10E;

document.write(numero);


















*/
