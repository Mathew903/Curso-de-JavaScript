class celular {
	constructor(color, peso, tamaño, resCam, ram) {
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = resCam;
		this.memoriaRam = ram;
		this.encendido = false;
	}

	botonEncendido() {
		if (this.encendido == false) {
			alert('Celular prendido');
			this.encendido = true;
		} else {
			alert('El celular está apagado');
			this.encendido = false;
		}
	}

	reiniciar() {
		if (this.encendido == true) {
			alert('Reiniciando celular');
		} else {
			alert('El celular está apagado');
		}
	}

	tomarFoto() {
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
	}

	grabarVideo() {
		alert(`Grabando video a una resolucion de: ${this.resolucionDeCamara}`);
	}
	mobileInfo() {
		return `
		color: <b>${this.color}</b> <br> 
		Peso: <b>${this.peso}</b><br>
		Tamaño: <b>${this.tamaño}</b><br>
		Resolucion de camara: <b>${this.resolucionDeCamara}</b><br>
		Resolucion de Video: <b>${this.resolucionDeCamara}</b><br>
		Memoria Ram: <b>${this.memoriaRam}</b><br>
		`;
	}
}

class superTelefono extends celular {
	constructor(color, peso, tamaño, resCam, ram, rdce) {
		super(color, peso, tamaño, resCam, ram);
		this.resolucionDeCamaraExtra = rdce;
	}
	camaraLenta() {
		alert('tienes una funcion de video de camara lenta');
	}
	reconocimientoFacial() {
		alert('Iniciando reconocimiento facial');
	}
	mobileInfoAltaGama() {
		return (
			this.mobileInfo() +
			`Resolucion de camara extra: <b>${this.resolucionDeCamaraExtra}</b><br>`
		);
	}
}

// const telefono = new celular(
// 	'negro',
// 	' 120g ',
// 	' 5 pulgadas ',
// 	' HD ',
// 	' 1GB '
// );

// const telefono2 = new celular(
// 	'blanco',
// 	' 140g ',
// 	' 5.1 pulgadas ',
// 	' Full HD ',
// 	' 2GB '
// );

// const telefono3 = new celular(
// 	'negro',
// 	' 130g ',
// 	' 5.5 pulgadas ',
// 	' Full HD ',
// 	' 2GB '
// );

//telefono.botonEncendido();
//telefono.tomarFoto();
//telefono.grabarVideo();
//telefono.reiniciar();
//telefono.BotonEncendido();

const gamaAlta = new superTelefono(
	'negro',
	' 135g ',
	' 6 pulgadas ',
	' Full HD ',
	' 3 GB ',
	'HD 40px'
);

const gamaAlta2 = new superTelefono(
	'negro',
	' 130g ',
	' 6.1 pulgadas ',
	' Full HD 2k ',
	' 4GB ',
	'Full HD 50px'
);

document.write(
	`${gamaAlta.mobileInfoAltaGama()} <br> ${gamaAlta2.mobileInfoAltaGama()} <br>`
);
