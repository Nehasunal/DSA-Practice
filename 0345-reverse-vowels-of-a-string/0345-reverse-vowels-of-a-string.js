/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left =0;
    let right = s.length-1
    let arr = s.split('')
    while (left < right){
        if(isVowel(arr[left]) && isVowel(arr[right])){
            [arr[left], arr[right]] = [arr[right], arr[left]] 
            left++
            right--
        } else if(!(isVowel(arr[right]))){
          right --  
        } else if(!(isVowel(arr[left]))){
          left ++  
        }
    }
    function isVowel(val){
        val=val.toLowerCase()
       return (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u' )
    }
    return arr.join('');
};