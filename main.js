// 1-Even OR Odd
function even_or_odd(number){
        if(number%2 === 0){
            return "Even"
        }else{
            return "Odd"
        }
}

// 2-Sum Arrays
function sum (numbers) {
    let initValue = 0;
    for(let i=0;i<numbers.length;i++){
    initValue += numbers[i]
    }
    return initValue
};