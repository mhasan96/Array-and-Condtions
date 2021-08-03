// Add an elements to an array
var lastBench = ["kalam", "balam", "salam"];
lastBench.push("jalam");
lastBench.push("palam");
lastBench.push("malam");
// console.log(lastBench);

// Remove an elements from an array
lastBench.pop(); // no need to insert value in pop. it will remeove the last one.
// console.log(lastBench);

// only Keep the last Value
var lastItem = lastBench.pop();
console.log(lastItem);

//Remove an items from the beginning of an array
lastBench.shift();
// console.log(lastBench);

//add an items to the beginning of an array
lastBench.unshift("Sadek");
// console.log(lastBench);
