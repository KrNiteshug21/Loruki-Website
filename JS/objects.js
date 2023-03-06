const obj = { name: "Nite", rollno: 110 };
console.log(obj);

// const newObj = {
//     alive: true,
//     roll: 110,
//     courses: ["DSA","DBMS","OS","OOPS"],
//     MessFood: {
//         morning: "coffee",
//         afternoon: "coffee",
//         evening: "coffee",
//     },
//     action: function(){
//         return ${obj.name};
//     }
// }
// console.log(newObj.MessFood.evening);
// console.log(newObj["roll"]);
// console.log(newObj.action());

// const vehicle = {
//     wheels: 4,
//     engine: function(){
//         return "Vrroooom!";
//     }
// }

// const truck = Object.create(vehicle);
// truck.doors = 4;
// console.log(truck);
// console.log(truck.wheels);
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function(){
//     return "Whoooosh!";
// };
// console.log(car.engine());

// const person = {
//     name: ["Bob","Smith"],
//     age: 32,
//     bio: function(){
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years`);
//     },
//     introduceSelf: function() {
//         console.log(`Hi! I'm ${this.name[0]}.`)
//     }
// }
// console.log(person.name);
// console.log(person.name[0]);
// console.log(person.age);
// console.log(person.bio());
// console.log(person.introduceSelf());
// person.name.pop();
// person.name.pop();
// person.name.first = "Bob";
// person.name.last = "Smith";
// console.log(person.name);

// const band = {
//     vocals: "Robert Plant",
//     guitar: "Jimmy Page",
//     bass: "John Paul Jones",
//     drums: "John Bronham"
// };
// console.log(Object.keys(band));
// console.log(Object.values(band));

// for(let job in band){
//     console.log(`On ${job}, it's ${band[job]}`);
// }

// const {guitar : myVar1, drums: myVar2} = band;
// console.log(myVar1);
// console.log(myVar2);

// const {guitar, vocals, bass, drums} = band;
// console.log(vocals);
// console.log(guitar);
// console.log(bass);
// console.log(drums);

// function sings({vocals}) {
//     return `${vocals} sings`;
// }
// console.log(sings(band));

const multiplyNumeric = function(menu){
    for(let key in menu){
        if(typeof menu[key] == "number")
        menu[key] *= 2;
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
// after the call