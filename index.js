function Recursion(value) {
  if (value === 1) return 1;
  return value * Recursion(value - 1);
}

console.log(Recursion(4));
