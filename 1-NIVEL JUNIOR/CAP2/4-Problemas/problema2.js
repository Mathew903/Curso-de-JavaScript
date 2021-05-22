let cantidad = prompt(' ¿cuantos alumnos son? ');
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt('nombre del alumno ' + (i + 1)), 0];
}

const asistencia = (nombre, p) => {
	let presencia = prompt(nombre);
	if (presencia == 'p' || presencia == 'P') {
		alumnosTotales[p][1]++;
	}
};

for (i = 0; i < 30; i++) {
	for (alumno in alumnosTotales) {
		asistencia(alumnosTotales[alumno][0], alumno);
	}
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
                asistencias: ${alumnosTotales[alumno][1]}<br>
                ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}
    `;
	if (30 - alumnosTotales[alumno][1] > 18) {
		resultado += 'REPROBADO POR INASISTENCIA <br>';
	} else {
		resultado += '<br><br>';
	}
	document.write(resultado);
}
