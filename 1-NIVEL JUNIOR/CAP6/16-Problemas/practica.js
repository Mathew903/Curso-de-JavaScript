const contenedor = document.querySelector('.div');

let fragment = document.createDocumentFragment();

function etiquetas(titulo, subtitulo, parrafo) {
	img = `<img src = "image/png">`;
	h1 = `<h1>${titulo}</h1>`;
	h2 = `<h2>${subtitulo}</h2>`;
	p = `<p>${parrafo}</p>`;
	return [img, h1, h2, p];
}


for (let i = 0; i < 10; i++) {
	numeroRandom = Math.round(Math.random() * 1000 - 100);
	let div = document.createElement('DIV');
	etiqueta = etiquetas('soy un titulo', 'subtitle', `${numeroRandom}`);
	div.innerHTML = etiqueta[0] + etiqueta[1] + etiqueta[2] + etiqueta[3];
	fragment.appendChild(div);
}

contenedor.appendChild(fragment);
