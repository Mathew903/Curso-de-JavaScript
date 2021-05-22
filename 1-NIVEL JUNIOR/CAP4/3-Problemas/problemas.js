class calculadora {
	constructor() {}

	sumar(num1, num2) {
		return parseInt(num1) + parseInt(num2);
	}

	restar(num1, num2) {
		return parseInt(num1) - parseInt(num2);
	}

	multiplicar(num1, num2) {
		return parseInt(num1) * parseInt(num2);
	}

	dividir(num1, num2) {
		return parseInt(num1) / parseInt(num2);
	}

	potencia(num1, exp) {
		return parseInt(num1) ** parseInt(exp);
	}

	raicesCuadradas(num) {
		return Math.sqrt(num);
	}
	raicesCubicas(num) {
		return Math.cbrt(num);
	}
}

const calcular = new calculadora();

alert('¿Que operacion deseas realizar?');

let operacion = prompt(
	'1: suma, 2: resta, 3: multiplicacion, 4: dividision, 5: potenciacion, 6: Raiz cuadrada, 7: Raiz cubica'
);

if (operacion == 1) {
	let num1 = prompt('primer numero para sumar');
	let num2 = prompt('segundo numero para sumar');
	let resultado = calcular.sumar(num1, num2);
	alert(`tu resultado es ${resultado}`);
} else if (operacion == 2) {
	let num1 = prompt('primer numero para restar');
	let num2 = prompt('segundo numero para restar');
	let resultado = calcular.restar(num1, num2);
	alert(`tu resultado es ${resultado}`);
} else if (operacion == 3) {
	let num1 = prompt('primer numero para multiplicar');
	let num2 = prompt('segundo numero para multiplicar');
	let resultado = calcular.multiplicar(num1, num2);
	alert(`tu resultado es ${resultado}`);
} else if (operacion == 4) {
	let num1 = prompt('primer numero para dividir');
	let num2 = prompt('segundo numero para dividir');
	let resultado = calcular.dividir(num1, num2);
	alert(`tu resultado es ${resultado}`);
} else if (operacion == 5) {
	let num1 = prompt('numero a potenciar');
	let exp = prompt(' ingresa el exponente');
	let resultado = calcular.potencia(num1, exp);
	alert(`tu resultado es ${resultado}`);
} else if (operacion == 6) {
	let num = prompt('Conocer la raiz cuadrada de: ');
	let resultado = calcular.raicesCuadradas(num);
	alert(`tu resultado es ${resultado}`);
} else if (operacion == 7) {
	let num = prompt('Conocer la raiz cubica de: ');
	let resultado = calcular.raicesCubicas(num);
	alert(`tu resultado es ${resultado}`);
} else {
	alert('no se ha encontrado la operacion');
}
