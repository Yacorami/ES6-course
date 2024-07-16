let map = new Map()
map.set('m', 'Maroc')
map.set('t', 'Tunisie')
map.set(1, 'Biladi')

map.delete('t')

map.set('nada', {})
map.set('num', 233)
map.set(1, 'LaBiladi')
map.set('nada', {"age": 56})

// console.log(map.entries())
// console.log(map.get('nada').age) // 56