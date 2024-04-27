const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 ||
      typeof(num1) != "number" || typeof(num2) != "number") {
    return "ERROR";
  }

  start = Math.min(num1, num2);
  end = Math.max(num1, num2);
  sum = 0;

  for (i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
