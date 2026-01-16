/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
   
    let maxSum=0
    let map=new Map();
    // for(let i=0;i<fruits.length;i++){
    //         map.clear();
    //          let basket=2;
    //          let sum=0
    //     for(let j=i;j<fruits.length;j++){
    //         if(map.has(fruits[j])){
    //             map.set(fruits[j], (map.get(fruits[j])||0) +1)
    //             sum++
    //         }else if(basket === 0 && !map.has(fruits[j])){
    //             break;
    //         }else{
    //             map.set(fruits[j], (map.get(fruits[j])||0) +1)
    //             sum++
    //             basket--
    //         }

    //     }
    //     maxSum = Math.max(sum,maxSum)
    // }
    // return maxSum
    let i=0;
    for(let j=0;j<fruits.length;j++){
        
        //     while(map.get(fruits[i]!==1)){
        //       map.set(fruits[i], (map.get(fruits[i])||0) -1)
        //       i++  
        //     }
        // }

        map.set(fruits[j], (map.get(fruits[j])||0) +1)
        while(map.size>2){
            map.set(fruits[i], (map.get(fruits[i])||0) -1)
            if(map.get(fruits[i])===0){
                map.delete(fruits[i])
            }
            i++
        }
        console.log(i,j)
        maxSum = Math.max(maxSum, j-i+1)
    }
    return maxSum
    //[1,2,1,4,4,3,3]
};