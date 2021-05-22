class animal {
	constructor(especie, edad, color) {
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy un ${especie}, tengo ${edad} años y soy de color ${color}. <br>`;
	}
	verInfo() {
		document.write(this.info + '<br>');
	}
}

class perro extends animal {
	constructor(especie, edad, color, raza) {
		super(especie, edad, color);
		this.raza = null;
	}
	set setRaza(newName) {
		this.raza = newName;
	}

	get getRaza() {
		return this.raza;
	}
}

const dog = new perro('perro', '5', 'negro', 'caniche');

// const gato = new animal('gato', '5', 'blanco con manchas negras y grises');

// const loro = new animal('loro', '2', 'verde');

dog.setRaza = 'doberman';

document.write(dog.getRaza);

//gato.ladrar();
//loro.ladrar();

/* Caracteristicas de la POO

* Abstracción: Es la reduccion de caracteristicas complejas de un elemento, es decir, cuando hablamos de un auto o de un perro no estamos diciendo "el color de las patas es asi, su cabeza es grande, su cola es asi y asi", no solo tomamos la mas importante de sus caracteristicas. y a eso podemos tener un objeto o un metodo sin tantas cosas.

* Modularidad: Es la capacidad de resolver un problema grande, dividiendolo o separandolo en partes.

* Encapsulamiento: Lo que consiste es hacer que toda la data o todo los datos esten privados, osea, que el usuario no pueda acceder tan facil.

* polimorfismo: Esto consiste en ver como un objeto se comporta de manera distinta ante el mismo metodo. La capacidad que tiene un objeto para comportarse distinto por sus propiedades.

*/

/* Otros conceptos de POO

* Herencia: Es crear una clase que va a tomar todas las propiedades y todo lo que puede hacer la otra clase pero agregarle mas cosas y metodos. (extends)

* Metodos estáticos: Es un metodo donde no necesita que la clase se defina para poder ser creado

* Metodos accesores (getters, setters)

*/

/* Llevando a codigo, caracteristicas principales y herencia

ladrar() {
		if (this.especie == 'perro') {
			document.write('!Waw¡' + '<br>');
		} else {
			document.write(' No puede ladrar ya que es un ' + this.especie + '<br>');
		}
	}
}

Esta seria una manera de hacer que un objeto haga algo pero no seria de una manera correcta, esto es un ejemplo de polimorfismo ya que dependiendo del animal, va o no a ladrar.

* ###################################################

class perro extends animal{}

lo que dice acá es que la clase perro va a tener todo lo que tiene la clase animal, solo que le vamos a agregar unas cosas en especifico.

class perro extends animal {
	constructor(especie, edad, color, raza) {
		super(especie, edad,color);
	}
}

? Acá heredamos todas los parametros y ademas todos lo objetos y caracteristicas, super() lo que hace es heredad todo, no hay que estar colocando nuevamente "this.tanto" y asi.

!No se puede tener el mismo nombre de un objeto y de una clase.

* ############################################

class animal {
	constructor(especie, edad, color) {
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy un ${especie}, tengo ${edad} años y soy de color ${color}. <br>`;
	}
	verInfo() {
		document.write(this.info + '<br>');
	}
}

class perro extends animal {
	constructor(especie, edad, color, raza) {
		super(especie, edad, color);
		this.raza = raza;
		this.info = `Soy un ${especie}, tengo ${edad} años y soy de color ${color} y soy de raza ${raza}. <br>`;
	}
	verInfo2() {
		document.write(this.info + '<br>');
	}
}

const dog = new perro('perro', '5', 'negro', 'caniche');

const gato = new animal('gato', '5', 'blanco con manchas negras y grises');

const loro = new animal('loro', '2', 'verde');

dog.verInfo2();
gato.verInfo();
loro.verInfo();

todo: Acá tenemos un ejemplo de herencia
*/

/* Metodos estaticos y accesores llevados a codigo

!Metodos estaticos:

static ladrar() {alert('Waw');}
perro.ladrar();

* Por ejemplo: aca no existe el objeto dog, entonces no se podria ejecutar "waw" porque los parametros no van directos al metodo en si, pero cuando colocamos static y llamamos a la  clase ahora si nos daria la alerta sin haber creado ninguna clase

* #######################################

!Metodos accesores:

* Los Getters son para obtener un valor.

* Los Setters son para modificar o definir un valor.(set)

! Setters:

class perro extends animal {
	constructor(especie, edad, color, raza) {
		super(especie, edad, color);
		this.raza = null;
	}
	set setRaza(newName) { En el nombre se le suele poner como
                            identificador(serRaza)
		this.raza = newName;
	}
}

dog.setRaza = 'doberman';

document.write(dog.raza);

! Con esto lo que hacemos es modificar el valor de un objeto. Y para llamar a esta funcion, tenemos que colocar el nombre del objeto(dog) punto el nombre de la funcion(modificarRaza) e igualarlo al valor nuevo que le queremos dar.

! Getters:

get getRaza() {
		return this.raza;
	}

document.write(dog.getRaza);

De esta manera llamamos a un elemento y asi lo llamamos.
*/
