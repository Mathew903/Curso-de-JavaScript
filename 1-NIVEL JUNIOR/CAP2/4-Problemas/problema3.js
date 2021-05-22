const sumar = (num1, num2) => {
	return parseInt(num1) + parseInt(num2);
};

const restar = (num1, num2) => {
	return parseInt(num1) - parseInt(num2);
};

const multiplicar = (num1, num2) => {
	return parseInt(num1) * parseInt(num2);
};

const dividir = (num1, num2) => {
	return parseInt(num1) / parseInt(num2);
};

alert('¿Que operacion deseas realizar?');

let operacion = prompt('1: suma, 2: resta, 3: multiplicacion; 4: dividision');

if (operacion == 1) {
	let num1 = prompt('primer numero para sumar');
	let num2 = prompt('segundo numero para sumar');
	let resultado = sumar(num1, num2);
	alert(`tu resultado es ${resultado}`);
} else if (operacion == 2) {
	let num1 = prompt('primer numero para restar');
	let num2 = prompt('segundo numero para restar');
	let resultado = restar(num1, num2);
	alert(`tu resultado es ${resultado}`);
} else if (operacion == 3) {
	let num1 = prompt('primer numero para multiplicar');
	let num2 = prompt('segundo numero para multiplicar');
	let resultado = multiplicar(num1, num2);
	alert(`tu resultado es ${resultado}`);
} else if (operacion == 4) {
	let num1 = prompt('primer numero para dividir');
	let num2 = prompt('segundo numero para dividir');
	let resultado = dividir(num1, num2);
	alert(`tu resultado es ${resultado}`);
} else {
	alert('no se ha encontrado la operacion');
}
