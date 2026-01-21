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
// console.log(fruits);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);
// ** concat()- joins two or more arrays,and returns a new array


fruits.copyWithin(2, 0);
// console.log(fruits);
fruits.copyWithin(2, 0, 2);
// console.log(fruits);
const myArr = [[1,2],[3,4],[5,6],[7,8,[9,10,[11,12]]]];
const newArr = myArr.flat(Infinity);
console.log(newArr);