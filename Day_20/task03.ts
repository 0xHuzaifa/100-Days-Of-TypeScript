/*
* Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that 
* can tell you the user's name and age.

* Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user 
* profile by itself and can tell you about the user.
*/

// Method 1

class UserProfile {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

const userOne = new UserProfile("Huzaifa", 22)
console.log("Username", userOne.getName());
console.log("Age", userOne.getAge());



// Method 2

const userProfile = (() => {
    const name: string = "Huzaifa";
    const age: number = 22;

    return({
        displayInfo: function() {
            console.log(`Username: ${name}, Age: ${age}`);
        }
    })
})();

userProfile.displayInfo();