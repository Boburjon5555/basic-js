const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
  //  eslint-disable-next-line no-unused-vars
function getSeason(date) {
  // Remove line below and write your code here
  if (!date) return 'Unable to determine the time of year!';

  // Check for invalid or fake date objects
  if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  try {
    // If trying to access date methods throws, it's a fake date
    date.getTime(); 
  } catch {
    throw new Error('Invalid date!');
  }
   
  const month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
}
module.exports = {
  getSeason
};
