module.exports = class Matrix {
  constructor() {
    this.rows = 0;
    this.columns = 0;
    this.matrix = [];
  }

  getMatrix() {
    return this.matrix;
  }

  setMatrix(matrix) {
    if (!this.checkIfValid(matrix)) throw new Error("Invalid matrix");
    if (this.checkIfEmpty(matrix)) throw new Error("Empty matrix");
    this.matrix = matrix;
    this.rows = this.matrix.length;
    this.columns = this.matrix[0].length;
  }

  getMainDiagonal() {
    let diagonal = [];
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (i === j) diagonal.push(this.matrix[i][j]);
      }
    }
    return diagonal;
  }

  setMainDiagonal(mainDiagonal) {
    if (!this.checkIfMainDiagonalIsValid(mainDiagonal))
      throw new Error("Invalid main diagonal");
    if (this.checkIfMainDiagonalIsEmpty(mainDiagonal))
      throw new Error("Empty main diagonal");
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (i === j) this.matrix[i][j] = mainDiagonal[i];
      }
    }
  }

  checkIfMainDiagonalIsEmpty(mainDiagonal) {
    return mainDiagonal.length === 0;
  }

  checkIfMainDiagonalIsValid(mainDiagonal) {
    return mainDiagonal.length === this.columns;
  }

  checkIfValid(matrix) {
    return matrix.every((row) => {
      return row.length === matrix[0].length;
    });
  }

  checkIfEmpty(matrix) {
    return matrix.every((row) => {
      return row.length === 0;
    });
  }

  replaceNonMainDiagonalElements() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (i !== j) this.matrix[i][j] = "**";
      }
    }
  }
};
