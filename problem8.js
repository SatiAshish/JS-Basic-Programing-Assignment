/*   **PROBLEM 8**

\- Let "A" be a string. Remove all the whitespaces and find it's length.

(Print "***Error***" if **N** = negative value and 0 if **N** = 0).

**Input Description:** ꢀ

A string is provide as an input

**Output Description:** ꢀ

Remove all the whitespaces and then print the length of the remaining string.

**Sample Input :**

Lorem Ipsum

**Sample Output :**

10

4 */

//solution

let str = prompt("Enter a string");

let strlength = str.split(" ").join("").length;

console.log(`your string  is =  ${str}`);
console.log(`String length without space =  ${strlength}`);