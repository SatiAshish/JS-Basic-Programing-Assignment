/*    **PROBLEM 4**

You will be provided with a number. Print the number of days in the month

corresponding to that number.

Note: In case the input is February, print 28 days. If the Input is not in valid range

print "Error".

**Input Description:** ꢀ

Input n -> month number

**Output Description:** ꢀ

Find the days in the month corresponding to the input number. Print Error if the input

is not in a valid range.

**Sample Input :**

8

**Sample Output :**

31

2 */

//solution


let month = prompt("enter number of month ");

if(month==2){
  console.log(`number of days in month ${month} is 28.`);
}
else if (month==1||month==3||month==5||month==7||month==8||month==10||month==12){
  console.log(`number of days in month ${month} is 31.`);
}
else if(month==4||month==6||month==9||month==11){
  console.log(`number of days in month ${month} is 30.`);
}
else {
  console.log("error! Please enter a valid month");
}