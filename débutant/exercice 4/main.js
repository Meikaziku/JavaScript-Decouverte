let mot = "exemple";

let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

let nombreVoyelle = 0;

for(let i = 0; i < mot.length; i++) {
    voyelles.forEach(voyelle => {
        if(voyelle === mot[i]){
            nombreVoyelle += 1;
        }
    })

}

// Version améliorée - plus performante et lisible
// let nombreVoyelle = 0;
// for(let i = 0; i < mot.length; i++) {
//     if(voyelles.includes(mot[i].toLowerCase())) {
//         nombreVoyelle++;
//     }
// }
