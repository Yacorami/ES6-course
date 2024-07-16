var stringada = 'Yacine,Amine,Khalid'
let tablo = ['Yacine', 'Amine', 'Anass']

const keys = tablo.keys()


for (let key of keys) {
    //console.log(key)
}



////////////////// Search

let find = tablo.find((e) => {
    return e == 'Yacine'
})
//console.log(find)

let find2 = tablo.find(function(value) {
    return value.startsWith('A')
    }
)
//console.log(find2)

let findAll = tablo.filter(function(value) {
    return value.startsWith('A')
    }
)
//console.log(findAll)

let findIndex = tablo.findIndex(value => value.startsWith('An'))
//console.log(tablo[findIndex])
 