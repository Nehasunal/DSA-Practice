/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let j=0;
    let i=0;
    let k=0;
    while(i < chars.length && j<chars.length){
        let count= 0;
        while(chars[i] === chars[j]){
           count++
           j++
        }
        chars[k] = chars[i]
        k++
        if(count>1){
            let str = count.toString();

            for(let digit of str){
                chars[k] = digit;
                k++;
            }
        }
        i=j

    }
    return k
};