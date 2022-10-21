/*Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/


const cars = [
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "metano",
    },
    {
        marca: "ferrari",
        modello: "monza",
        alimentazione: "benzina",
    },
    {
        marca: "chevrolet",
        modello: "suv",
        alimentazione: "elettrico",
    },
    {
        marca: "merceds",
        modello: "classe6",
        alimentazione: "diesel",
    },
    {
        marca: "audi",
        modello: "rs",
        alimentazione: "diesel",
    },
    {
        marca: "lamborghini",
        modello: "huracan",
        alimentazione: "elettrico",
    },
    {
        marca: "bmw",
        modello: "z4",
        alimentazione: "benzina",
    },
]


// array auto a benzina
const benzina = cars.filter((car) => {
    if (car.alimentazione === "benzina") {
        return true
    }
})

console.log(benzina);


//array auto a diesel
const diesel = cars.filter((car) => {
    if (car.alimentazione === "diesel") {
        return true
    }
})

console.log(diesel);


//array altre auto
const other = cars.filter((car) => {
    if (car.alimentazione === "benzina" || car.alimentazione === "diesel") {
        return false
    }
    return true
})

console.log(other);
console.log(other[0].alimentazione);

