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
//sum ages of obj
let sum = obj.reduce(function(accumulator, curValue){
    return accumulator + curValue.age
}, initialValue);
console.log(sum);

//Pag.95 - Junto com esses métodos a API de array também prove uma forma de iterar pelo array
//com o objeto Iterator, que pode ser objetivo da instância do array
//e usado no laço for...of

//Método of - cria novo array a partir dos argumentos passados para o método

//Iterando com o laço for...of
//print names from obj
for(obj.name of obj){
    console.log(obj.name);
}

for(const n of numbers){
    console.log(n % 2 === 0 ? 'even' : 'odd');
}

//Using the object @@iterator
//the class array got the property @@iterator, to use it we need acess the
//property Symbol.iterator of the array:

let iterator = numbers[Symbol.iterator]();
console.log(iterator);
console.log("This is a array iterator");
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
//o código iterator.next() retorna undefined quando não houver mais
//valores para iterar

//Pag.96 - Métodos entries, keys e values de array --------------------------
//são três formas de obeter iteradores de um array

// .entries() 

console.log("Entries:");
let aEntries = numbers.entries() // gets a iterator key/value
console.log(aEntries.next().value); //position 0, value 1
console.log(aEntries.next().value); //position 1, value 2
console.log(aEntries.next().value); //position 2, value 3

//short ver:
aEntries = numbers.entries()
for(const n of aEntries){
    console.log(n);
}
//Ser capaz de obter pares de key/value será muito conveniente quando
//estivermos trabalhando com conjunto, dicionários e mapas de hash(hash maps)


//  .keys() 
//Devolve o iterator, que contem as chaves do array. ex:
console.log("Keys:");
const aKeys = numbers.keys() // gets a iterator of keys
console.log(aKeys.next()); //{ value: 0(valor diz respeito a keys), done: false (diz respeito se é o ultimo item)}
console.log(aKeys.next()); //{ value: 1, done: false }
console.log(aKeys.next()); // "
//return undefined when value e done == true

for (const n of aKeys){
 console.log(aKeys.next());
}

// .values()
//Devolve o @@iterator, que contém os valores do array.

const aValues = numbers.values()
console.log("Values:");
console.log(aValues.next()); //
console.log(aValues.next())
console.log(aValues.next())

// .from()
//Cria novo array com base em um já existente
let numbers2 = Array.from(numbers)

//We can add a function to filter the items that will me add
let evens = Array.from(numbers, x => (x % 2 == 0))
console.log("evens :", evens);

// Array.of
//Mesma coisa que Array.from, mas é possivel usar 
//espalhamento(...) nos argumentos.
let numbersCopy = Array.of(...numbers2)
console.log("Array.of :", numbersCopy);

// .fill - podemos passar posição que fará a troca dali em diante
let faa = [1, 2, 3, 4, 5]
//faa.fill("a", 2) // (value, index)
//[1, 2, "a", "a", "a"]

//Podemos interromper o fill passando um segundo index
faa.fill(3, 1, 3) // (value, inicial index, last index)
//[1, 3, 3, 4, 5]

//Este metodo é bom  se quisermos criar um array e inicializar seus valores, ex:
let ones = Array(6).fill(1) //[ 1, 1, 1, 1, 1, 1 ]

// .copyWithin() - Copia sequencia de valores para uma posição no index
let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3) //[ 4, 5, 6, 4, 5, 6 ]

copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(1, 3, 5) // posição 5 não inclusivo
console.log("copyWithin()", copyArray);

// Pag. 99 - Ordenando Elementos
let numbers3 = Array.from(numbers)

numbers3.reverse()
console.log("Reverse():", numbers3);


//[ 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, ]
//sort() - sorts by lexicographically, we need a function
numbers3.sort()
console.log(numbers3);
//function
numbers3.sort((a,b)=> a - b)//Retorna um numero negativo 
//se b for maior que a, um numero positivo se a
//for maior que  b e 0 se forem iguais.
console.log("Sort(): ", numbers3);
