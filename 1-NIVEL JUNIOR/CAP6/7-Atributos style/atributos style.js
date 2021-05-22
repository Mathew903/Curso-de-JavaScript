


/* Atributos style

!Nodo element

* style - Contiene declaraciones de estilo CSS para ser aplicadas al elemento.

Mas que nada nos permite modificar algo de css del atributo.

titulo.style; Este atributo es aplicado al elemento y no al documento ya que este es un nodo de tipo element y no de document.

const titulo = document.querySelector(".titulo")

titulo.style.color = "blue"

De esta manera podemos cambiar el color. Entonce lo primero es seleccionar al elemento a cambiar y el atributo y luego colocamos lo que se va a aplicar o cambiar, en este caso color (colocando titulo.style.color, importante los puntos). Otro ejemplo:

titulo.style.background = "blue"

otro ejemeplo:

titulo.style.color = "#fff"
titulo.style.background = "blue"
titulo.style.padding = "20px"

hay muchos tipos.

otro ejemplo mas:

titulo.style.color = "#fff"
titulo.style.background = "blue"
titulo.style.padding = "20px"
titulo.style.transform = "translate(-10px,-10px)"
titulo.style.transition = 'transform 1s';

ultimo ejemplo:

titulo.style.color = "#fff"
titulo.style.background = "blue"
titulo.style.padding = "20px"
titulo.style.display = "inline-block"
titulo.style.margin = "60px 300px"
titulo.style.transform = "translate(-20px,-20px)"
titulo.style.transition = 'transform 2s';
*/