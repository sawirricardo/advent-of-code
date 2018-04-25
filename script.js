const fs = require('fs');

// this is to define how much time it takes
console.time('santaHelper');

// we store the value from input.txt first
const input = fs.readFileSync('./input.txt','utf8').toString();

// Then, we set the floor's value to 0 because santa starts at 0
var floor = 0;

// This is for knowing the steps taken
var steps = 0;

// this purpose is to make the console prints ONLY when Santa enters the basement floor for the first time.
var a = 0;

// We use for loops function so that we can count santa steps.
for (i = 0; i < input.length; i++) {
    steps++;
    if (input.charAt(i) === '(') {
        floor++;
        
    } else {
        floor--;
        // Here we add other conditional statement so that we can answer the part 2 challange
        if (floor === -1 && a ===0) {
            console.log('Santa Enters the basement floor for the first time when he hits the ' + steps + 'th character.');
            a ++;        
        }
    };
}

// Lastly, we print the result
console.log('Santa goes to floor: ' + floor);

// We also get to know how much time it takes to finish the algorithm
console.timeEnd('santaHelper');