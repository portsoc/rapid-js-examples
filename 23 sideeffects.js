let latestGreeting = "";

function greet( name ) {
  console.log( `Hello ${name}` );
  latestGreeting = name;
}

greet( "Skywalker" );
greet( "Vader" );
console.log( latestGreeting );

