let free = false;

const fiesta = (time) => {
	let edad = prompt(' ¿Que edad tenes? ');
	if (edad > 18) {
		if (time >= 2 && time < 7 && free == false) {
			alert(
				`son las ${time}:00hs podes pasar gratis porque llegaste primero a este horario MASTER`
			);
			free = true;
		} else {
			alert(`son las ${time}:00hs podes pasar pero tenes que pagar`);
		}
	} else {
		alert('No podes pasar niño, andate');
	}
};

fiesta(22);
fiesta(24);
fiesta(1);
fiesta(2);
fiesta(3);
fiesta(4);
