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
       let count = 0
       if(tmap.has(t[j])){
          count = tmap.get(t[j])
       }
         count++
          tmap.set(t[j], count)
    }
    console.log(smap, tmap)
    for(let [key, value] of smap){
        console.log(key,value)
        if(!tmap.has(key)){
            return false
        }
        if(value !== tmap.get(key)){
            return false;
        }
    }
    return true
};