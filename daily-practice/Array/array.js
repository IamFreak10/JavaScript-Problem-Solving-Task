const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

let myList = fruits.toString();
// console.log(myList); // Banana,Orange,Apple,Mango

const myList2 = fruits.join('->');
// console.log(myList2);

// ? push()- adds new elements to the end of an array
// ? unshift()- adds new elements to the beginning of an array
// ! pop()- removes the last element from an array and returns that element
// ! shift()- removes the first element from an array and returns that element
fruits[fruits.length] = 'Kiwi';
console.log(fruits);
