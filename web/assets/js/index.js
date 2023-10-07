let myArray = [];
myArray.push(-2, -1, 0, 1);
myArray.push(2, 3, 4, 5)
console.log(myArray);

// Removing items from an array
// removing the last item we use


let my_NewArray;
my_NewArray = myArray.pop();
console.log("The removed item from the array is", my_NewArray, "and now my new array has", myArray.length, "items", "and they include", myArray);


// the .pop() function only removes the last item from the array list
// the .push() function can be used to add a single or multiple items into an array list object
// JavaScript is pure fun just like Python, HTML & CSS


// to add or remove elements from the beginning of an array we use .unshift() and .shift() functions
// let's see how this functions

myArray.shift(); // removing the first element from the array list object

myArray.unshift(-3); // adding an item to the first index/positon of an array list

// now study the code and see the changes made

console.log(myArray);
