const materias = {
	fisica: [90, 10, 4, 'fisica'],
	quimica: [60, 7, 2, 'quimica'],
	electronica: [50, 6, 1, 'electronica'],
	lengua: [70, 5, 4, 'lengua'],
	matematica: [100, 9, 3, 'matematica'],
	historia: [95, 9, 4, 'historia'],
	algebra: [40, 4, 0, 'algebra'],
	biologia: [88, 10, 2, 'biologia'],
};

const aprobo = () => {
	for (materia in materias) {
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2];

		console.log(materias[materia][3]);

		if (asistencias >= 90) {
			console.log('%c  Asistencias en orden', 'color:green');
		} else {
			console.log('%c  Falta de asistencias', 'color:red');
		}
		if (promedio >= 7) {
			console.log('%c  Promedio aprobado', 'color:green');
		} else {
			console.log('%c  Promedio desaprobado', 'color:red');
		}
		if (trabajos >= 3) {
			console.log('%c  Entregas de trabajos en orden', 'color:green');
		} else {
			console.log('%c  Entrega de trabajos desaprobado', 'color:red');
		}
	}
};

aprobo();
