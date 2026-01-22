function Yo() {
  console.log('Say Name');
}
// Yo; //!Reference
// Yo(); //!Call

// ? Spread Operator (...nums)
function calculate(...nums) {
  return nums;
}
// console.log(calculate(1, 3, 4, 5));

// ?Interview Question
function show(val1, val2, ...nums) {
  console.log(nums);
  //!only shos nums,not val1 and val2
}
const user = {
  name: 'Mahfuj',
  age: 22,
};
function handleObj(obj) {
  console.log(`${obj.name} is ${obj.age} years old`);
}
handleObj(user);
handleObj({ name: 'Freak', age: 23 });
