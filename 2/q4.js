// Generate Fibonacci Sequence up to 'n'

function fibonacciSequence(n) {
  const sequence = [0, 1];
  while (sequence[sequence.length - 1] + sequence[sequence.length - 2] < n) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }
  return sequence;
}

console.log(fibonacciSequence(20));
