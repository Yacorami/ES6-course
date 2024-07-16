/*
document.querySelector("#calculate").addEventListener('click', function()  {
    let Number = document.querySelector("#number").value
})*/

let calculateMath = () =>  {
    let number = document.querySelector("#number").value
    // number = Math.trunc(number)
    // number = Math.sign(number)
    // number = Math.cbrt(number) // cube root
    // number = Math.log(number)
    // number = Math.log10(number)
    // number = Math.log2(number)
    // number = Math.sign(number)

    document.querySelector("#number").value = ''
    document.querySelector("#result").value = number
}