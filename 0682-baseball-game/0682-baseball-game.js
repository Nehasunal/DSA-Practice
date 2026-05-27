/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = []
    for(let i=0;i<operations.length;i++){
        let ops = operations[i]
        if(ops === '+'){
           let v1 = stack[stack.length-1]
           let v2 = stack[stack.length-2]
           stack.push(v1+v2)
        } else if(ops === 'D'){
           let val = stack[stack.length-1]
           stack.push(2*val)
        } else if(ops === 'C'){
            stack.pop()
        } else {
            stack.push(Number(ops))
        }        
    }
    let sum = stack.reduce((acc,curr)=>{
       return acc+curr 
    },0)
    return sum
};