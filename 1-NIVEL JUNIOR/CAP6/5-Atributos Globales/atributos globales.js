




/* Atributos globales

* class - Lista de clases del elemento separadas por espacios.

!###############################


* contentEditable - Indica si el elemento puede ser modificable por el usuario (bool).

const title = document.querySelector('.title');

title.setAttribute('contentEditable', 'true');

Con setAttribute y este atributo puedo modificar el texto escribiendo en el.

title.setAttribute('contentEditable', 'false');

Con false no se puede editar, con true si.

!#############################


* dir - Indica la direccionabilidad del texto.

const title = document.querySelector('.title');

title.setAttribute('dir', 'ltr y rtl');

Este tiene dos valores, ltr y rtl(left to right y right to left), la manera en que leemos nuestro texto.

!############################


* hidden - Indica si el elemento aun no es, o ya no es, relevente.

const title = document.querySelector('.titulo');

title.setAttribute('hidden', 'true o false');

Lo que hace es no mostrar el texto si no esta definido, si esta definido aparece y sino desaparece, aunque este en true o false desaparece

title.removeAttribute('hidden');

removimos el atributo si este estuviese definido en el html resultado se vuelve a mostrar el texto

!#####################

* id - Define un identificador unico.

!#####################


* tabindex - Indica si el elemento puede obtener un focus de input.

const titulo = document.querySelector('.titulo');

titulo.setAttribute('tabindex', '5');

Se selecciona el texto con el tab y se muestra si se puede o no agarra el texto.

* title - Contiene un texto de informacion relacionada al elemento al que pertenece.

const titulo = document.querySelector('.titulo');

titulo.setAttribute('title', 'titulo normal');

Muestra un titulo al pasar el mouse sobre el objeto.

*/
