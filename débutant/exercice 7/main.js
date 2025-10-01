const nombres = [1, 3, 6, 8, 5, 10, 21, 23, 49, 51, 30, 28];
let tableauNombrePairs = []
let tableauNombreImpairs = []

nombres.forEach(nombres => {
    if (nombres %2 === 0) {
        tableauNombrePairs.push(nombres)
        
    } else {
        tableauNombreImpairs.push(nombres)
    }

    console.log(tableauNombreImpairs);
    console.log(tableauNombrePairs);
    
    


    
});



