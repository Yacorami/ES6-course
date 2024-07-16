import {User, Admin} from "./classes/user.js";
let userInst = new User('yacine', 34);
console.log(userInst.afficherUser());




let AdminInst1 = new Admin('admin', 44);
let AdminInst2 = new Admin('admin', 44);
let AdminInst3 = new Admin('admin', 44);
console.log(AdminInst3.afficherUser())

// get private property
console.log(AdminInst3.getId())