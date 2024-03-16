class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        throw new Error("Method 'makeSound' must be implemented.");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}


const myDog = new Dog("Rex");
const myCat = new Cat("Whiskers");
const unknownAnimal = new Animal("Unknown");


myDog.makeSound(); // Woof woof!
myCat.makeSound(); // Meow!
unknownAnimal.makeSound(); // Error: Method 'makeSound' must be implemented.