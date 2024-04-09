/*
* Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

* Explain & TIP: You can group multiple case statements together when they should 
* execute the same block of code, which is handy for categorizing items into broader groups.
*/

function season(month: number): void {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log('Winter');
            break;
        
        case 3:
        case 4:
        case 5:
            console.log('Spring');
            break;
            
        case 6:
        case 7:
        case 8:
            console.log('Summer');
            break;
        
        case 9:
        case 10:
        case 11:
            console.log('Fall');
            break;
    
        default:
            console.log('Invalid month');
            
            break;
    }
}

season(12)
season(5)
season(9)
