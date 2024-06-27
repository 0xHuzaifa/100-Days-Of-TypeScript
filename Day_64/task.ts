/*********************************
 * TYPE ANNOTATIONS WITH OBJECTS *
*********************************/


let personOne: {
    name: string;
    age: number;
    jobTitle: string;
    address: {
        street: string;
        city: string
    };
};

personOne = {
    name: 'Huzaifa',
    age: 23,
    jobTitle: 'Blockchain Developer',
    address: {
        street: 'Essarpura',
        city: 'Nawabshah'
    },
}

// There is another method

let personTwo: {
    name: string;
    age: number;
    jobTitle: string;
    address: {
        street: string;
        city: string
    };
} = {
    name: 'Faraz',
    age: 24,
    jobTitle: 'Assistant Teacher',
    address: {
        street: 'GiKi University',
        city: 'Topi'
    }
}

