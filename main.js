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


// 9-Rock Paper Scissors!
const rps = (p1, p2) => {
    if(p1 === p2){
        return 'Draw';
    }else if(p1 == 'rock' && p2 == 'scissors'){
        return 'Player 1 won'
    }else if(p1 == 'paper' && p2 =='rock'){
        return 'Player 1 won'
    }else if(p1 == 'scissors' && p2 =='paper'){
        return 'Player 1 won'
    }else{
        return 'Player 2 won'
    }

    // or
    // if (p1 === p2) return "Draw!";
    // var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    // if (p2 === rules[p1]) {
    //     return "Player 1 won!";
    // }
    // else {
    //     return "Player 2 won!";
    // }
};


// 10-Beginner Series #4 Cockroach
function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s * 1000 * 100 / (60 * 60))
    // or
    // return Math.floor(s*1000/36);
}


// 11-Fundamentals: Return
function add(a,b){
    return a +b
}
function divide(a,b){
    return a/b
}
function multiply(a,b){
    return a*b
}
function mod(a,b){
    return a%b
}
function exponent(a,b){
    return a**b
}
    
function subt(a,b){
    return a-b
}


// 12-Multiply the number
function maps(x){
    return x.map(num=>num*2)
    // or
    // let arr = [];
    // for(let i = 0; i < x.length; i++){
    // arr.push(x[i] * 2);
    // }
    // return arr;
}


// 13-Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s){
    //coding and coding....
    return s.replace(/[aeoiu]/ig, '!') 

    // or
    // let newS = ''
    // let vowels = "aAeEiIoOuU"
    // for (let i = 0; i < s.length; i++) {
    //     if (vowels.indexOf(s[i]) === -1) {
    //     newS += s[i]
    //     }  else {
    //     newS += '!'
    //     }
    // }
    // return newS
}

// 14-Remove exclamation marks
function removeExclamationMarks(s) {
    return s.replace(/!/g,'')
    // or
    // return s.split('!').join('');
}


// 15-Invert values
function invert(array) {
    return array.map(num=>num * -1);
    // or
    // let newArr = [];
    // for(let i = 0; i < array.length; i++){
    //     newArr.push(-array[i]);
    // }
    // return newArr;
}

// 16-All Star Code Challenge #18
function strCount(str, letter){  
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter){
            num++;
        }
    }
    return num;
    // or
    // return str.split('').filter(c => c == letter).length;
}

// 17-Find out whether the shape is a cube
function cubeChecker(volume, side){
    if (side<=0 || volume<=0){
        return false;
    }else if(Math.pow(side,3)!==volume){
        return false;
    }else{
        return true;
    }
    // or
    // return volume /side ** 2 == side && side > 0
};


// 18-Switch it Up!
function switchItUp(number){
    let numbers = {
        0:'Zero',
        1:'One',
        2:'Two',
        3:'Three',
        4:'Four',
        5:'Five',
        6:'Six',
        7:'Seven',
        8:'Eight',
        9:'Nine'
    }
    return numbers[number]
    // or
    // return 'Zero One Two Three Four Five Six Seven Eight Nine'.split(' ')[number];
}

// 19-Flick Switch
function flickSwitch(arr){
    let flag = true;
    return arr.map(item => item === 'flick' ? flag =!flag : flag);
    // or
    // let flag = true
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] == 'flick'){
    //     flag == false ? flag = true : flag = false
    //     } 
    //     arr[i] = flag
    // }
    // return arr
}

// 20-Total amount of points
function points(games) {
    let gamer = games.map((game)=>{
        const [x,y] = game.split(":").map(n=>parseInt(n))
        if(x>y) return 3;
        if(x<y) return 0;
        return 1;
    })
    let points = gamer.reduce((total,current)=> total +current)
    return points
    // or
    // let sum=0;
    // for (let i=0; i<games.length; ++i)
    // {
    //     if (games[i][0]>games[i][2])
    //     sum+=3;
    //     if (games[i][0]==games[i][2])
    //     sum+=1;
    // }
    // return sum;
    // or
    // let total = 0;
    // for (let i = 0; i < games.length; i++) {
    //     [x, y] = games[i].split(":");
    //     if (x > y) {
    //     total += 3;
    //     } else if (x === y) {
    //         total += 1;
    //     }
    // }
    // return total;
}

// 21-Collinearity
function collinearity( x1,y1, x2,y2 ) {
    return (x1*y2)==(y1*x2) ;
    // or
    // if ((x1 == 0 && x2 == 0) || (y1 == 0 && y2 == 0)) {
    //     return true;
    // } else if ((x1 == 0 && y1 == 0) || (x2 == 0 && y2 == 0)) {
    //     return true;
    // } else if ((x1 / x2 == y1 / y2) && (x1 != 0 && x2 != 0 && y1 != 0 && y2 != 0 )) {
    //     return true;
    // } else {
    //     return false;
    // }
}

// 22-Well of Ideas - Easy Version
function well(x){
    let count = 0;
    for(let number of x){
        if(number === 'good') count +=1;
    }
    if(count > 2) return 'I smell a series!';
    if(count > 0) return 'Publish!';
    return 'Fail!';
    // or
    // let count = x.reduce((s, v) => s + (v == 'good'), 0);
    // return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}