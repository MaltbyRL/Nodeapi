console.log("sum!", module.exports);

module.exports = {
  sum: function sum(x, y) {
    return parseInt(x) + parseInt(y);
  },
  difference: function difference(x, y) {
    return parseInt(x) - parseInt(y);
  },
  square: function square(x) {
    return parseInt(x) * parseInt(x);
  },
  sqrt: function sqrt(x) {
    return Math.sqrt(x);
  },
  multiply: function multiply(x, y) {
    return parseInt(x) * parseInt(y);
  },
  divide: function divide(x, y) {
    return parseInt(x) / parseInt(y);
  }
}
