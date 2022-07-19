console.log(undefined ?? "??");
console.log("" ?? "??");
console.log(0 ?? "??");
console.log(undefined || "||");
console.log("" || "||");
console.log(0 || "||");

let val1 = null
val1 ??= 1
let val2 = undefined
val2 ??= 1
let val3 = 0
val3 ??= 1
let val4 = 0
val4 ??= 1

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

val3 ||= 1
val4 ||= 1

console.log(val3);
console.log(val4);