let array = [4,5,3,5,13,12];

const calculateAverage = (array)=>{
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum/array.length;
}

console.log(calculateAverage(array));