// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
  // const fib = new Array(n).fill('0');
  // let current = 1;
  // return fib.reduce((prev, cur) => {
  //   const lastNum = prev[prev.length - 1];
  //   prev.push(current);
  //   current = current + lastNum;
  //   return prev;
  // }, [1])[fib.length - 1];



  // const fib = [0, 1];
  // for (let i = 2; i <= n; i++){
  //   let a = fib[i - 1];
  //   let b = fib[i - 2];
  //   fib.push(a + b)
  // }
  // return fib[fib.length - 1];

//   if (n < 2){
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2)
// }

// module.exports = fib;

function memoize(fn){
  const cache = {};
  return function(...args){
    if (cache[args]){
      return cache[args];
    }
    const result = fn.apply(null, args);

    cache[args] = result;

    return result;
  }
};

function fib(n){
  if (n < 2){
    return n;
  }
  
  return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib);

module.exports = fib;

