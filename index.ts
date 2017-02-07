var a=5;
console.log("a",a);

let isDone: boolean = false;
console.log(isDone);

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal,hex,binary,octal);
console.log(decimal+1);
console.log("decimal"+decimal+1);

let color: string = "blue";
color = 'red';
console.log(color);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

let sentence1: string = "Hello, my name is " + fullName + ".\n" +"I'll be " + (age + 1) + " years old next month."
console.log(sentence1);

let list: number[] = [1, 2, 3];
console.log(list);

let list1: Array<number> = [1, 'abc', 3];
console.log(list1);
console.log(list1[1]);

let x: [string, number];
x = ["hello", 10]; 
x = [10, "hello"]; 


// console.log(x[0].substr(1));
console.log(x[1].substr(1));
x[3] = "world"; 
x[5] = 5;
x[5] = x[5].toString();
console.log(x[5].toString()); 
x[6] = true; 
console.log(x);

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(Color);
console.log(c);

enum Color1 {Red = 1, Green, Blue};
let c1: Color1 = Color1.Green;
console.log(Color1);
console.log(c1);

enum Color2 {Red = 1, Green = 2, Blue = 4};
let c2: Color2 = Color2.Blue;
console.log(Color2);
console.log(c2);

enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
console.log(colorName);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure = 4;
console.log(notSure);


// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

// let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
let list5: any[] = [1, true, "free"];
list5[1] = 100;
console.log(list5);

function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();

let u: undefined = undefined;
let n: null = null;
console.log(u,n);


function error(message: string): never {
    throw new Error(message);
}
function fail() {
    console.log("Something failed");
}
function infiniteLoop(): never {
    while (true) {
    }
}
fail();

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);

let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;
console.log(strLength1);

console.log("---------------------------------------------------------");
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var gf = f();
// g();
console.log("a",a);

function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

console.log(f(true));  
console.log(f(false)); 

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// } 



// let x = 10;
// let x = 20; 
// console.log(x);



function f8(condition, x) {
    if (condition) {
        var x1 = 100;
        return x1;
    }

    return x1;
}

console.log(f8(false, 0)); // returns '0'
console.log(f8(true, 0)); 

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); 