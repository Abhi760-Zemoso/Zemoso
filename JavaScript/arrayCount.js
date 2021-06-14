
function compare(arr) {
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count+=1
            }
        }
        if (count>0) {
            console.log("Match count for "+arr[i]+" is "+count) 
        }
        count=0 
    }
}