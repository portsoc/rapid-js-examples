// same thing;  3 different formats

// method a
let a = {};
a.fname = "Jack";
a.age = 18;

// method b
let b = {
  fname: "Jack",
  age: 18,
};

// method c
let fname = "Jack";
let age = 18;
let c = { fname, age };

// thus three object structures
console.log(a);
console.log(b);
console.log(c);
