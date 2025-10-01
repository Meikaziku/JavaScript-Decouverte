const nombres = [8, 4, 17, 2, 19];

let max = nombres[0];
for (let i = 1; i < nombres.length; i++) {
	if (nombres[i] > max) {
		max = nombres[i];
	}
}
console.log(`Le plus grand nombre est : ${max}`);


