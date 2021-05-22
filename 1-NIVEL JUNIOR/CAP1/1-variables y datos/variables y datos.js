/*¿Que es una variable?
 
 es un espacio o algo que guardamos/almacenamos en la memoria
 en un variable podemos guardar valores pero esos valores pueden cambiar con el tiempo, ya que podemos agregar otros valores.

 helado = 'frutilla';
 alert('helado');

#####################################################

* tipos de declaracion de variables: var, let, const

- var numero = 20; ocupa todo el espacio

- let nombre = "matias"; limita el alcanze de la variable en el bloque donde la ejecutamos, la funcion dada no ocupa todo el espacio sino el espacio donde esta ubicada o el bloque ubicado.

- const nombre = "matias"; es una constante, siempre va a ser el mismo valor, unico valor.

 nombre = 'pablo'; acá se le intenta cambiar el valor pero no funciona, ya que tira error.

 alert(nombre)

#########################################################

 * Inicializar, declarar, modificar:

 let numero; asi se declara una variable

 numero = 20; asi se inicializa dandole valor

 numero = 30; asi se modifica

#######################################################

 * Siempre al terminar una funcion o declarar el valor de una varible utiliar ";" al final.

##################################

 * scope; el alcanze de una variable en un bloque.

##################################

 * Multiples variables

 let numero, numero1, numero2;

 numero = 4;
 numero1 = 5;
 numero2 = 10;

 alert(numero);
 alert(numero1);
 alert(numero2);

 let numero1 = 5, numero2 = 10; en esta manera se hace todo junto separando cada variable por ",".

 let numero1 = 5;
 let numero2 = 10; otra manera para identar o ordenar el codigo.

 */


//#########################################################################################################################


/*tipos de datos(string, number, boolean, symbol).

 string = 'cadena de texto';

 number = 10;

 boolean = true;

#############################################################

 * otros datos(Undefined, Null, Nan) tipos de datos no definidos o error.

 - Undefined

 let numero;

 alert(numero);

 undefined entonces es un tipo de dato que nos dice que la variable existe pero que no tiene valor.

#################################

 * null es un valor vacio, es decir que el valor de una variable no va a tener valor o será vacio.

 let numero1 = null;

################################ 

 * Nan, significa "not a number"(no es un numero)

 let numero = 5;
 let numero1 = 'pedro';

 alert(numero * numero1);

#####################################################

 - con const no funciona declarar una variable sin inicializarla al mismo tiempo, en este no funciona el ";".

 const numero;

 numero = 29;

 alert(numero);

 esto es un error!

#################################

 * hoisting; manera de ejecutar y crear un codigo y como afecta el orden de los valores y la ejecucion del mismo.

#################################
 
 * prompt al declararla nos devuelve un valor que es almacenado en una variable, seria como un input en phyton.

 let nombre = prompt('hola como te llamas');

 alert('hola ' + nombre);
 */
