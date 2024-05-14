const fibonacci = function(position) {
  if (position < 0) { 
    return "OOPS"; 
  } else if (position == 1) {
    return 1;
  }

  let last = 0, next = 1, fib = 0;
  for (let i = 0; i < position - 1; i++) {
    if (fib != 0) { last = next; next = fib; }
    fib = last + next;
    console.log(fib);
  }

  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
