// Your ES6 code here
const sumOfAges = (arrayOfObject)=>{
    let sum=0;
    for(let i=0;i<arrayOfObject.length;i++){
       sum = sum+arrayOfObject[i].age;
    }
    return sum;
}

var array = [
    {
      name: 'Jay',
      age: 60,
    },
    {
      name: 'Gloria',
      age: 36,
    },
    {
      name: 'Manny',
      age: 16,
    },
    {
      name: 'Joe',
      age: 9,
    },
  ]
  
  console.log(sumOfAges(array)) // 121