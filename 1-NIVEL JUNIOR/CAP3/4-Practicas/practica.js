class automovil {
	constructor(marca, color, velocidad, año) {
		this.marca = marca;
		this.color = color;
		this.velocidad = velocidad;
		this.año = año;
		this.arrancar = false;
	}
	arrancarApagar() {
		if (this.arrancar == false) {
			alert('El coche esta arrancando');
			this.arrancar = true;
		} else {
			alert('El auto esta apagandose');
			this.arrancar = false;
		}
	}

	frenar() {
		alert('auto frenado');
	}
}

class autoMejorado extends automovil {
	constructor(marca, color, velocidad, año, pilAuto) {
		super(marca, color, velocidad, año);
		this.pilotoAutomatico = pilAuto;
		this.pilotoManual = false;
	}
	modoAutomatico() {
		if (this.pilotoManual == false) {
			alert('modo automatico encendido');
			this.pilotoManual = true;
		} else {
			alert('modo automatico apagado');
			this.pilotoManual = false;
		}
	}
}

const auto = new autoMejorado('ferrari', 'rojo', '300', '2021');

auto.arrancarApagar();
auto.modoAutomatico();
auto.modoAutomatico();
auto.frenar();
auto.arrancarApagar();
