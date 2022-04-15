// TODO: Recursion functions call themselves. 
const fibonacci = (position) => {
  // TODO: Fibonacci sequenes calls its own position number on 0, 1 positions.
  if (position < 2) {
    return position;
  }

  // TODO: Position number -1, run fibbonacci value, + position number -2, run fibboncci value,
  //then add them together.
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: This run the value for the fibonacci value in console log
console.log(fibonacci(15));
