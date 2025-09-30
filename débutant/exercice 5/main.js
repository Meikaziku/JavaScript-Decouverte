const mot = "exemple";
let compteur = 0;
const voyelles = "aeiou";

for (let lettre of mot.toLowerCase()) {
  if (voyelles.includes(lettre)) {
    compteur++;
  }
}

console.log(`Le mot "${mot}" contient ${compteur} voyelle(s).`);