let array = [1,2,43,53,55,67,33,57,97,43];

const getMaxElement = (array)=>{
    let largestElement = array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]>=largestElement)
        largestElement = array[i];
    }
    return largestElement;
}

console.log(getMaxElement(array));