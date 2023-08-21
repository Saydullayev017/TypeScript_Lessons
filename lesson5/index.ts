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
}

const javlon: Person = new Person("javlon", 22);
const ismoil: Person = new Person("ismoil", 21);
// console.log(ismoil);
// console.log(javlon.info());
console.log(Person.isFlaying);


