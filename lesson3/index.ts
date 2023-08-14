// TS da tiplarni ozgartirish va birlashtirish
// unknown type, union type, literal type, type aliases, required and optional properties, operator in
// ---------------------------------------------

// havfli usul
let a: any = 10;
let b: number = a;

// havsiz usul
let c: unknown = 20; //bu any tipga ekvevalent

// ozgaruvchini ozlashtirish 2 xil usuli
let e: number = <number>c;
let f: number = c as number;

// (c as number).toFixed(2);
// (<number>c).toString();

// ---------------------------------------------

// union type
// Tiplarning birlashmasini union tiplar deb ataladi
// yaniy men h o'zgaruvchisiga 1 vaqtni o'zida boshqa tiplarni biriktirib 
// ishlatishimiz mumkun
let h : number | string | boolean = 10;
h = "text";
h = true;

// ---------------------------------------------

// literal tiplar
let s: "sm" | "md" | "lg";
s = "sm";
s = "md";
s = "lg";

// ---------------------------------------------

// type aliases - tiplarga nom bervolish usuli
type Sizes = "SM" | "MD" | "LG" | boolean;
let s2: Sizes = "SM";
s2 = "MD";
s2 = "LG";

let s3: Sizes = false;
s3 = "MD";
s3 = "SM"
s3 = false;



// obyektlarda ishlatib kuramza
type OBJ = { name: string} | { age: number };
// yangiz ozgaruvchiga ozlashtirib olamza
let obj: OBJ;
// objga qiymat beraman name yoki age ga qiymat berishim kerak
obj = { name: "str"};
obj = { age: 23 };
obj = { name: "sdf", age: 24 };



// va operatorida xam sinab kuramza
type OBJ2 = { name: string} & { age: number };
let obj2: OBJ2;
// bu yerda ikkala objectni xam ishlatish majbur
obj2 = { name: 'ibrohim', age: 23 }



// bu yerda bzada bittasi majburiy 2-si talabga bioan yaniy (age?)shu kurstkich.
type OBJ3 = { name: string; age?: number };
let obj3: OBJ3;

obj3 = { name: 'ibrohim'};
obj3 = { name: 'java', age: 23 };

// in operatori xam mavjud
if("age" in obj3) {
    console.log("yep")
}else{
    console.log("nope")
}

// ---------------------------------------------

