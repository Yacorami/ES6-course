const countries = ['Maroc', 'France', 'Tunisie']
const otherCountries = ['USA', 'UAE', 'UNO', 'OHNO', 'France']

// Array merging
const allCountries = [...countries, ...otherCountries];
console.table(allCountries)
document.querySelector('#countries').innerHTML = JSON.stringify(allCountries)


// Onjects

const fruit = {
    name: 'Apple',
    color: 'Green',
    weight: 2.6,
    price: 22
}

const otherFruit = {
    name: 'Orange',
    'color': 'Orange',
    weight: 3
}



const fruitCopy = {...fruit}
fruitCopy.name = "della3a"
fruitCopy.weight = 3;

console.table({...fruit, ...fruitCopy})
console.table({...fruit, ...otherFruit, ...fruitCopy, ...{height:12}})

document.querySelector("#fruits").innerHTML = JSON.stringify(fruitCopy)