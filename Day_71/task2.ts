/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/

class MyPublicClass {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const publicInstance = new MyPublicClass("huzaifa");
console.log(publicInstance.name);

class MyPrivateClass {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    revealName(): void {
        console.log(this.name); // Accessing the private property from within the class
    }
}

const privateInstance = new MyPrivateClass("huzaifa");
// console.log(instance.secret); // This would result in an error because secret is private
privateInstance.revealName(); // This is a valid way to access the private property

class Parent {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Child extends Parent {
    introduceName(): void {
        console.log(`This is a name of person ${this.name}`);
    }
}

const personName = new Parent("Huzaifa");
// console.log(personName.name) // This would result in an error because name is protected
const personName2 = new Child("Ahmed");
personName2.introduceName() // This is a valid way to access the protected property