// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// width 2n - 1

function pyramid(n) {
  new Array(n).fill('0').map((item, index) => {
    let level = '';
    const row = index + 1;
    const notPoundStart = n - row;
    const notPoundEnd = (2 * n - 1) - (n - row);

    for (let column = 1; column <= (2 * n - 1); column++ ){
      if (column <= notPoundStart  || column > notPoundEnd ){
        level += ' ';
      } else {
        level += '#';
      }
    }
    console.log(level);
  });
}

module.exports = pyramid;
