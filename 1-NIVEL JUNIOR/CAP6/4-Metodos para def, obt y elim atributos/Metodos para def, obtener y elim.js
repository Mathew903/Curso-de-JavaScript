


/* Metodos para Definir, obtener y eliminar atributos

* setAttribute() - Modifica el valor de un atributo.

!Nodos para element

const rango = document.querySelector('.rango');

rango.setAttribute('type', 'text');

Con esto modificamos un input de tipo "range" a tipo "text".

! El primer parametro es lo que queremos modificar, en este caso "type" y  el segundo parametro es el nuevo valor en este caso elegimos el valor.

Aunque no siempre es modificar sino tambien crea, por decir de alguna forma.

!###############################


* getAttribute() - Obtiene el valor de un atributo.

const rango = document.querySelector('.rango');
valor = rango.getAttribute('type');

document.write(valor);

Obtenes el valor que queremos, seleccionando el atributo claro, por ejemplo "type" nos devolvera los valores que tiene type en este caso.

!##############################


* removeAttribute() - Remueve el valor de un atributo.

valor = rango.removeAttribute('type');

document.write(valor);

Aca lo que hacemos es remover el atributo, la funcion en si y el atributo del codigo, no teniendo funcionalidad ya que fue removido.

*/
