class Utils {
  getArrayPositivesNegativesAndZeros(array) {
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

  sortNumberAsc(a, b) {
    return a - b;
  }
};

module.exports = new Utils();
