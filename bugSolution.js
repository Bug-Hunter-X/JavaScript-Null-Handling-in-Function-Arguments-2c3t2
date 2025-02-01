function foo(a, b) {
  // Handle null or undefined values for a and b using optional chaining
  a = a ?? 0; 
  b = b ?? 0;
  return a + b; 
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 10)); // Output: 10
console.log(foo(null, undefined)); // Output: 0