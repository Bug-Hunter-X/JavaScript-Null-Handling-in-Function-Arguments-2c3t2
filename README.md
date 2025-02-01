# JavaScript Null Handling in Function Arguments

This repository demonstrates a common error in JavaScript when dealing with null or undefined function arguments and provides a solution.

The `bug.js` file shows a function that only partially handles null values; if either argument is null, it returns 0.  However, this is not robust enough to handle scenarios where only one of the arguments is null or undefined.

The `bugSolution.js` file offers an improved solution that more completely handles null and undefined inputs, ensuring the function behaves as intended under various conditions.