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
    if(!array || array.length < 0) return 0;
    return array.sort((min,max)=> min - max).slice(1,-1).reduce((acc,curr)=>acc + curr,0);
}


// 4-String repeat
function repeatStr (n, s) {
    let string = '';
    for(let i=0;i<n;i++){
        string += s;
    }
    return string;

    // Or
    // return s.repeat(n)
}

// 5-Convert a Number to a String!
function numberToString(num) {
    return num.toString()
}

// 6-Convert a String to a Number!
const stringToNumber = function(str){
    return parseInt(str)
    // or
    // return Number(str);
}

// 7-Century From Year
function century(year) {
    let result = 0;
    for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
        result++;
        }
    }
    return result;
    
    //   or
    // return Math.ceil(year / 100);
}

// 8-Sentence Smash
function smash (words) {
    return words.join(' ')

    // or
    // let res = '';
    // for (let i of words) {
    //     res += i.concat(' ')
    // }
    // return res.trim();   
};
