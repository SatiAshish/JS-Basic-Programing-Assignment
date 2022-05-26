/*PROBLEM 14 :
You are given with an array. Your task is to print the left rotated array after k
opearations. Time:O(n) Extra Space: O(1)
Input Description: ꢀ
First line contains two number ‘n’ and ‘k’.Next line contains n space separated
numbers.
Output Description: ꢀ
Print the array as mentioned.
Sample Input :
7 3
1 2 3 4 5 6 7
Sample Output :
4 5 6 7 1 2 3
 */

// solution:

function leftRotateArray(arr, k) {
   let MyArray = [];
   for (let i = 0; i < k; i++) {
      MyArray.push(arr.shift());
   }
   arr = arr.concat(MyArray);
   return arr;
}


arr = [1, 2, 3, 4, 5, 6, 7]
let ans = leftRotateArray(arr, 3);
console.log(ans);