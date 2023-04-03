const array = ['eat','sleep','code','repeat'];

const capitalizeWords = (array)=>{
    let newArr = [];
    for(let i=0;i<array.length;i++){
        newArr.push(array[i].toUpperCase());
    }
    return newArr;
}

console.log(capitalizeWords(array));