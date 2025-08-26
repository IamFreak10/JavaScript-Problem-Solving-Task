function PalindromeCechk(str) {
  let reStr = '';
 
  for (let i = str.length - 1; i >= 0; i--) {
    reStr += str[i];
  }
  if (reStr == str) {
    return true;
  } else {
    return false;
  }
}
let str1 = 'madam';
let result1 = PalindromeCechk(str1);
console.log(result1);
let str2 = 'hello';
let result2 = PalindromeCechk(str2);
console.log(result2);