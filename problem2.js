/*
**PROBLEM 2**

You are given with a number "N", find its cube.

**Input Description:** ꢀ

A positive integer is provided as an input.

**Output Description:** ꢀ

Find the cube of the number.

**Sample Input :**

2

**Sample Output :**

8

1 
*/
// solution
  
let number = parseInt(prompt("Enter a number"));

if(number!=0){
  let cube = 1;
  cube=number*number*number;
  console.log(`The cube of ${number} is ${cube}`);
}
else{
  console.log(`The cube of ${number} is 0`);
}
