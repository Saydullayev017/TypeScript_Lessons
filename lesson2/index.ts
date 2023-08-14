// TypeScript => function, signature function, function overloads

//Function diclaration 
// function pow(x, y) {
//     return x ** y;
// }
function pow(x: number, y: number): string {
    return `${x}**${y} = ${x ** y}`;
}
// console.log(pow(2,3)) // 2 ** 3 = 6

// arrow function
// const add = (x, y) => x + y;
const add = (x:number, y:number):number => x + y;


// qiymat qaytarmaydigon oddiy void function
function log(x: number):void { // void ni yozmasek xam boladi
    console.log(x)
}


// never function
function someFunc(s:string):never {
    throw new Error(s)
}


// siganure function
let c: (x:number, y:string) => string;
c = function(a: number, b: string): string {
    return `${b}: ${a}`;
}
//console.log(c(2, 'Javob')) //Javob: 2

// function overload
function overloadFunc(x:number, y:number): number;
function overloadFunc(x:string, y:number): string;
function overloadFunc(x:any, y:any):any {
    if(typeof x === "number" && typeof y === "number" ){
        return x + y;
    }else {
        return `${x} ${y}`;
    }
}

console.log(overloadFunc(2, 3));
console.log(overloadFunc("Javob", 17))
