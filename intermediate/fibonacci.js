/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here
function fibonacci(number){
    var result = [0,1]
    for( i = 2 ; i < number ; i++ ){
        result[i] = result[i-2] + result [i-1];
    }
    console.log (result)
    return result;
}
module.exports = fibonacci;
