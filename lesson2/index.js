// TypeScript => function, signature function, function overloads
//Function diclaration 
// function pow(x, y) {
//     return x ** y;
// }
function pow(x, y) {
    return "".concat(x, "**").concat(y, " = ").concat(Math.pow(x, y));
}
// console.log(pow(2,3)) // 2 ** 3 = 6
// arrow function
// const add = (x, y) => x + y;
var add = function (x, y) { return x + y; };
// qiymat qaytarmaydigon oddiy void function
function log(x) {
    console.log(x);
}
// never function
function someFunc(s) {
    throw new Error(s);
}
// siganure function
var c;
c = function (a, b) {
    return "".concat(b, ": ").concat(a);
};
//console.log(c(2, 'Javob')) //Javob: 2
// function overloads
function overloadFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return "".concat(x, " ").concat(y);
    }
}
console.log(overloadFunc(2, 3));
