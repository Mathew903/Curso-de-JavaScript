class apps {
	constructor(descargas, puntuacion, peso) {
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.abierta = false;
		this.instalada = false;
	}
	instalarDesinstalar() {
		if (this.instalada == false) {
			this.instalada = true;
			alert('aplicacion instalada correctamente');
		} else {
			alert('Aplicacion desinstalandose correctamente');
		}
	}
	abrirseCerrarse() {
		if (this.abierta == false && this.instalada == true) {
			alert('Aplicacion abriendose');
			this.abierta = true;
		} else {
			alert('Aplicacion cerrandose');
			this.abierta = false;
		}
	}
	appInfo() {
		return `Cantidad de descargas: <b>${this.descargas}</b><br>
		Puntuacion: <b>${this.puntuacion} estrellas</b><br>
		pesa : <b>${this.peso}</b><br> `;
	}
}

const app = new apps('1M', '4.5', '100MB');
const app2 = new apps('50k', '3', '20MB');
const app3 = new apps('20k', '2.5', '15MB');
const app4 = new apps('1.5M', '4.6', '150MB');
const app5 = new apps('500k', '4.2', '400MB');
const app6 = new apps('1.8M', '4.3', '500MB');
const app7 = new apps('3M', '5', '1GB');

// app.instalarDesinstalar();
// app.abrirseCerrarse();
// app.abrirseCerrarse();
// app.instalarDesinstalar();

document.write(`${app.appInfo()}<br> 
                ${app2.appInfo()}<br>
				${app3.appInfo()}<br>
				${app4.appInfo()}<br>
				${app5.appInfo()}<br>
				${app6.appInfo()}<br>
				${app7.appInfo()}<br> `);
