// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    new Array(n).fill('0').map((step, i) => {
        const count = i + 1;
        let curStep = '';
        for(let j = 1; j <= n; j++){
            if (j <= count){
                curStep += '#';
            } else {
                curStep += ' ';
            }
        }
        console.log(curStep); 
    })
}

module.exports = steps;
