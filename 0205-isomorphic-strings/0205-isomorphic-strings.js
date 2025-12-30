/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    let map=new Map()
    // {
    //     b: b,
    //     a: a,
    //     d: b,
    //     c: a
    // }\
    //     
    //     
    // for(let i=0;i<s.length;i++){
    //   if(map.has(s[i])){
    //      if(map.get(s[i]) !== t[i]){
    //         return false
    //      }
    //   } else if(map.has(t[i])){
    //     if(map.get(t[i]) !== s[i]){
    //         return false
    //      }
    //   } else{

    //     map.set(s[i], t[i])
    //   }
    // }
    for(let i=0;i<s.length;i++){
      if(map.has(s[i])){
         if(map.get(s[i]) !== t[i]){
            return false
         }
      } else{       
        const valueExists = [...map.values()].includes(t[i])
        if(valueExists){
            return false
        }
      }
      map.set(s[i], t[i])
    }
    return true
};