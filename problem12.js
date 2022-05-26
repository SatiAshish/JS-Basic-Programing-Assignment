/*PROBLEM 12 :
Simi is learning about palindromic numbers. Her teacher gave him the task to count
all palindromic numbers present in that range.Simi has told you about this and want
your help. You design an algorithm in order to help simi.
Input Description: ꢀ
You will be given a number ‘n’
Output Description: ꢀ
Print the count of all palindromic numbers till ’n’(inclusive)
Sample Input :
5
Sample Output :
5     */

// solution : 

function countpalindromicNum(n){
    count=0;
    for(i=1;i<=n;i++){
        reverse =parseInt(i.toString().split('').reverse().join('')) 
        if(i==reverse){
            count++;
        }
    }
 return count;
}


let ans = countpalindromicNum(5);
console.log(ans);