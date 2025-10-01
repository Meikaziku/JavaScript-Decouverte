let phrase = "je suis un developpeur web";

let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

let nombreVoyelle = 0;

for(let i = 0; i < phrase.length; i++) {
    voyelles.forEach(voyelle => {
        if(voyelle === phrase[i]){
            nombreVoyelle += 1;
            console.log(nombreVoyelle);
            
        }
    })

}


