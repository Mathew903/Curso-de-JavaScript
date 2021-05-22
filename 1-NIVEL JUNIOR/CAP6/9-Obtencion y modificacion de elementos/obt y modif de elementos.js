



/* Obtencion y Modificacion de elementos

!Nodo element

* textContent - Devuelve el texto de cualquier nodo.

let resultado = titulo.textContent;

document.write(resultado)

Fijandonos nos devuelve el texto del h1 en este caso.

pero que pasaria si colocamos "modificar" en negrita, esto no nos devuelve el valor de negrita, sino que lo mostraria normalmente.

pero la diferencia que hay con innerText es que este metodo nos devuelve el texto sacando los estilos dados por la persona, nos devuelve el texto en sí, sin estilos aplicados, osea que nos devuelve todo el otro solo devuelve lo visible.

por ejemplo si una palabra la ocultamos con un estilo en el html, textContent la muestra igual ya que nos muestra el contenido sin los estilos, en cambio innerText no.

! Aunque no muestra el html

!######################


* innerText - Devuelve el texto visible de un node element.

let resultado = titulo.innerHTML;

document.write(resultado)

Ahora si en este caso nos devuelve todo el texto en este caso del "parrafo" osea la letra en negrita en este caso, pero solo devuelve el texto visible.

no muestra html

! Aunque innerText no es estandar y no se usa mas.

!######################


* outerText - Devuelve el texto de las etiquetas html incluidas las etiquetas.

! No se usa mas.

!#######################

* innerHtml - Devuelve el contenido html de un elemento.

Esto nos hace mostrar el contenido html

let resultado = titulo.innerHTML;

alert(resultado)

* outerHtml - Devuelve el codigo html completo del elemento.

Pero este a diferencia del otro, nos muestra ademas del html, nos muestra las etiquetas que contienen el contenido.

let resultado = titulo.outerHTML;

alert(resultado)
*/
