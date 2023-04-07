const person = [
    { name: 'John', age: '21' },
    { name: 'Mary', age: '22' },
    { name: 'Peter', age: '23' },
  ]
const getValues = (array,property)=>{
    let newArr =[];
    for(let i=0;i<array.length;i++){
      if(property==='age')
      newArr.push(array[i].age);
      else
      newArr.push(array[i].name)
    }
    return newArr;
}
console.log(getValues(person,'name'));

