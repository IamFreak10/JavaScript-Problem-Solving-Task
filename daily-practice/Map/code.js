// Create a new Map
let myMap = new Map();

// Set values
myMap.set('name', 'Mahfuj');
myMap.set('age', 23);
myMap.set(true, 'Boolean Key');

// Get values
console.log(myMap.get('name')); // Mahfuj
console.log(myMap.get(true));   // Boolean Key

// Check key existence
console.log(myMap.has('age')); // true

// Size of map
console.log(myMap.size); // 3

// Delete a key
myMap.delete('age');
console.log(myMap.has('age')); // false

// Loop through Map
myMap.forEach((value, key) => {
  console.log(key, value);
});

// Using for..of
for (let [key, value] of myMap) {
  console.log(key, value);
}
