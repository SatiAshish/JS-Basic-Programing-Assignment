/*   **PROBLEM 3**

The area of an equilateral triangle is ¼(√3a2) where "**a**" represents a side of the

triangle. You are provided with the side "**a**". Find the area of the equilateral triangle.

**Input Description:** ꢀ

The side of an equilateral triangle is provided as the input.

**Output Description:** ꢀ

Find the area of the equilateral triangle and print the answer up to 2 decimal places

after rounding off.

**Sample Input :**

20

**Sample Output :**

173.21
*/

  //solution

let a = parseInt(prompt("Enter a side of tringle"));

if(a>0){
  let area = 1/4*(1.73205081*a*a);
  console.log(`The area of your Tringle is ${area}`);
}
else{
    console.log("Please enter a velid number");
}