const diagonalPrincipal = (function () {
  let matrix = [
    [-8.5, 5, -1, -2, -3, 1, 5],
    [0, -7.9, 0, 0, 3, 1, 5],
    [6, 5, 3, 8, 7, 1, 5],
    [5, 2, 0, 1.5, 4, 1, 5],
    [0, 0, 0, 0, -8.4, 1, 5],
    [0, 5, 6, 0, 0, 1, 5],
    [0, 0, 0, 0, 0, 1, 0],
  ];

  let mainDiagonal = getMainDiagonal(matrix);
  let orderAscMainDiagonal = mainDiagonal.sort(sortNumberAsc);

  let { negativeNumbers, positiveNumbers, zeros } =
    getPositivesNegativesAndZeros(orderAscMainDiagonal);

  let mainDiagonalOrderer = [...positiveNumbers, ...zeros, ...negativeNumbers];

  let newMatrix = setMainDiagonal(matrix, mainDiagonalOrderer);

 replaceNonMainDiagonalElements(newMatrix);

  console.table(newMatrix);
})();

function getPositivesNegativesAndZeros(array) {
  let negativeNumbers = [];
  let positiveNumbers = [];
  let zeros = [];
  array.forEach((element) => {
    if (element < 0) {
      negativeNumbers.push(element);
    } else if (element > 0) {
      positiveNumbers.push(element);
    } else {
      zeros.push(element);
    }
  });
  return { negativeNumbers, positiveNumbers, zeros };
}

function replaceNonMainDiagonalElements(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i !== j) matrix[i][j] = "**";
    }
  }
}

function setMainDiagonal(matrix, mainDiagonal) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) matrix[i][j] = mainDiagonal[i];
    }
  }
  return matrix;
}

function sortNumberAsc(a, b) {
  return a - b;
}

function getMainDiagonal(matrix) {
  let diagonal = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) diagonal.push(matrix[i][j]);
    }
  }
  return diagonal;
}
