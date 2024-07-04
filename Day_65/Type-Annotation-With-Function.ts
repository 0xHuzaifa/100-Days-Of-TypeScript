
/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
**********************************/

// Function to calculate the area of rectangle
function calculateRectangleArea(lengthOfRectangle: number, widthOfRectangle: number): number {
    return lengthOfRectangle * widthOfRectangle
}

const lengthOfRectangle: number = 5;
const widthOfRectangle: number = 10;
const area: number = calculateRectangleArea(lengthOfRectangle, widthOfRectangle);
console.log(`The area of Rectangle is ${area}`);
