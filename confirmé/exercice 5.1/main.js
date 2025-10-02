let isWin = false;
let nombre;

while (!isWin) {
  nombre = parseInt(prompt("veuillez saisir un nombre entre 1 et 3"));

  if (nombre === 2) {
    alert("La réponse est corrècte");
    isWin = true
  } else {
    alert("La réponse est incorrecte");
  }
}
