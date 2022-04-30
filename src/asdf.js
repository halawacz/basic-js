function countCats(matrix) {
  let result = 0;
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (matrix[j][i] == "^^") {
        result++;
      }
    }
  }
  return result;
}
console.log(
  countCats([
    [0, 1, "^^"],
    [0, "^^", 2],
    ["^^", 1, 2],
  ])
);
