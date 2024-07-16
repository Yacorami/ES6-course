let calculateNumber = () =>  {
    let number = document.querySelector("#numberf").value

    document.querySelector("#numberf").value = ''
    document.querySelector("#resultn").value = number
}



// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) //  => false
// console.log(isNaN('11a'))// false 
// console.log(typeof 'haa' * 3) // NaN
// console.log(isFinite(232323.4)) // true
// console.log(isFinite(NaN)) // false

// BigInt
let bigNumb = 999999999999999999999999999999999n
// console.log(Number.isSafeInteger(bigNumb)) // false
let secondBigNumb = BigInt(999999999999999999999999999999999999)
//console.log(typeof bigNumb, typeof secondBigNumb)