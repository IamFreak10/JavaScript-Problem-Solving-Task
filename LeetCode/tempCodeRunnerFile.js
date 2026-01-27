function snail(matrix, r, c) {
  if (r * c == matrix.length) {
    const a = [];
    for (let i = 0; i < r; i++) {
      a.push([]);
    }

    for (let i = 0; i < matrix.length; i++) {
      let index = i % r;
      a[index].push(matrix[i]);
    }
    return a;
  } else {
    return [];
  }
}
