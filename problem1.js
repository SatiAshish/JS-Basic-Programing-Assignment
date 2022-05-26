/*   
**PROBLEM 1**

You are provided with a number, "**N**". Find its factorial.

**Input Description:** ꢀ

A positive integer is provided as an input.

**Output Description:** ꢀ

Print the factorial of the integer.

**Sample Input :**

5

**Sample Output :**

120
*/

//Solution

let number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}