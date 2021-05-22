dineroRoberto = prompt('Cuanto dinero tienes Roberto?');
dineroPedro = prompt('Cuanto dinero tienes Pedro?');
dineroCofla = prompt('Cuanto dinero tienes Cofla?');

dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);
dineroCofla = parseInt(dineroCofla);

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert(' Roberto podes Comprar el helado de agua');
	alert('y te sobran ' + (dineroRoberto - 0.6));
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert('Roberto podes comprar el helado de crema');
	alert('y te sobran ' + (dineroRoberto - 1));
} else {
	alert('Roberto no podes comprar helado');
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert('Pedro podes Comprar el helado de agua');
	alert('y te sobran ' + (dineroPedro - 0.6));
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert('Pedro podes comprar el helado de crema');
	alert('y te sobran ' + (dineroPedro - 1));
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert('Pedro podes comprar el helado de chocolate');
	alert('y te sobran ' + (dineroPedro - 1.6));
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert('Pedro podes comprar el helado de frutilla');
	alert('y te sobran ' + (dineroPedro - 1.7));
} else {
	alert('Pedro no podes comprar helado');
}

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert('Cofla podes Comprar el helado de agua');
	alert('y te sobran ' + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert('Cofla podes comprar el helado de crema');
	alert('y te sobran ' + (dineroCofla - 1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert('Cofla podes comprar el helado de chocolate');
	alert('y te sobran ' + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert('Cofla podes comprar el helado de frutilla');
	alert('y te sobran ' + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert('Cofla podes comprar el helado de vainilla');
	alert('y te sobran ' + (dineroCofla - 1.8));
} else if (dineroCofla >= 2.9) {
	alert('Cofla podes comprar el helado con confite o el pote de 1/4 KG');
	alert('y te sobran ' + (dineroCofla - 2.9));
} else {
	alert('Cofla no podes comprar helado');
}

// dineroCofla = parseInt(dineroCofla); lo que hace esta funcion es convertir un elemento string a un elemento int o numerico, pero no solo.
