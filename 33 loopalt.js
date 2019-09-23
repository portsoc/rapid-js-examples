const a = [ "barack", "hillary", "donald" ];

console.log( a.find( (item) => item.includes('a') ));
console.log( a.some( (item) => item.includes('a') ));
// console.log( a.every( (item) => item.includes('l') ));

// a.forEach( (item) => { console.log(item); } );

// const b = a.map ( (item) => item.toUpperCase() );
// b.forEach( (item) => { console.log(item); } );


a.find( (item) => item.includes('a') );  // try some, every
a.forEach( (item) => { console.log(item); } );
const b = a.map ( (item) => item.toUpperCase() );
