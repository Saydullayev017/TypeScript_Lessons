// TS arrays, tuples & enums
// massivlar 
var a = [];
a = [12, 'sdf', true, undefined, {}];
// let b = [1,2,3,4];
// b = ["asasas"];
var b = [12, 33];
var c = [22, 33];
c = [1, 2, 3, 4];
var d = [1, 2, 3, 4, "asas"];
var e = [1, 2, 3, 4, true];
// ----------------------------------------------------------------
// tuples
// shablondan chqib ketmagan holatda massivni toldirish kerak 
var f;
f = [12, "name"];
//  kombinatsya qilsek xam buladi
// let f: [number, string, [boolean, number]];
// f = [12, 'men', [true, 12]];
// ----------------------------------------------------------------
// Qayta hisoblash - Enums
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Famale"] = 1] = "Famale";
})(Gender || (Gender = {}));
console.log(Gender.Male, Gender.Famale); // 0 1
var G;
(function (G) {
    G[G["A"] = 10] = "A";
    G[G["B"] = 11] = "B";
})(G || (G = {}));
console.log(Gender.Male, Gender.Famale); // 0 1 / 10 11
var Gende;
(function (Gende) {
    Gende[Gende["Male"] = 0] = "Male";
    Gende[Gende["Famale"] = 1] = "Famale";
})(Gende || (Gende = {}));
console.log(Gende.Male, Gende.Famale); // 0 1
console.log(Gende[1], Gende[Gende.Famale]); // Famale Famale
var H;
(function (H) {
    H["A"] = "hello";
    H["B"] = "Typescript";
})(H || (H = {}));
console.log(H.A, H.B); // Hello Typescript
console.log(0 /* I.A */, 1 /* I.B */);
