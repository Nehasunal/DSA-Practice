/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let map = new Map()
    let str = ''
    for(let i=0;i<10;i++){
        str = str + s[i]
    }
    map.set(str, 1)
    for(let i=10;i<s.length;i++){
        str = str.slice(1) + s[i]
        map.set(str, (map.get(str)||0)+1)
    }
    let res = []
    for(let [key,value] of map){
        if(value > 1){
          res.push(key)
        }
    }
    return res    
};