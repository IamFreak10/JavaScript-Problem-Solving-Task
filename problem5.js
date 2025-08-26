function removeDuplicate(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    let j;
    for ( j = 0; j < unique.length; j++) {
      if (arr[i] == unique[j]) {
        break;
      }
    }
    if (j == unique.length) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
let a = [1, 2, 2, 3, 4, 4];
let unique = removeDuplicate(a);
console.log(unique);
