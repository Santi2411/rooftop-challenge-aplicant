class Main {
  challengeRooftop(pMatrix) {
    const Matrix = require("./Matrix");
    const utils = require("./Utils");

    var matrix = new Matrix();

    matrix.setMatrix(pMatrix);

    const mainDiagonal = matrix.getMainDiagonal();

    var { negativeNumbers, positiveNumbers, zeros } =
      utils.getArrayPositivesNegativesAndZeros(mainDiagonal);

    negativeNumbers.sort(utils.sortNumberAsc);
    positiveNumbers.sort(utils.sortNumberAsc);

    const mainDiagonalOrderer = [
      ...positiveNumbers,
      ...zeros,
      ...negativeNumbers,
    ];

    matrix.setMainDiagonal(mainDiagonalOrderer);

    matrix.replaceNonMainDiagonalElements();

    return matrix.getMatrix();
  }
}

module.exports = new Main();
