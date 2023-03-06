// console.log("Hola Amigos!");
// class Pizza{
//     constructor(pizzaType, pizzaSize){
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//         this.toppings = [];
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(pizzaCrust){
//         this.crust = pizzaCrust;
//     }
//     setToppings(toppings){
//         this.toppings.push(toppings);
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     bake() {
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
//     }
// };
// const myPizza = new Pizza("pepperoni" ,"small");
// myPizza.setCrust("thin");
// myPizza.bake();
// console.log(myPizza.type);
// console.log(myPizza.crust);
// console.log(myPizza.getCrust());
// myPizza.setToppings("sausage");
// myPizza.setToppings("taco");
// console.log(myPizza.getToppings());

// class Pizza{
//     constructor(pizzaSize){
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(pizzaCrust){
//         this.crust = pizzaCrust;
//     }
// }

// class SpecialtyPizza extends Pizza{
//     constructor(pizzaSize){
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//     }
// }

// const mySpec = new SpecialtyPizza("medium");
// mySpec.slice();
