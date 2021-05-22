let tp = '100 minutos hacer trabajos practicos';
let estudio = '100 minutos de estudio';

let descanso = '10 minutos de descanso';

let homework = '30 minutos de trabajo en casa';
let trabajo = '240 minutos de trabajo';

console.log('TAREAS');

for (i = 0; i < 14; i++) {
	if (i == 0) {
		console.group('SEMANA 1');
	}

	console.groupCollapsed('DIA ' + (i + 1));

	console.log(trabajo);
	console.log(descanso);
	console.log(estudio);
	console.log(tp);
	console.log(homework);

	console.groupEnd();

	if (i == 7) {
		console.groupEnd();
		console.groupCollapsed('SEMANA2');
	}
}

console.groupEnd();
console.groupEnd();
