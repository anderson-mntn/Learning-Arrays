//Teamperature of each hour of a day
//Bidimensional
 let averageTemp = []
 averageTemp[0] = [72, 75 ,79 , 79, 81, 81]
 averageTemp[1] = [81, 79, 75, 75, 73 ,72]


function printMatrix(myMatrix){
    for(let i = 0; i < myMatrix.length; i++){
        for(let j = 0; j < myMatrix[i].length; j++){
            console.log(myMatrix[i][j]);
            document.write(myMatrix[i][j])
        }
    }
}


let ave = document.querySelector('#ave')
ave.addEventListener('click', () => { //Prevent from run onload
    printMatrix(averageTemp)
})
console.table(averageTemp);

//Pag.89 - Multidimensional 
const matrix3x3x3 = []
for (let i = 0; i <  3; i++){
    matrix3x3x3[i] = [] //we must call each array
    for(let j = 0; j < 0; j++){
        matrix3x3x3[i][j] = []
        for (let z = 0; z < 0; z++){
            matrix3x3x3[i][j][z] = []
        }
    }
}   
//precisamos percorrer cada dimensão afim de acessar a celula

//Ref for array methods - Pag. 91 metodos essencias

const posNum = [1, 2, 3]
const negNum = [-1, -2, -3]
let numbers = posNum.concat(0, negNum)
numbers.sort() - 
// numbers.reverse() - 
console.log(numbers);

//Checking if value is even - print if number is even
function isEven (x) {
    for(let i = 0; i < x.length; i++){
        x[i] % 2 === 0 ? evenNums.push(x[i]) : false
    }
}

let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let evenNums = []
isEven(arrNumbers);
console.log(evenNums);

//Returning true and false -----------------------------------

//every() itera pelos elementos até que a função retorne false
//some() oposto de every, itera atpe que returne true 
//forEach() - executa a função para cada elemento do array
evenNums.forEach(x => console.log(x % 2 === 0 )) 

// map() and filter() - devolvem outro array como resultado.

