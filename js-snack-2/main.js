/*A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const firstArr = ["pippo","PLUTO","Paperino"];

//devo fare un ciclo dentro firstArr che mi restituisce l'elemento
//prendo ogni nome e lo trasformo in lowercase
//mi seleziono la lettera iniziale di ogni nome e la metto in uppercase
//devo sostituiere la lettera che ho con quella iniziale

const finalArr = firstArr.map((name) => {

    const lowerName = name.toLocaleLowerCase();
    //console.log(lowerName);
    const upperName = name[0].toUpperCase();
    //console.log(upperName);

    const firstChar = upperName;
    console.log(firstChar);

    const newChar = name[0].replace(firstChar); 
    console.log(newChar);

    return newChar
})

console.log(finalArr);


