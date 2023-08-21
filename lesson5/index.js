// TS da sinflar or classes
// Agar class ni ichida function yozadigon bolsek bu method deb atalaid,
// Agar class dan tashqarida function yozadigon bolsak bu funtion deb ataladi.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = 'Javlon';
        this._age = 21;
        this._name = name;
        this._age = age;
    }
    // method
    Person.prototype.info = function () {
        return "".concat(this._name, " - ").concat(this._age, " da");
    };
    // static
    Person.isFlaying = false;
    return Person;
}());
var javlon = new Person("javlon", 22);
var ismoil = new Person("ismoil", 21);
// console.log(ismoil);
// console.log(javlon.info());
console.log(Person.isFlaying);
