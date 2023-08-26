// TS and inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Person class hosil qildik name and age filt bilan
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    Person.prototype.seyHello = function () {
        return "Assalom aleykum mening ismim ".concat(this._name);
    };
    return Person;
}());
// Yana bitta class hosil qildik
// bunga name and age filt kerak bo'lyabdi
// Person classsdan extends qilib vorisiylik oldik
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, group, course) {
        var _this = 
        // superga Person constructorida mavjud bo'lgan filtlarni olish mumkun 
        _super.call(this, name, age) || this;
        _this._group = "";
        _this._course = 0;
        _this._group = group;
        _this._course = course;
        return _this;
    }
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, disciplines) {
        var _this = _super.call(this, name, age) || this;
        _this.disciplines = [];
        _this.disciplines = disciplines;
        return _this;
    }
    return Teacher;
}(Person));
// Person classdan odiiygina object hosil qildik
var javlon = new Person('Javlon', 23);
console.log(javlon);
console.log(javlon.seyHello());
var Sardor = new Student("Sardor", 24, "210-guruh", 4);
console.log(Sardor);
console.log(Sardor.seyHello());
// Sardor.
// let a: unknown = 1;
// let b: number = <number>a
var newSardor = Sardor;
// newSardor.
console.log(newSardor);
console.log(newSardor.seyHello());
var Abror = new Teacher("Abror", 34, ["React", "JS"]);
console.log(Abror);
console.log(Abror.seyHello());
