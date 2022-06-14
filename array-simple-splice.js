let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let input = document.querySelector('#input')
let res = document.querySelector('#res')
let btn = document.querySelector('#btn')
console.log(arr)


btn.addEventListener('click', () => {
    let val = Number(input.value)
    let index = arr.indexOf(val)
    while(index >= 0){
        arr.splice(index, 1)
        index = arr.indexOf(val)
    }
    console.log(arr);
})


