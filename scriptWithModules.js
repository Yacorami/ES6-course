// Import from named export
import {dispUser, users, dispUserParam} from './modules/user.js'
console.log(dispUser())
console.table(users)
for(let user of users) {
    console.log(dispUserParam(user))
}


// Import from default export
import displayUser from './modules/user.js'// we don't necessarily have to respect the name
console.log(displayUser())