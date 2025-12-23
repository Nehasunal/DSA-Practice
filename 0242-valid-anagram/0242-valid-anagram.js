/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let smap = new Map()
     if(s.length!== t.length){
        return false
     }
    for(let i=0;i<s.length;i++){
        smap.set(s[i], (smap.get(s[i]) || 0)+1)
    }

    for(let j=0;j< t.length;j++){
        if(!smap.has(t[j])){

                return false
        } 
          smap.set(t[j], smap.get(t[j]) - 1)
          if(smap.get(t[j]) === 0){
            smap.delete(t[j])
          }
       
    }
    return true
};