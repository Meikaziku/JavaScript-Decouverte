let number = 15;

if (number % 5 === 0 && number % 3 === 0) {
  console.log("fizzbuzz");
} else {
  if (number % 3 === 0) {
    console.log("fizz");
  }

  if (number % 5 === 0) {
    console.log("buzz");
  }
}

if (number % 5 != 0 && number % 3 != 0) {
  console.log(number);
}


let number = 2;

let resultat = '';

// si le nombre est un multiple de 3
if (number % 3 === 0){
    resultat += 'fizz';
}

// si le nombre est un multiple de 5
if (number % 5 === 0){
    resultat += 'buzz';
}

// si le nombre n'est pas un multiple de 5 ou 3
if (resultat === ''){
    resultat = number;
}

console.log(resultat);
