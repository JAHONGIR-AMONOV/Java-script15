// const chess = {
//     madeOf: "wood",
//     year: 2024,
//     colors: "white, black",

//     details: {
//         figures: 32,
//         typeOfFigures: 6,
//         cages:64
//     },
//     user: {
//         name: "Anybody",
//         age: "4-100",
//         isEassy: false
//     }

// }

const car = {
    model: "x7",
    marka: "BMW",
    year: 2024,
    price: 120000,
    details: {
        horsepower: 600,
        seats: 5,
        drivetrain: 'FWD'
    }
}

const user = {
    name: "Jaxongir",
    surname: "Amonov",
    passport: {
        number: 1111111,
        serries: "AC",
    },
    age: 25,
    isMarried: true,
    address: "Sogdiana",
    wifes: ["Малика", "Ситора", "Сабина", "Рамиз"]
}

const both = Object.assign({}, car, {user})

let keys = Object.keys(both)
let values = Object.values(both)
const kAndV = {keys, values}

const filteredKeys = Object.keys(both).filter(key => key);
const filteredValues = Object.values(both).filter((value) => value);

console.log(keys, values, both);