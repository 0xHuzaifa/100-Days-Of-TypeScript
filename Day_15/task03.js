/*
* Question 45: Cars: Create detailed car objects with flexible properties.

* Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects.
* This is ideal for data with a few required fields and many optional fields.
*/
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
export {};
// // Method 2
// interface Car {
//     manufacturer: string;
//     model: string
//     color?: string;
//     year?: number
// }
// function storeCarInfo(manufacturer: string, model: string, ...args: (string | number)[]): Car {
//     const car: Car = {
//         manufacturer: manufacturer,
//         model: model
//     }
//     for (const arg of args) {
//         if (typeof arg === 'string') {
//             car.color = arg;
//         } else if (typeof arg === 'number') {
//             car.year = arg;
//         }
//     }
//     console.log(`${manufacturer}, ${model}${car.color ? ', ' + car.color : ''}${car.year ? ', ' + car.year : ''}`);
//     return car;
// }
// // Test cases
// storeCarInfo("Toyota", "Camry");
// storeCarInfo("Honda", "Civic", "Black");
// storeCarInfo("Ford", "Mustang", 2022);
// storeCarInfo("Tesla", "Model S", "Electric");
// storeCarInfo("Chevrolet", "Silverado", "Truck", 2023);
// storeCarInfo("Chevrolet", "Silverado", 2000, "Truck");
