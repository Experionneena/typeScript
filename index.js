var a = 5;
console.log("a", a);
var isDone = false;
console.log(isDone);
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal, hex, binary, octal);
console.log(decimal + 1);
console.log("decimal" + decimal + 1);
var color = "blue";
color = 'red';
console.log(color);
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
var sentence1 = "Hello, my name is " + fullName + ".\n" + "I'll be " + (age + 1) + " years old next month.";
console.log(sentence1);
var list = [1, 2, 3];
console.log(list);
var list1 = [1, 'abc', 3];
console.log(list1);
console.log(list1[1]);
var x;
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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(Color);
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
console.log(Color1);
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Blue;
console.log(Color2);
console.log(c2);
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
console.log(colorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure = 4;
console.log(notSure);
// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
// let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
var list5 = [1, true, "free"];
list5[1] = 100;
console.log(list5);
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
var u = undefined;
var n = null;
console.log(u, n);
function error(message) {
    throw new Error(message);
}
function fail() {
    console.log("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
fail();
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
console.log(strLength1);
console.log("---------------------------------------------------------");
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var gf = f();
// g();
console.log("a", a);
function f(shouldInitialize) {
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
var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
console.log(first); // outputs 1
console.log(rest);
