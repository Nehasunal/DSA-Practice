/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack = []
    let stack2 = []
    for(let i=0;i<s.length;i++){
        if(s[i] === '#') {
            stack.pop()
            continue;
        }
        stack.push(s[i])
    }
    for(let i=0;i<t.length;i++){
        if(t[i] === '#') {
            stack2.pop()
            continue;
        }
        stack2.push(t[i])
    }

    if(stack.length !== stack2.length) return false
    console.log(stack, stack2)
    for(let i=0;i<stack.length;i++){
        if(stack[i] !== stack2[i]){
            return false
        }
    }
    return true
};