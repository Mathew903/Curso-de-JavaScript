const Obtenerinformacion = (materia) => {
	materias = {
		fisica: ['Perez', 'pedro', 'juan', 'matias', 'lucas'],
		quimica: ['Horacio', 'pedro', 'julian', 'matias', 'maria', 'cofla'],
		matematica: ['Eugenia', 'damian', 'juan', 'matias', 'lucas', 'cofla'],
		historia: ['Mario', ' pedro ', ' juan ', ' marcos ', ' lucas', 'cofla'],
	};
	if (materias[materia] !== undefined) {
		return [materias[materia], materia, materias];
	} else {
		return materias;
	}
};

const mostrarInformacion = (materia) => {
	let informacion = Obtenerinformacion(materia);

	if (informacion !== false) {
		let profesor = informacion[0][0];
		let alumnos = informacion[0];
		alumnos.shift();
		document.write(
			`El profesor de <b>${informacion[1]}</b> es: <b>${profesor}</b><br>
        Los Alumnos son : <b>${alumnos}</b></br><br>`
		);
	}
};

const cantidadDeClases = (alumno) => {
	let informacion = Obtenerinformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion) {
		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(' ' + info);
		}
	}
	return `<b style="color: blue" >${alumno}</b> está en <b>${cantidadTotal++} clases:</b> <b style="color:green">${clasesPresentes}</b> <br><br>
    
    `;
};

mostrarInformacion('fisica');
mostrarInformacion('quimica');
mostrarInformacion('matematica');
mostrarInformacion('historia');

document.write(cantidadDeClases('cofla'));
document.write(cantidadDeClases('matias'));
document.write(cantidadDeClases('maria'));
document.write(cantidadDeClases('juan'));
