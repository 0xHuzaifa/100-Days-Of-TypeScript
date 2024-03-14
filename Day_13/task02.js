"use strict";
/*
* Question 38: Cities: Describing cities with a function.

* Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often.
* This helps in making your code more flexible.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function cities(city = "Karachi", country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
cities("Lahore");
cities("Nawabshah");
cities("Huston", "US");
