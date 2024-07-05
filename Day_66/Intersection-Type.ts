
/*********************
 * INTERSECTION TYPE *
*********************/

type FirstType = {
    name: string
    age: number
}

type SecondType = {
    address: {
        city: string
        country: string
    }
    phone: number
}

type CombinedType = FirstType & SecondType;

const person: CombinedType = {
    name: 'Huzaifa',
    age: 23,
    address: {
        city: 'Nawabshah',
        country: 'Pakistan'
    },
    phone: +92333333333
}
