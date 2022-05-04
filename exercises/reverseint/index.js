// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const strReversed = String(n).split('').reverse().join('');
    // return strReversed[strReversed.length -1] === '-' ? (parseInt(strReversed) * -1) : parseInt(strReversed);
    return parseInt(strReversed) * Math.sign(n);
}

module.exports = reverseInt;
