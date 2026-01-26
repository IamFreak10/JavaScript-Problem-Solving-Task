// Word Count
function wordCount(str) {
  let obj = {};
  let words = str.split(' ');
  for (let w of words) {
    obj[w] = (obj[w] || 0) + 1;
  }
  return obj;
}
// let s = 'Java Script JSon jjjj';
// let a = wordCount(s);
// console.log(a);

