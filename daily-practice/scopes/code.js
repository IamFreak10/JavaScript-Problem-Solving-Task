// var c = 3000;
let a = 300;
{
  let a = 10;
  const b = 20;
//   console.log('Inner: ', a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = 'mahfuj';
  function two() {
    const website = 'youtube';
    console.log(username);
  }
//   console.log(website) //!error for block scope
  two();
}
one();
