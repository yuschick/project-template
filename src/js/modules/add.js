module.exports = {
  // The add method accepts two arguments, num1 & num2, assumed to be numbers
  // it then returns the total of the two as a Number
  add(num1, ...nums) {
    if (!num1 || !nums.length) return 'Required argument(s) missing';
    return Number(nums.reduce((a, b) => parseInt(a) + parseInt(b), parseInt(num1)));
  }
}
