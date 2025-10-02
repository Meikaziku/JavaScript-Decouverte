
let isWin = false;
let nombreDepart;

while (isWin === false) {

  nombreDepart = parseInt(prompt("Devine le nombre !"));

if (nombreDepart > 20) {
    alert("Plus petit !")
}

if (nombreDepart < 10) {
  alert("Plus grand!")
  
}

if (nombreDepart > 10 && nombreDepart < 20) {
  alert("bien joué !")
  isWin = true
}
  
}

