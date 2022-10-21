/*A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const firstArr = ["pippo","PLUTO","Paperino"];

const finalARR = firstArr.map((element) => {
    const firstChar = element.charAt(0).toUpperCase();
    console.log(firstChar);
    const sliceEl = element.slice(1).toLowerCase();
    console.log(sliceEl);
    return firstChar + sliceEl;
})

console.log(finalARR);


