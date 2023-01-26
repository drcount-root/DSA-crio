const cache = {};

const fibonacciCalc = function (n) {
  if (n < 2) {
    return n;
  }

  return fibonacciCalc(n - 1) + fibonacciCalc(n - 2);
};

const memoizedFibonacci = function (num) {
  if (num in cache) {
    console.log("Cached");
    return cache[num];
  } else {
    console.log("New");
    cache[num] = fibonacciCalc(num);
    return cache[num];
  }
};

console.log(memoizedFibonacci(5)); // New 5
console.log(memoizedFibonacci(8)); // New 21
console.log(memoizedFibonacci(4)); // New 3
console.log(memoizedFibonacci(5)); // Cached 5
console.log(memoizedFibonacci(4)); // Cached 3
