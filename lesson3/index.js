"use strict";
// TS da tiplarni ozgartirish va birlashtirish
// unknown type, union type, literal type, type aliases, required and optional properties, operator in
// ---------------------------------------------
// havfli usul
let a = 10;
let b = a;
// havsiz usul
let c = 20; //bu any tipga ekvevalent
// ozgaruvchini ozlashtirish 2 xil usuli
let e = c;
let f = c;
// (c as number).toFixed(2);
// (<number>c).toString();
// ---------------------------------------------
// union type
// Tiplarning birlashmasini union tiplar deb ataladi
// yaniy men h o'zgaruvchisiga 1 vaqtni o'zida boshqa tiplarni biriktirib 
// ishlatishimiz mumkun
let h = 10;
h = "text";
h = true;
// ---------------------------------------------
// literal tiplar
let s;
s = "sm";
s = "md";
s = "lg";
let s2 = "SM";
s2 = "MD";
s2 = "LG";
let s3 = false;
s3 = "MD";
s3 = "SM";
s3 = false;
// yangiz ozgaruvchiga ozlashtirib olamza
let obj;
// objga qiymat beraman name yoki age ga qiymat berishim kerak
obj = { name: "str" };
obj = { age: 23 };
obj = { name: "sdf", age: 24 };
let obj2;
// bu yerda ikkala objectni xam ishlatish majbur
obj2 = { name: 'ibrohim', age: 23 };
let obj3;
obj3 = { name: 'ibrohim' };
obj3 = { name: 'java', age: 23 };
// in operatori xam mavjud
if ("age" in obj3) {
    console.log("yep");
}
else {
    console.log("nope");
}
// ---------------------------------------------
