let a = 3;
console.log( a );

a = function (x,y) { return x+y; };
//a = (x,y) => { return x+y; };       // shorthand for the above
//a = (x,y) => x+y;                   // shorthand for the shorthand

console.log( a );
console.log( a( 1,2 ) );

