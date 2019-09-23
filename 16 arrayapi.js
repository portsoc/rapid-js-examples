let a = [ "barack", "hillary", "donald" ];

console.log( a.indexOf("hillary") );

console.log( a.includes("hillary") );

console.log( a );

a.sort();
console.log( "sorted", a );

a.push("ronald");
console.log( "pushed", a );

a.reverse();
console.log( "reversed", a );

a.unshift("george"); // dumbest function name *ever*
console.log( "unshifted", a );
