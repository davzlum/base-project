export default function fibonacci(n: number) {
  if (n <= 1) return n;

  let prev1 = 0;
  let prev2 = 1;
  let number;

  for (let i = 2; i <= n; i++) {
    number = prev2 + prev1;
    prev1 = prev2;
    prev2 = number;
  }

  return number;
}
