let miniMaxSum = (arr) => {
  let sum = arr.reduce((prev, curr) => prev + curr);

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let minSum = sum - max;
  let maxSum = sum - min;

  console.log(minSum, maxSum);
};

miniMaxSum([1, 2, 3, 4, 5]);
