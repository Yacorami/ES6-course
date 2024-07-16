let countriesTab = new Set(['Maroc', 'Algerie'])
countriesTab.add('France')
countriesTab.add('Maroc')
countriesTab.add('Tunsie')

countriesTab.delete('Algerie')
//countries.clear() // clears the set

// console.log(countries.has('Maroc')) // checks if the value exists already in the set
// console.log(countries.size)
// console.log(countries.values())
// console.log(countries.keys())
// console.log(countries.entries())

for (let [pays, k] of countriesTab.entries()) {
   //console.log(pays, k)
}

