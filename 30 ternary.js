let result;
if (Math.random() > 0.9) {
	result = "winner";
} else {
	result = "loser";
}
console.log(`You are a ${result}`);
// can be shortened to:

console.log(`You are a ${ Math.random()>0.9 ? "winner" : "loser" }`);
