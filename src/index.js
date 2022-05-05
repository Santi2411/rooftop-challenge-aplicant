const main = require("./classes/Main");

const result = main.challengeRooftop([
  [-8, 5, -1, -2, -3, 1, 5],
  [0, -9, 0, 0, 3, 1, 5],
  [6, 5, 3, 8, 7, 1, 5],
  [5, 2, 0, 5, 4, 1, 5],
  [0, 0, 0, 0, 0, 1, 5],
  [0, 5, 6, 0, 0, 1, 5],
  [0, 0, 0, 0, 0, 1, 1],
]);

console.table(result);
