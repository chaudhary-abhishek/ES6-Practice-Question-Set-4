var words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community'];
const filterWord = (array)=>{
    let newArr = [];
    for(let i=0;i<array.length;i++)
    {
        if(array[i].length>5){
            newArr.push(array[i]);
        }
    }
    return newArr;
}

console.log(filterWord(words));
