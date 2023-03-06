export default class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    greeting() {
        return `Hi! My name is ${this.name}.`;
    }
};

