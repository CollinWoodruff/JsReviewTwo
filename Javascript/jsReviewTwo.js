function objEquals(obj1, obj2) {
    return  JSON.stringify(obj1) === JSON.stringify(obj2);
}

let obj = {here: {is: "an"}, object: 2};

console.log(objEquals(obj, obj));
// → true

console.log(objEquals(obj, {here: 1, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an"}, object: 2}));
// → true

console.log(objEquals(obj, {here: {is: "an"}, object: 0}));
// → false

console.log(objEquals(obj, {here: {is: "another"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {isnt: "an"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
// → false

function flatten(input) {
    return input.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

let arr = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arr));