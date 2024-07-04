
/****************
 * VOID & NEVER *
****************/

// Void
function greet(name: string): void {
    console.log(`Hello ${name}`);
}

function notReturnValue(): void {
    
}

// Never
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while(true){
    }
}