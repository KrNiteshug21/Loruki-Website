// import playGuitar from "./guitars.js";
// import {shredding as shred, plucking as fingerPicking } 
// from "./guitars.js";
// console.log(playGuitar());
// console.log(shred());
// console.log(fingerPicking());

import * as Guitars from "./guitars.js";
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

import User from "./user.js";
const me  = new User("Nite1931@gmal.com", "Nite");
console.log(me);
console.log(me.greeting());