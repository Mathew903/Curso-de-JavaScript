class animal {
	constructor(especie, edad, color) {
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy un ${especie}, tengo ${edad} años y soy de color ${color}.<br>`;
	}
	verInfo() {
		document.write(this.info);
	}
}

const perro = new animal('perro', '5', 'negro');

const gato = new animal('gato', '4', 'blanco con manchas negras');

const loro = new animal('loro', '2', ' verde con combinacion de otros colores');

// document.write(perro.info + '<br>');
// document.write(gato.info + '<br>');
// document.write(loro.info);

perro.verInfo();
gato.verInfo();
loro.verInfo();

/* Programacion Orientada a Objetos(POO)

Es un paradigma de la programación que lo que hace es intentar actualizar la forma en que programamos mejorandola y haciendo que podamos programar objetos como lo hariamos en la vida real. Resolver los problemas de una mejor forma.

Un paradigma es una de las tantas formas que tenemos de crear soluciones .

*/

/* Conceptos basicos de POO

clase: Es como una plantilla o una reseta, que creamos, para que con eso podamos crear objetos, es como una fabrica de objetos.
Una clase es un prototipo o molde que indica qué características van a tener y cómo se van a comportar los elementos creados a partir de dicha clase.

objeto: son el resultado de las clases.

atributo: las particularidades, las propiedades, las caracteristicas que tiene nuestro objeto.

metodo: cosas que puede realizar o hacer nuestro objeto. Son las acciones que vamos a hacer. 

constructor: Es una funcion obligatoria que tienen las clases. Cuando cremaos una clase tenemos que crear un constructor, que nos va a construir las propiedades del objeto.

instanciacion: cuando se llega a esto, se puede decir que la clase está instanciada, estamos instanciando un objeto.La instancia de una clase, es el objeto el cual a partir del momento de su existencia; es capaz de acceder a: métodos,propiedades

*/

/* Aplicando a codigo

siempre se empieza con una clase y el nombre de esa clase o el nombre de lo que vayamos a crear, por ejemplo vamos a crear un animal:

class animal{

}

Ya tenemos la primera parte, pero como bien dijimos una clase necesita de un constructor y como se agrega:

class animal{
    constructor(parametros){
    
    }
}

Dentro de constructor hirian los parametros, las caracteristicas, como por ejemplo en caso de un animal, la especie, edad, tamaño,color,etc:

class animal{
    constructor(especie, edad,color)
}

Luego...:

class animal{
    constructor(especie, edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    }
}

! Acá que ocurre? bueno la propiedad "this." lo que hace es crear un objeto, con ese objetos podemos crear las propiedades. This va a ser el objeto que voy a crear y que tendra las caracteristicas de lo que quiera.

! "this.especie" cuando colocamos lo siguiente es la propiedad del objeto "this" que creamos y estos van a ser iguales a los parametros. No es necesario colocar especie, yo en este caso puedo colocar el nombre de la propiedad que quiera.

? Cuando trabajemos con objetos, mayormente hay que trabajar con const al crear variables.

const perro = new animal(valor de los parametros);

* Bueno, que significa esto? "new" lo que quiere decir es: bueno vamos a crear una clase, instanciar un objeto.

Perro va a ser igual a un objeto(new) de la clase animal(animal)

si se quiere acceder a los parametros colocamos "." ya que perro es un objeto y seria lo mismo que colocar "this"

const perro = new animal('perro', '5', 'negro');

document.write(perro.info);
*/

/* Varios proyectos

class animal {
	constructor(especie, edad, color) {
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy un ${especie}, tengo ${edad} años y soy de color ${color}.`;
	}
}

const perro = new animal('perro', '5', 'negro');

const gato = new animal('gato', '4', 'blanco con manchas negras');

const loro = new animal('loro', '2', ' verde con combinacion de otros colores');

document.write(perro.info + '<br>');
document.write(gato.info + '<br>');
document.write(loro.info);

de esta manera podemos,crear una clase, un proyecto y de ahi crear objetos con propiedades y crear mas y mas proyectos dandole a cada uno las propiedades.
*/

/* Aplicando los metodos

! Los metodos se crean dentro de la clase.

todo: Si creamos una funcion dentro de una clase, se le llama "metodo"

* Cuando hay elementos o priedades fuera de la clase, llamamos al objeto o funcion mediante el nombre, pero si es dentro de la clase lo llamamos mediante "this".

! Pero el this solo funciona cuando estamos dentro del constructor, si esta afuera no porque ya se determina y no es necesario.

! las funciones flecha no pueden ser usadad para crear metodos en las clases , entonces hay que hacerlo de la forma antigua o normal.

class animal {
	constructor(especie, edad, color) {
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy un ${especie}, tengo ${edad} años y soy de color ${color}.<br>`;
	}
	* verInfo() {
		document.write(this.info);
	}
}

const perro = new animal('perro', '5', 'negro');

const gato = new animal('gato', '4', 'blanco con manchas negras');

const loro = new animal('loro', '2', ' verde con combinacion de otros colores');

* perro.verInfo();
* gato.verInfo();
* loro.verInfo();

Entonces de esta manera creamos un metodo y de esta manera lo llamamos.

* De esta manera nos queda una forma mas optima y sencialla cuando vayamos a crear objetos. Y de esto se trata POO tratar de crear y solucionar problemas de una mejor forma y de una forma optimizada.

*/
