
/**************
 * TYPE ALIAS *
**************/

type myString = string
let myName: myString = 'Huzaifa';

type myStringOrNumber = string | number;
let myValue: myStringOrNumber = 23


type Employee = {
    name: string;
    age: number;
    email?: string
}

let huzaifa: Employee = {
    name: 'huzaifa',
    age: 23,
    email: 'huzaifa.rb00@gmail.com'
}

let faraz: Employee = {
    name: 'Faraz',
    age: 24
}
