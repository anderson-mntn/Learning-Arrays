const isEven = x => x % 2 === 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//  -- map() 
const myMap = numbers.map(isEven)
console.log(myMap);

// -- filter()
const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers);

// -- reduce() functions that receive the following parameters:
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

//Pag.96 - Métodos entries, keys e values de array --
//são três formas de obeter iteradores de um array

// -- .entries() 

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


//  --  .keys() 
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

//  --  .values()
//Devolve o @@iterator, que contém os valores do array.

const aValues = numbers.values()
console.log("Values:");
console.log(aValues.next()); //
console.log(aValues.next())
console.log(aValues.next())

// --  .from()
//Cria novo array com base em um já existente
let numbers2 = Array.from(numbers)

//We can add a function to filter the items that will me add
let evens = Array.from(numbers, x => (x % 2 == 0))
console.log("evens :", evens);

// --  Array.of
//Mesma coisa que Array.from, mas é possivel usar 
//espalhamento(...) nos argumentos.
let numbersCopy = Array.of(...numbers2)
console.log("Array.of :", numbersCopy);

//  -- .fill - podemos passar posição que fará a troca dali em diante
let faa = [1, 2, 3, 4, 5]
//faa.fill("a", 2) // (value, index)
//[1, 2, "a", "a", "a"]

//Podemos interromper o fill passando um segundo index
faa.fill(3, 1, 3) // (value, inicial index, last index)
//[1, 3, 3, 4, 5]

//Este metodo é bom  se quisermos criar um array e inicializar seus valores, ex:
let ones = Array(6).fill(1) //[ 1, 1, 1, 1, 1, 1 ]

// --  .copyWithin() - Copia sequencia de valores para uma posição no index
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
// -- sort() - sorts by lexicographically, we need a function
numbers3.sort()
console.log(numbers3);
//function
numbers3.sort((a,b)=> a - b)//Retorna um numero negativo 
//se b for maior que a, um numero positivo se a
//for maior que  b e 0 se forem iguais.
//outra forma de escrever o mesmo código:
 function compare (a, b){
    if (a < b) {
         return -1
    }
    if (a > b ){
        return 1
    }
    return 0
 }
console.log(numbers3.sort(compare))// passada dentro pq return
// console.log("Sort(): ", numbers3);

//Pag. 100 - Ordenação Personalizada
//podemos criar uma compareFunction para comparar os elementos
//de acordo com o que for necessário

const friends = [
    {name:'John', age: 30 },
    {name:'Ana' , age: 20 },
    {name:'Chris', age: 25}
]
function compareFriendsAge(a, b){
    if (a.age < b.age){
        return -1
    }
    if (a.age > b.age){
        return 1
    }
    return 0
}
console.log(friends.sort(compareFriendsAge));

//Making an array with age only
letarr = []
for (let k = 0; k < friends.length; k++){
    letarr.push(friends[k].age)
}
console.log("Age Array:", letarr);

// -- sort strings - localeCompare()
let names = ['john', 'ana', 'Ana', 'John']
console.log(names.sort());
console.log("localeCompare:", names.sort((a, b) => a.localeCompare(b)));

// -- Searching with: indexOf, lastIndexOf.

console.log(names.indexOf("a"))//print -1 if not included in array

//indexOf - retorna primeira ocorrência do valor especificado.
console.log(names.indexOf('Ana'));

//lastIndexOf - retorna a última ocorrência do valor especificado.
console.log(numbers.lastIndexOf(10));

// -- .find & findIndex.
//Recebem function callback, buscará um valor que satisfaça a
//condição presente na função de teste.


// -- .find() : devolve o primeiro VALOR do array que satisfaça a condição proposta
//Find the multiple of 13
function multipleOf13(element, index, array){
    return (element % 13 === 0)
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));
// -- .findIndex() : devolve o index

// -- .includes -> devolve TRUE caso um elemento seja encontrado no array, : FALSE.
console.log(numbers.includes(20)); //false
//é possivel passar um index de início a partir de qual queremos que pesquise, ex:
let numbers4 = [7, 6, 5, 4, 3, 2, 1]
console.log(numbers4.includes(3, 6)) //(index, value)

// -- .Converting array into string
// -- .toString(), .join()
console.log(numbers.toString());
console.log(numbers.join('-'));
// É util se precisarmos enviar o conteúdo do array para um servidor,
// ou se esse conteúdo tiver de ser condificado(conhecendo o separado, 
//a decodificação séra mais fácil)

//  -- Class TypedArray : foi criado para que pudessemos trabalhar com arrays
//contendo um único tipo de dedo. A sua sintaxe é let myArray = new TypedArray(length);
//em que TypedArray deve ser substituído por uma classe TypedArray, conforme a tabela:

// Int8Array - inteiro de 8 bits com sinal, usando complemento de dois
// Uint8Array - inteiro de 8 bits sem sinal
// Uint8ClampedArray - inteiro de 8 bits sem sinal
// Int16Array - inteiro de 16-bits com sinal, usando complemento de dois
// Uint16Array - inteiro de 16 bits sem sinal
// Int32Array - inteiro de 32-bits com sinal, usando complemento de dois
// Uint32Array - inteiro de 32 bits sem sinal
// Float32Array - Número de ponto flutuante padrão IEEE com 32 bits
// Float64Array - Número de ponto flutuante padrão IEEE com 64 bits

//Ex:
let length = 5;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for (let i=0; i<length; i++){
    int16[i] = i+1;
}
console.log(int16);

//Arrays tipados são ótimos para trabalhar com APIs WebGL, manipular bits e lidar com
//arquivos e imagens. Esses arrays funcionam exatamente como arrays simples; os mesmos
//métodos e funcionalidades que vimos nesse capítulo também podem ser usados

// Tutorial sobre o uso de arrays tipados para manipular dados binários
//e suas aplicações em projetos do mundo real: https://web.dev/webgl-typed-arrays/ 