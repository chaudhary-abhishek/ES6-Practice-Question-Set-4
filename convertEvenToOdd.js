var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const convertEvenToOdd = (array)=>{
    let newArr = [];
    for(let i=0;i<array.length;i++){
    if(array[i]%2===0){
        array[i] = array[i]+1;
        newArr.push(array[i]);
    }
    else
    newArr.push(array[i]);
    
}
return newArr;  
}

console.log(convertEvenToOdd(numArr));