/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let smap = new Map()
    let tmap = new Map()
     if(s.length!== t.length){
        return false
     }
    for(let i=0;i<s.length;i++){
        let count = 0
       if(smap.has(s[i])){
          count = smap.get(s[i])
       }
         count++
          smap.set(s[i], count)
    }

    for(let j=0;j< t.length;j++){
       if(!smap.has(t[j])){

       return false
       }
          count = smap.get(t[j])
          count--;
          smap.set(t[j], count)
          if(count === 0){
            smap.delete(t[j])
          }
       
    }
    // for(let [key, value] of smap){
    //     if(!tmap.has(key)){
    //         return false
    //     }
    //     if(value !== tmap.get(key)){
    //         return false;
    //     }
    // }
    return true
};