let nom = "RAMI"
let prenom = "Yacine"
let age = 17;


let adulte = age >= 18 ? 'Adulte' : 'Mineur';

let oldStr = 'Bonjour\n'
    + nom
    + '\n'
    + prenom
    +'\n'
    + age
    + ' years old'
    +'\n'
    + adulte;

let str = `Bonjour\n${nom}\n${prenom}\n${age} years old\n${(age >= 18 ? 'Adulte' : 'Mineur').toUpperCase()}`

//document.querySelector('#oldStr').textContent = oldStr
//document.querySelector('#newStr').textContent = str
