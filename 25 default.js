function exampleA (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};


function exampleB (x, y = 7, z = 42) {
  return x + y + z;
}


console.log( exampleA(1) );
console.log( exampleB(1) );

// console.log( exampleB(2) );
// console.log( exampleB(3,3,3) );
