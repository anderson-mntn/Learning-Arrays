const isEven = x => x % 2 === 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//map() 
const myMap = numbers.map(isEven)
console.log(myMap);

//filter()
const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers);

//reduce() functions that receive the following parameters:
//proviousValue, currentValue, index and array are optinals.
//Podemos usar para devolver um valor que será somado a um acumulador
//o qual será devolvido depois que o método parar de executar.

//Useful for summing all array items:
numbers.reduce((previous, current) => previous + current)

//Map, Filter and Reduce the base of functional programing js.

//Force pass through all elements
let initialValue = 0
let obj = [
    
    {name: 'asd', age:20 },
    {name: 'qwe', age:20 },
    {name: 'zxc', age:20 }
    
]
let sum = obj.reduce(function(accumulator, curValue){
    return accumulator + curValue.age
}, initialValue);

console.log(sum);