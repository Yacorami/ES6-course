
// Reminder of the spread operator
/*let dispfriends = (a, b, c) => {
    console.log (a);
    console.log (b);
    console.log (c);
}

let friends = ['Amine', 'Alae', 'Taha', 'Imad'];
let friends2 = ['Amine', 'Alae', 'Taha', 'Imad'];

dispfriends([...friends, ...friends2]);*/

let friends = ['Amine1', 'Alae2', 'Taha3', 'Imad4', 'Kahlid5', 'Hassan6', 'Abdel7']
let [f1, f2, , f4, ...others] = friends;
//console.log(f1, f2, f4, others) // others => ['Kahlid5', 'Hassan6', 'Abdel7']


// Objects : 
let fruita = {
    id: 12,
    name: "apple",
    weight: 13.2,
    color: "green"
}
let {id, name, nonExProp = 10, ...restOfObject} = fruita
console.log(id, name, nonExProp,  restOfObject) // 12 'apple' 10 {weight: 13.2, color: 'green'}