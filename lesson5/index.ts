// TS da sinflar or classes
// Agar class ni ichida function yozadigon bolsek bu method deb atalaid,
// Agar class dan tashqarida function yozadigon bolsak bu funtion deb ataladi.
class Person {
    _name: string = 'Javlon';
    _age: number = 21;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // method
    info(): string {
        return `${this._name} - ${this._age} da`;
    }

    // static
    static isFlaying = false;
    static description(): string {
        return 'Bu klass person haqida ...'
    }

    // getter and setter
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    } 

    get age(): number {
        return this._age;
    }
    set age(value: number) {
        if(value > 0 && value < 100) {
            this._age = value;
        }else {
            throw new Error("SIZ NO TOG'RI YOSH KRITDINGIZ")
        }
    }
}

const javlon: Person = new Person("javlon", 22);
const ismoil: Person = new Person("ismoil", 21);
// console.log(ismoil);
// console.log(javlon.info());
// console.log(Person.isFlaying);
// console.log(Person.description());

// console.log(javlon);
// javlon.age = 25;
// console.log(javlon.age);

// instanceof
// bu class or objectni tekshirish uchun ishlatiladi
if(javlon instanceof Person) {
    console.log('Tegishli shu objectga');
}else {
    console.log('Tegishli emas');
    
}