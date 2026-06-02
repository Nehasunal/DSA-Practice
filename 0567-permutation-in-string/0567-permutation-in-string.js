/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map1 = new Map()
    let map2 = new Map()
    for(let i=0;i<s1.length;i++){
        map1.set(s1[i], (map1.get(s1[i])||0)+1)
        map2.set(s2[i], (map2.get(s2[i])||0)+1)
    }
    if(isEqual(map1,map2)){
        return true
    }
    for(let i=s1.length;i<s2.length;i++){
        let prev = i-s1.length;
        map2.set(s2[prev], map2.get(s2[prev])-1)
        if(map2.get(s2[prev])=== 0){
            map2.delete(s2[prev])
        }
        map2.set(s2[i], (map2.get(s2[i])||0)+1)
        if(isEqual(map1,map2)){
         return true
        }
    }
    return false

}

const isEqual = (m1,m2)=>{
    if (m1.size !== m2.size) return false;
  for(let [key,val] of m1){
    if(!(m2.has(key)) || (m2.get(key)!== m1.get(key))){
       return false
    }
  }
  return true
}