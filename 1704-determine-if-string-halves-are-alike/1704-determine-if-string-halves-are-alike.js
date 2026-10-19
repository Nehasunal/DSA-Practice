/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let i=0;
    let j=s.length-1;
    let icount=0;
    let jcount=0;
    while(i<j){
      if(s[i] === 'a' || s[i] === 'e' ||s[i] === 'i' ||s[i] === 'o' ||s[i] === 'u' || s[i] === 'A' || s[i] === 'E' ||s[i] === 'I' ||s[i] === 'O' ||s[i] === 'U')   {
        icount++
      } if(s[j] === 'a' || s[j] === 'e' ||s[j] === 'i' ||s[j] === 'o' ||s[j] === 'u' || s[j] === 'A' || s[j] === 'E' ||s[j] === 'I' ||s[j] === 'O' ||s[j] === 'U')   {
        jcount++
      }
      i++
      j-- 
    }
    return icount===jcount;
};