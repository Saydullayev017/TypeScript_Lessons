// TS arrays, tuples & enums

// massivlar 
let a = [];
a = [12, 'sdf', true, undefined, {}];

// let b = [1,2,3,4];
// b = ["asasas"];
let b: number[] = [12,33];


let c: Array<number> = [22,33];
c = [1,2,3,4];

let d: (number | string)[] = [1,2,3,4, "asas"];

let e: Array<number | boolean> = [1,2,3,4, true];

// ----------------------------------------------------------------
// tuples

// shablondan chqib ketmagan holatda massivni toldirish kerak 
let f: [number, string];
f  = [12, "name"];

//  kombinatsya qilsek xam buladi
// let f: [number, string, [boolean, number]];
// f = [12, 'men', [true, 12]];

// ----------------------------------------------------------------
// Qayta hisoblash - Enums



enum Gender {
    Male,
    Famale,
}
console.log(Gender.Male, Gender.Famale); // 0 1

enum G {
    A = 10,
    B,
}

console.log(Gender.Male, Gender.Famale); // 0 1 / 10 11


enum Gende {
    Male,
    Famale,
}
console.log(Gende.Male, Gende.Famale); // 0 1
console.log(Gende[1], Gende[Gende.Famale]); // Famale Famale


enum H  {
    A = "hello",
    B = "Typescript"
}

console.log(H.A, H.B) // Hello Typescript


const enum I {
    A,
    B
}

console.log(I.A, I.B); 
