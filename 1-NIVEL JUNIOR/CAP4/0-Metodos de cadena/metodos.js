let cadena = '1';

let cadena2 = 'o';

let resultado = cadena.valueOf();

document.write(resultado);

/* Metodos de Cadenas

* concat() - Junta dos o mas cadenas y retorna una nueva.

let cadena = new String('hola como estas');

let cadena2 = ' Mati ';

let resultado = cadena.concat(cadena2);

document.write(resultado); 

Ejemplo basico cuando utilizamos concat. New string, lo que hace es hacerno un string nuevo, que seria lo mismo que colocar el caracter por si solo. Ya que los string son objetos entonces se puede hacer como dijimos al principio.

!#########################################

? Buscar cadenas y devolvernos un valor:

* startsWith - Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.

let cadena = new String('hola como estas');

let cadena2 = 'hola';

let resultado = cadena.startsWith(cadena2);

document.write(resultado);

como bien dice, devuelve un resultado booleano si el primer caracter o la primera palabra coincide con otros caracteres.

!#########################################

* endsWith() - Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.

let cadena = new String('hola como estas');

let cadena2 = 'estas';

let resultado = cadena.endsWith(cadena2);

document.write(resultado);

Es lo mismo que la anterior nada mas que es a la ultima palabra o caracter

!##########################################

* includes() - Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.

let cadena = 'hola como estas';

let cadena2 = 'c';

let resultado = cadena.includes(cadena2);

document.write(resultado);

Como bien dice, si un caracter se puede encontrar en otro caracter devulve true, sino false.

!##########################################

* indexOf() - Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.

let cadena = 'hola como estas';

let cadena2 = 'o';

let resultado = cadena.indexOf("estas");

document.write(cadena[5]);

Aca nos devuelve el indice de cada letra en cada palabra, si la letra no está en la cadena, este nos devuelve -1.

ademas de que con los indices podemos llamar a las letras o a los caracteres.

!##########################################

* lastIndexOf() - Devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1.

let cadena = 'hola como estas estas estas estas';

let cadena2 = 'o';

let resultado = cadena.lastIndexOf('estas');

document.write(resultado);

Este devuelve el ultimo indice de una palabra que busquemos, mas que nada repetida varias veces, nos devuelve la ultima. En cambio en el indexOf() nos devuelve la primera


? rellenar cadena, modificarla:

* padStart() [Propuesta de Estandar(ECMA)] - Rellenar cadena al principio con los caracteres deseados.

let cadena = 'abc';
let resultado = cadena.padStart(10, 'd');

document.write(resultado);

Basicamente lo que dice que me rellene 10 caracteres en total, no agregandole 10 sino rellenando hasta el caracter o posicion 10, mejor dicho le va agregar tantos caracteres hasta que llegue a 10 o al caracter deseado y que me coloques la palabra al principio (la que quiera).

!###########################################

* panEnd() [Propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados.

let cadena = 'abc';
let resultado = cadena.padEnd(10, 'd');

document.write(resultado);

Esto seria lo mismo que lo anterior nada mas que me lo rellena al final.

!###########################################

* repeat() - Devuelve la misma cadena pero repetida la cantidad que le indiquemos.

let cadena = '123 ';
let resultado = cadena.repeat(2);

document.write(resultado);

Esto es tal como lo describimos y se agrega de esta manera, dentro de los parentesis va el n° de veces que quiero repetir el string. Acá si se va a repetir el n° de veces dados.


? transformar la cadena:

* split() - divide la cadena como le pidamos.

let cadena = 'hola como estas';
let resultado = cadena.split('como');

document.write(resultado[1]);

Hace lo mensionado, pero esos caracteres pasan al tener el valor de un array, cuando llamamos a cada valor nos devuelve un indice.

!#######################################3

* substring() - Nos retorna un pedazo de la cena que seleccionamos.

let cadena = 'abcdefg';
let resultado = cadena.substring(0, 3);

document.write(resultado);

Con esto podemos recortar un string, es decir, nos devuelve el string desde donde empieze hasta donde termine, entonces podemos recortar.

! El primer valor está incluido, el segundo valor no está incluido.

!###########################################

* toLowerCase() - Convierte una cadena a minúscula.

let cadena = 'ABCDEFG';
let resultado = cadena.toLowerCase();

document.write(resultado);

!##########################################

* ToUpperCase() - Convierte una cadena a mayúscula.

let cadena = 'abcdefg';
let resultado = cadena.toUpperCase();

document.write(resultado);

!#########################################

* toString() - Método devuelve una cadena que representa al objeto especifico. Convierte un caracter a string, mas que nada a los numeros.

let cadena = 1234;
let resultado = cadena.toString();

document.write(2 + resultado);

Este metodo es sencible a la multiplicacion y a la division, pero a la suma y resta no, es decir, si multiplicamos nos va a multiplicar el string, pero si sumamos no nos va a sumar sino va a juntar el numero con el string.

!########################################


* length - Esto es una propiedad de los caracteres o arrays, lo que hace es mostrarnos el total de caracteres que tiene un string o un array.

let cadena = '   hola     ';
let resultado = cadena;

document.write(resultado.length);

Acá nos muestra 12 en total, ya que cuenta los espacios

!########################################

* trim() - Elimina los espacios en blanco al principio y al final de una cadena.

let cadena = '   hola     ';
let resultado = cadena.trim();

document.write(resultado.length);

Acá con "length" podemos corroborar que trim elimina los espacios de los caracteres.

!#######################################

* trimEnd() - Elimina los espacios en blanco al final de una cadena.

let cadena = '    hola     ';
let resultado = cadena.trimEnd();

document.write(resultado.length);

Acá elimina los espacios al final

!#####################################

* trimStart() - Elimina los espacios en blanco al principio de una cadena.

let cadena = '    hola     ';
let resultado = cadena.trimStart();

document.write(resultado.length);

Acá los elimina los espacios al principio

* valueOf() - retorna el valor primitivo de un objeto string.

let cadena = '1';
let resultado = cadena.valueOf();

document.write(resultado);

Nos devuelve el valor del objeto o variblea, aunque esto ya viene en javascript







*/
