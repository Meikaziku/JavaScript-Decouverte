let variable1 = 5;
let variable2 = 9;
let stockage = variable1;

console.log("valeurs avant inversement");
console.log(variable1);
console.log(variable2);

variable1 = variable2;
variable2 = stockage;

console.log("valeurs après inversement");
console.log(variable1);
console.log(variable2);
