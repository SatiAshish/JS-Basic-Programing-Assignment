/*PROBLEM 15 : 
You are given a postfix expression. Evaluate the given expression and print the result.
Input Description: ꢀ
The first line of the input is a string N, containing operators and numbers seperated by
the single space which forms a postfix expression.
Output Description: ꢀ
Evaluate the post expression and print the result.
Sample Input :
5 3 1 * + 9 -
Sample Output :
-1 */

//solution

function evaluatePostfix(expression) {
    let stack = [];
    let len = expression.length
    for (let i = 0; i < len; i++) {
        let c = expression[i];
      
        if (!isNaN(parseInt(c))) {
            stack.push(Number(c))
        }
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case "+":
                    stack.push(val2 + val1);
                    break;
                case "-":
                    stack.push(val2 - val1)
                    break;
                case "*":
                    stack.push(val2 * val1);
                    break;
                case "/":
                    stack.push(val2 / val1)
                    break;
            }
        }
    }
    return stack.pop()
}

let expression = "531*+9-"
let ans = evaluatePostfix(expression);
console.log(ans);