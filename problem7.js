/*     **PROBLEM 7**

You are provided with a number "N", Find the Nth term of the series: 1 , 4, 9, 16, 25,

36, 49, 64, 81, .......

(Print "***Error***" if **N** = negative value and 0 if **N** = 0).

**Input Description:** ꢀ

An integer N is provided to you as the input.

**Output Description:** ꢀ

Find the Nth term in the provided series.

**Sample Input :**

18

**Sample Output :**

324 */

let N = prompt("Enter a number");
console.log("the series is: 1 , 4, 9, 16, 25,36, 49, 64, 81, .......");
console.log("you can find any turm of the series");
console.log(`Your number is = ${N}`);

if(N<=0){
  console.log("ERROR Try again with diffrent number.");
}
else{
  console.log(`${N}th Term of the series is: ${N *= N}`);
}
