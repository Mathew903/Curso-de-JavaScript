/* La consola

Es uno de los tantos objetos y APIS que podemos llegar a encontrar como en el navegador como en el interprete para que podamos hacer muchas cosas tanto a la hora de intentar conocer posibles errores, ver los errores del sistema, etc.  
*/

/* __Funciones de registro__

* assert() - Aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no aparece nada. (NO ESTANDAR)

console.assert(5 < 2);

!########################


* clear() - Limpia la consola

console.clear();

!########################


* error() - Emite un mensaje de error en la consola web

console.error("que hiciste")

!########################


* info() - Emite un mensaje informativo a la consola web. En firefox y chrome, se muestra un pequeño icono "i" junto a estos elementos en el registro de la consola web.

console.info("hola")

mensaje informativo

!#######################


* log() - Muestra un mensaje en la consola web (o del interprete javaScript).

console.log("hola")

Mensaje de depuracion

!#####################


* table() - Esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parametro adicional: columns y nos muestra una tabla en consola.

console.table([3,2,4,2,1,32,5])

Esto nos devuelve una table con los indices y valores respectivos de cada objeto.

!######################


* warn() - Imprime un mensaje de advertencia en la consola web.

console.warn("se necesita registrarse")

!#####################


* dir() - Despliega una lista interactiva de las propiedades del objeto JS especificado [NO ESTANDAR].

console.dir([2,4,5,2,1])

Es como el info() pero se muestra de otra manera en la consola.
*/

/* __Funciones de conteo__

* count() - Registra el numero de veces que se llama a count(). Esta funcion tomo como argumento opcional una etiqueta.

console.count()

Cuenta el numero de veces que ejecutamos count()

!#####################


* countReset() - Resetea el contador console.count().

console.countReset()

Resetea el numero de veces aplicados con count()

function sumar(num1, num2) {
	document.write(num1, num2);
	console.count();
}

sumar(2, 4);
sumar(2, 4);
sumar(2, 4);
sumar(2, 4);
sumar(2, 4);
sumar(2, 4);
sumar(2, 4);
sumar(2, 4);

console.countReset();

sumar(2, 4);
sumar(2, 4);
sumar(2, 4);

Una manera de utilizar es contar cuantas veces se ejecuta una funcion, entre otras.
*/

/* __Funciones de agrupacion__

* group() - Crea un nuevo grupo en linea en el registro de la consola web.

console.group("nombre del grupo")

Con esto se crea un grupo que contiene funciones o metodos dentro de el.

!#######################


* groupEnd() - Remueve un grupo en linea en el registro de la consola web.

console.groupEnd()

Esto nos elimina el grupo, si colocamos un metodo este no se guardara en el grupo que eliminamos aunque siga estando, sino que se coloca en el otro grupo, posiblemente al que contenia a ese grupo dicho.

!#######################


* groupCollapsed() - Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo.

console.groupCollapsed("")

Es lo mismo que group() solamente que la informacion no esta abierta, es decir, no se muestra a simple vista sino que hay que abrir la info o el grupo.

*/

/* __Funciones de temporizacion__

* time() - Inicia un temporizador.

console.time()

Empieza a contar

!#######################


* timeLog() - Registra el valor actual de un temporizador.

console.timeLog()

Cuando detiene nos muestra todo lo que va contando

!#######################


* timeEnd() - Detiene un temporizador y nos muestra cuanto timepo transcurrió y contó.

console.timeEnd()

Cuando termina el contador registra lo que contó

Basicamente con esto podemos ver cuanto tiempo tarda un usuario en hacer tal funcion o tal cosa.

console.time();

function sumar(num1, num2) {
	document.write((num1 += num2));
	console.timeLog();
}

sumar(2, 4);
sumar(2, 4);
sumar(2, 4);
sumar(2, 4);
sumar(2, 4);
sumar(2, 4);

console.timeEnd();

*/

/* __Modificar el estilo de texto__

console.log(
	'%chola',
	'color:red; background:black; padding: 30px; border: 3px solid blue'
);

Esto es un truco si queremos cambiar el formato tipico de escritura

Aunque se limitan a muchas cosas, como el width.

*/
