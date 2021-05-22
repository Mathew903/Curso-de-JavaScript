class computer {
	constructor(monitor, teclado, mouse, gabinete, parlantes) {
		this.monitor = monitor;
		this.teclado = teclado;
		this.mouse = mouse;
		this.cpu = gabinete;
		this.parlantes = parlantes;
		this.encendidoApagado = false;
	}
	botonEncendidoApagado() {
		if (this.encendidoApagado == false) {
			alert('La cpu está prendiendose');
			this.encendidoApagado = true;
		} else {
			alert('La cpu está apagandose ');
		}
	}
	pantalla() {
		alert('La pantalla esta encendida y está mostrando datos');
	}
	keyBoard() {
		alert('El teclado está funcionando');
	}
	Mouse() {
		alert('Mouse andando');
	}
	Parlantes() {
		alert('Los parlantes estan encendido y funcionan correctamente');
	}
}

class superComputadora extends computer {
	constructor(
		monitor,
		teclado,
		mouse,
		gabinete,
		parlantes,
		placaVideo,
		fuente
	) {
		super(monitor, teclado, mouse, gabinete, parlantes);
		this.placaDeVideo = placaVideo;
		this.fuente = fuente;
	}
	fuenteDeAlimentacion() {
		if (this.fuente == '800w') {
			alert('Tienes una buena fuente, ademas está funcionando correctamente');
		} else {
			alert('tienes una placa de potencia baja');
		}
	}
	placaGrafica() {
		if (this.placaDeVideo == 'GTX') {
			alert('Tienes una placa de alta resolucion');
		} else {
			alert('Desconosco esa placa grafica');
		}
	}
}

const computadora = new superComputadora(
	'20 pulgadas',
	'gamer',
	'gamer',
	'nuevo',
	'alto sonido',
	'GTX',
	'800w'
);

computadora.botonEncendidoApagado();
computadora.pantalla();
computadora.fuenteDeAlimentacion();
computadora.keyBoard();
computadora.Mouse();
computadora.Parlantes();
computadora.placaGrafica();
computadora.botonEncendidoApagado();
