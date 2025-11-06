const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    // Remove line below and write your code here
    if (!message || !key) throw new Error('Incorrect arguments!');

    const msg = message.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < msg.length; i++) {
      const char = msg[i];
      if (char >= 'A' && char <= 'Z') {
        const mCode = char.charCodeAt(0) - 65;
        const kCode = k[keyIndex % k.length].charCodeAt(0) - 65;
        const encCode = (mCode + kCode) % 26;
        result += String.fromCharCode(encCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encrypted, key) {
    // Remove line below and write your code here
    if (!encrypted || !key) throw new Error('Incorrect arguments!');

    const msg = encrypted.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < msg.length; i++) {
      const char = msg[i];
      if (char >= 'A' && char <= 'Z') {
        const eCode = char.charCodeAt(0) - 65;
        const kCode = k[keyIndex % k.length].charCodeAt(0) - 65;
        const decCode = (eCode - kCode + 26) % 26;
        result += String.fromCharCode(decCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
