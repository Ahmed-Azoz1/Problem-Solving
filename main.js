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


// 3-Sum without highest and lowest number
function sumArray(array) {
    if(array === null) return 0;
    return array.sort((min,max)=> min - max).slice(1,-1).reduce((acc,curr)=>acc + curr,0)
}
