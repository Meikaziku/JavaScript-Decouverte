let chiffrePourTableMultiply = prompt(
  "Veuillez saisir le chiffre dont vous voulez la table de multiplication"
);

let resultat = "";

for (let index = 1; index <= 10; index++) {
  resultat += `${chiffrePourTableMultiply} X ${index} = ${
    chiffrePourTableMultiply * index
  }\n`;
}

alert(resultat);