// TS and inheritance

// Person class hosil qildik name and age filt bilan
class Person {
    _name: string = "";
    _age: number = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
}

// Yana bitta class hosil qildik
// bunga name and age filt kerak bo'lyabdi
// Person classsdan extends qilib vorisiylik oldik

class Student extends Person {
    _group: string = "";
    _course: number = 0;

    constructor (name: string, age: number, group: string, course: number) {
        // superga Person constructorida mavjud bo'lgan filtlarni olish mumkun 
        super(name, age);
        this._group = group;
        this._course = course;

    }
}

// Person classdan odiiygina object hosil qildik
const javlon: Person = new Person('Javlon', 23);

console.log(javlon);

const Sardor: Student = new Student("Sardor", 24, "210-guruh", 4)
console.log(Sardor);
