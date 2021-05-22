let animales = ['mono ', ' leon ', ' perro ', ' gato ', ' aguila '];

let animales2 = [' simio ', ' avestruz ', ' serpiente ', animales, ' loro '];

for (animal in animales2) {
	if (animal == 3) {
		for (animal of animales) {
			document.write(animal + '<br>');
		}
	} else {
		document.write(animales2[animal] + '<br>');
	}
}
