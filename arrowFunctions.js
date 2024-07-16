const sum = function(a,b) {
    return a + b;
}


const mult = (a,b) => 
{
        return   a * b
}


const cube = (a = 3) => a ** 3
const somme = (a = 1, b = 3) => a + b
const trisum = (a, b, c = 3) => a + b + c 
const susptrisum = (...nums) => {
    let sm = 0;
    nums.forEach(
        (e) =>  {
            sm = sm + e
        }
    )
    return sm;
}

const susptrisumold = (...nums) => {
    let sm = 0;
    for (let i = 0; i < nums.length; i++) {
        sm += nums[i]
    }
    return sm;
}

//document.write(JSON.stringify(susptrisumold(99, 1))) 