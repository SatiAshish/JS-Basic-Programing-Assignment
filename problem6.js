/*     **PROBLEM 6**

Write a code to get an integer N and print the sum of values from 1 to N.

**Input Description:** ꢀ

A single line contains an integer N.

**Output Description:** ꢀ

Print the sum of values from 1 to N.

**Sample Input :**

10

**Sample Output :** 55

3 */

//solution

let number = prompt("Enter a positive intiger");
let sum = 0;
for(let i = 0;i<=number; i++){
  sum = sum + i;
}
console.log(sum);