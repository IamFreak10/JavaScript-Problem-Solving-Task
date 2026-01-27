
function reversString(str) {
  let reStr = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
   
    reStr += str[i];
  }

  return reStr;
}
let str = 'hello';
let reverse = reversString(str);
console.log(reverse);