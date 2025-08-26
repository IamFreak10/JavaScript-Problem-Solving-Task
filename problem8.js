// Problem 8: Capitalize First Letter of Each Word
function capitalize(str) {
  let capstr = '';
  let a = [];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      capstr += str[i];
    } else {
      a.push(capstr);
      capstr = '';
    }
  }

  if (capstr !== '') {
    a.push(capstr);
  }
  for (let i = 0; i < a.length; i++) {
    let c = a[i][0].charCodeAt(0);

    
    if (c >= 97 && c <= 122) {
      
      let C = String.fromCharCode(c - 32);
      
      a[i] = C + a[i].substring(1); 
    }

    
    result += a[i]+' ';
  }

  return result;
}

let str = 'hello world';
// Hello World
let cap = capitalize(str);
console.log(cap);
