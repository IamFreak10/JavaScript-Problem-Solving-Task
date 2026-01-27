function vowelCounter(str) {
  let vowel = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  let cnt = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    //p
    
    for (let j = 0; j <= vowel.length; j++) {
      if (str[i] == vowel[j]) cnt++;
     
    }
  }
  return cnt;
}
let a = 'programming';
let cnt = vowelCounter(a);
console.log(cnt);