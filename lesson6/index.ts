// TS and inheritance

// Person class hosil qildik name and age filt bilan
class Person {
    _name: string = "";
    _age: number = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    seyHello(): string {
        return `Assalom aleykum mening ismim ${this._name}`
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

class Teacher extends Person {
    disciplines: string[] = [];

    constructor (name: string, age: number, disciplines: string[]){
        super(name,age);
        this.disciplines = disciplines;
    }
}

// Person classdan odiiygina object hosil qildik
const javlon: Person = new Person('Javlon', 23);

console.log(javlon);
console.log(javlon.seyHello());

const Sardor: Student = new Student("Sardor", 24, "210-guruh", 4)
console.log(Sardor);
console.log(Sardor.seyHello());

// Sardor.

// let a: unknown = 1;
// let b: number = <number>a


const newSardor: Person = <Person>Sardor
// newSardor.
console.log(newSardor)
console.log(newSardor.seyHello());

const Abror: Teacher = new Teacher("Abror", 34, ["React", "JS"])

console.log(Abror);
console.log(Abror.seyHello());
