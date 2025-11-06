const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // Remove line below and write your code here
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [];
  const commands = {
    doubleNext: '--double-next',
    doublePrev: '--double-prev',
    discardNext: '--discard-next',
    discardPrev: '--discard-prev',
  };

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current === commands.discardNext) {
      i++; 
    } else if (current === commands.discardPrev) {
      if (i > 0 && arr[i - 2] !== commands.discardNext) {
        result.pop();
      }
    } else if (current === commands.doubleNext) {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }
    } else if (current === commands.doublePrev) {
      if (i > 0 && arr[i - 2] !== commands.discardNext) {
        result.push(arr[i - 1]);
      }
    } else {
      result.push(current);
    }
  }

  return result;
}

module.exports = {
  transform
};
