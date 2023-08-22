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
    Person.description = function () {
        return 'Bu klass person haqida ...';
    };
    Object.defineProperty(Person.prototype, "name", {
        // getter and setter
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 0 && value < 100) {
                this._age = value;
            }
            else {
                throw new Error("SIZ NO TOG'RI YOSH KRITDINGIZ");
            }
        },
        enumerable: false,
        configurable: true
    });
    // static
    Person.isFlaying = false;
    return Person;
}());
var javlon = new Person("javlon", 22);
var ismoil = new Person("ismoil", 21);
// console.log(ismoil);
// console.log(javlon.info());
// console.log(Person.isFlaying);
// console.log(Person.description());
// console.log(javlon);
// javlon.age = 25;
// console.log(javlon.age);
// instanceof
// bu class or objectni tekshirish uchun ishlatiladi
if (javlon instanceof Person) {
    console.log('Tegishli shu objectga');
}
else {
    console.log('Tegishli emas');
}
