const fibonacci = [0]
fibonacci[1] = 1
fibonacci[2] = 1
for (let i = 3; i < 10; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    console.log(fibonacci)
}

let fiboCard = document.querySelector('#fibo-card')
let fiboRes = document.querySelector('#fibo-res')
fiboCard.addEventListener('click', function () {
    fiboRes.innerHTML = fibonacci.join(", ")
})



// const fibonacci = (n) =>
//   Array.from({ length: n }).reduce(
//     (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
//     []
//   );
  
//   console.log(fibonacci(10));





// ------------------------------------------------------------------------

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Function insert in the first position of an array
Array.prototype.insertFirstPosition = function(value){
    for(let i = this.length; i >= 0; i--){
        this[i] = this [i - 1]
    }
    this[0] = value
}
//  numbers.insertFirstPosition(-1)
//  console.log(numbers);

let arrayInpt = document.querySelector('#arrayInpt')
let arrayBtn = document.querySelector('#insert-array-btn')
let res = document.querySelector('#res')

arrayBtn.addEventListener('click', () => {
    let t = Number(arrayInpt.value)
    if (t == ""){
        alert('Type a Number')
    } else {
     numbers.insertFirstPosition(t)
     res.innerHTML = numbers.join(", ")
     arrayInpt.value = ''
     arrayInpt.focus()    
    }
})

//Same with method unshift
// arrayBtn.addEventListener('click', () => {
//     let t = arrayInpt.value
//     numbers.unshift(t)
//     res.innerHTML = numbers.join(", ")
// })

// let unsNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// unsNumber.unshift(-2)
// unsNumber.unshift(-4, -3)
// console.log(unsNumber);



//Remove Last index
//numbers.pop()

//Remove by index
let arrayRemoveBtn = document.querySelector('#pop-array-btn')
arrayRemoveBtn.addEventListener('click', () => {
  let val = Number(arrayInpt.value)
  let ind = numbers.indexOf(val)
  while(ind >= 0){
    numbers.splice(ind, 1)
    ind = numbers.indexOf(val)
  }
  res.innerHTML = numbers.join(', ')
  console.log(numbers);
})



