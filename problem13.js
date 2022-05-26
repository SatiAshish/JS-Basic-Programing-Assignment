/*  **PROBLEM 13**

Ajay is given a series(In example).he gone through the series but unable to understand

it properly,he has hired you.Your task is to understand the series and print the series

2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series.

**Input Description:** ꢀ

You will be given a number ‘n’

**Output Description:** ꢀ

Print the nth number of series

**Sample Input :**

5

**Sample Output :** 30

7 */

//solution

let N = parseInt(prompt("Enter your number"));
console.log("series is = 2,6,12,20,30.......");
console.log("you can find any turm of the series");
console.log("Youe number is = " + N);;
console.log(`${N}th Term of the series is: ${N*(N+1)}`);