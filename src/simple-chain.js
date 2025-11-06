const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    // Remove line below and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // Remove line below and write your code here
    if (value === undefined) {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${String(value)} )`);
    }
    return this;
  },
  removeLink(position) {
    // Remove line below and write your code here
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // Remove line below and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // Remove line below and write your code here
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
