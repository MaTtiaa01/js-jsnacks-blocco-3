/*Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [
   
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'oca', famiglia: 'fasianidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]


// ##### VERSIONE LUNGA####
// const mammiferi = animals.filter((animal) => {
//     if (animal.classe === "mammiferi") {
//         return true
//     }
// })


const mammiferi = animals.filter(animal => animal.classe === "mammiferi");



console.log(mammiferi);