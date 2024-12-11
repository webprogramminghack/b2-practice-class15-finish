const num1 = 'hello';
const num2 = 2;

// nothing happens, the error doesn't show up
// that's because we haven't set up the configuration
// npx tsc --init
function sum(a, b) {
  return a + b;
}

function sum(a: number, b: number) {
  return a + b;
}

sum(num1, num2);

// npx tsc
