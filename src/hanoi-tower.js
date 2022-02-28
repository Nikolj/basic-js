const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1; // min turns - 2^n − 1, n — count(discNumber)
  const seconds = Math.floor(turns / (turnsSpeed / 3600)); //3600sec = 1h
  return {turns, seconds};
}

module.exports = {
  calculateHanoi
};