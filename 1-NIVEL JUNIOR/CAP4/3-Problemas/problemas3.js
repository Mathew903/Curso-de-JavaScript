let materias = {
	fisica: ['Perez', 'pedro', 'juan', 'matias', 'lucas', 'marcos'],
	quimica: ['Horacio', 'pedro', 'julian', 'matias', 'maria', 'cofla'],
	matematica: ['Eugenia', 'damian', 'juan', 'matias', 'lucas', 'cofla'],
	historia: ['Mario', ' pedro ', ' juan ', ' marcos ', ' lucas', 'cofla'],
};

const inscribirse = (alumno, materia) => {
	personas = materias[materia];
	if (personas.length >= 21) {
		document.write(
			`<br> Lo siente <b>${alumno}</b> pero la clase de <b>${materia}</b> está llena ya no puedes inscribirte.<br>`
		);
	} else {
		personas.push(alumno);
		if (materia == 'fisica') {
			materias = {
				fisica: personas,
				quimica: materias['quimica'],
				matematica: materias['matematica'],
				historia: materias['historia'],
			};
		} else if (materia == 'quimica') {
			materias = {
				fisica: materias['fisica'],
				quimica: personas,
				matematica: materias['matematica'],
				historia: materias['historia'],
			};
		} else if (materia == 'matematica') {
			materias = {
				fisica: materias['fisica'],
				quimica: materias['quimica'],
				matematica: personas,
				historia: materias['historia'],
			};
		} else if (materia == 'historia') {
			materias = {
				fisica: materias['fisica'],
				quimica: materias['quimica'],
				matematica: materias['matematica'],
				historia: personas,
			};
		}
		document.write(
			`<br>!Felicidades <b>${alumno}</b>¡ te has inscripto a <b>${materia}</b> correctamente.<br><br>`
		);
	}
};

document.write(
	'Los alumnos de quimica son: ' + materias['quimica'] + '<br> <br>'
);

inscribirse('pedrito', 'quimica');
inscribirse('pedrito', 'quimica');
inscribirse('pedrito', 'quimica');
inscribirse('pedrito', 'quimica');
inscribirse('pedrito', 'quimica');
inscribirse('pedrito', 'quimica');
inscribirse('pedrito', 'quimica');
inscribirse('pedrito', 'quimica');
inscribirse('pedrito', 'quimica');

document.write(
	'<br> <br>' + 'Los alumnos de quimica son: ' + materias['quimica']
);
