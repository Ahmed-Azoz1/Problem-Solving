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

// 23-Count Odd Numbers below n
function oddCount(n){
    if(n%2===0) return n/2;
    return Math.floor(n/2)
    // or
    // return parseInt(n/2);
}

// 24-Powers of 2
function powersOfTwo(n){
    let arr = [];
    for(let i=0;i<=n;i++){
        arr.push(Math.pow(2,i))
    }
    return arr;
    // or
    // return [...Array(n + 1)].map((_, i) => 2 ** i)
}


// 25-Simple Fun #352: Reagent Formula
function isValid(formula){
    if(formula.includes(1) && formula.includes(2)) {
        return false;
    }
    else if(formula.includes(3) && formula.includes(4)) {
        return false;
    }
    else if(formula.includes(5) != formula.includes(6)) {
        return false;
    }
    else if(formula.includes(7) || formula.includes(8)) {
        return true; 
    } 
    else {
        return false;
    }

    // or
    // return (
    //     !(formula.includes(1) && formula.includes(2)) &&
    //     !(formula.includes(3) && formula.includes(4)) &&
    //     (formula.includes(5) === formula.includes(6)) &&
    //     (formula.includes(7) || formula.includes(8))
    // )
}

// 26-Grasshopper - Combine strings
const combineNames = (first,last)=>{
    return `${first} ${last}`
    // or
    // return first + " " + last
}

// 27-Pillars
function pillars(numPill, dist, width) {
    return numPill > 1 ? (numPill - 2) * width + (numPill - 1) * dist * 100 : 0
    // or 
    // if (numPill === 1) {
    //     return 0;
    // }else{
    //     let distance = dist * ((numPill -1) * 100 );
    //     let pillars = numPill - 2;
    //     return distance + (width * pillars);
    // }
}

// 28-CSV representation of array
function toCsvText(array) {
    return comma = array.map((row)=>row.join(",")).join('\n')
    // or
    // let res = '';
    // for (let i = 0; i < array.length; i++) {
    //     res += array[i] + '\n'
    // }
    // return res.trim();
}

// 29-Count Odd Numbers below n
function oddCount(n){
    if(n%2===0)return n/2;
    return Math.floor(n/2)
    // or
    // return (n-n%2)/2
}

// 30-Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if(input === null || input.filter(n=>n!=0).length ==0){
        return []
    }else{
        let positives = 0;
        let sum = 0;
        for(let n of input){
            if(n < 0) sum += n;
            if(n > 0) positives +=1;
        }
        return [positives,sum]
    }
    // or
    // return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

// 31-Count the Monkeys!
function monkeyCount(n) {
    return Array.from({length:n},(_,index)=>index+1)
    // or
    // let monkeys = [];
    // for(let i=1; i<n+1; i++){
    // monkeys.push(i);
    // }
    // return monkeys;
}

// 32-Simple Change Machine
function changeMe(moneyIn){
    switch(moneyIn){
        case '£5':return '20p '.repeat(25).trim()
        case '£2':return '20p '.repeat(10).trim()
        case '£1':return '20p '.repeat(5).trim()
        case '50p':return '20p 20p 10p'
        case '20p':return '10p 10p'
        default:return moneyIn;
    }
    //or
    // switch (moneyIn) {
    //     case '£5':
    //         var change = Array(25).fill('20p');
    //         return change.join(' ');
    //     case '£2':
    //         var change = Array(10).fill('20p');
    //         return change.join(' ');
    //     case '£1':
    //         var change = Array(5).fill('20p');
    //         return change.join(' ');
    //     case '50p':
    //         return '20p 20p 10p';
    //     case '20p':
    //         return '10p 10p';
    //     default:
    //         return moneyIn;
    // }
}

// 33-Reversed Strings
function solution(str){
    return str.split("").reverse().join("");
    // or
    // let reversedStr =[]
    // for(let x =0 ; x <= str.length; x++) {
    //     reversedStr.push(str[str.length - x])
    // } 
    // return reversedStr.join("");
}

// 34-My head is at the wrong end!
function fixTheMeerkat(arr) {
    return arr.reverse()
    // or
    // let nArr = [];
    // for(let i = arr.length-1; i >= 0; i--){
    //     nArr.push(arr[i]) 
    // }
    // return nArr;
}

// 35-Points of Reflection
function symmetricPoint(p, q) {
    return [2*q[0] - p[0],2*q[1] -p[1]]
    // or
    // const p1 = (q[0] * 2) - p[0]
    // const p2 = (q[1] * 2) - p[1]
    // return [p1, p2]
}

// 36-Days in the year
function yearDays(year) {
    return year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';
    // or
    // if (year % 4 !== 0) {
    //     return `${year} has 365 days`;
    // } else if (year % 100 !== 0) {
    //     return `${year} has 366 days`;
    // } else if (year % 400 !== 0) {
    //     return `${year} has 365 days`;
    // } else {
    //     return `${year} has 366 days`;
    // }
}

// 37-Square(n) Sum
function squareSum(numbers){
    return numbers.map((num)=>num *num).reduce((total,num)=>total + num,0)
    // or
    // let result = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     result += (numbers[i] * numbers[i]);
    // }
    // return result;
}

// 38-Sum The Strings
function sumStr(a,b) {
    if(a === '') a = '0';
    if(b === '') b = '0';
    return `${Number(a) + Number(b)}`
    // or
    // return String(Number(a)+Number(b));
}

// 39-Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages){
    return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
    // or
    // let min = Math.min(...ages);
    // let max = Math.max(...ages);
    // return [min, max, max-min];
}

// 40-Multiply the number
function multiply(number){
    return number * 5 ** String(Math.abs(number)).length
    // or
    // let power = number.toString().length;
    // if(number < 0){
    //     power -= 1;
    // }
    // return number * (5 ** power);
}

// 41-Beginner - Reduce but Grow
function grow(x){
    return x.reduce((cur,total)=>cur*total)
    // or
    // let res = 1;
    // for (let i = 0; i < x.length; i++) {
    //     res *= x[i];
    // }
    // return res;
}

// 42-Beginner Series #1 School Paperwork
function paperwork(n, m) {
    if(n<0||m<0) return 0;
    return n * m;
    // or
    // return n < 0 || m < 0 ? 0 : n * m;
}

// 43-Array plus array
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((cur,total)=>cur+ total) + arr2.reduce((cur,total)=>cur+ total)
    // or
    // let sum=0;
    // for(let i=0;i<arr1.length;i++)
    //     sum+=arr1[i];
    // for(let i=0;i<arr2.length;i++)
    //     sum+=arr2[i];
    // return sum;
}

// 44-Draw stairs
function drawStairs(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result[i] = `${' '.repeat(i)}I`;
    }
    return result.join('\n');
    // or
    // return [...Array(n)].map((_,index)=>' '.repeat(index) + 'I').join('\n')
}

// 45-Basic Mathematical Operations
function basicOp(operation, value1, value2){
    let result = 0
    if(operation == '+'){
        result = value1 + value2
    }else if(operation == '-'){
        result = value1 - value2
    }else if(operation == '*'){
        result = value1 * value2
    }else if(operation == '/'){
        result = value1 / value2
    }
    return result;
    // or
    // switch(operation){
    //     case '+': return value1 + value2;
    //     case '*': return value1 * value2;
    //     case '-': return value1 - value2;
    //     case '/': return value1 / value2;
    // }
}

// 46-I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
    let p = ["I love you","a little","a lot","passionately","madly","not at all"]
    let index = nbPetals % 6 -1;
    index === -1 ? index = p.length - 1:null;
    return p[index]
    // or
    // switch ((nbPetals - 1) % 6) {
    //     case 1:
    //         return "a little";
    //     case 2:
    //         return "a lot";
    //     case 3:
    //         return "passionately";
    //     case 4:
    //         return "madly";
    //     case 5:
    //         return "not at all";
    //     default:
    //         return "I love you";
    // }
}


// 47-Counting sheep...
function countSheeps(sheep) {
    return sheep.filter(one=>!!one).length;
    // or
    // let num = 0;
    // for(let i = 0; i < arrayOfSheep.length; i++) {
    //     if(arrayOfSheep[i]) {
    //         num += 1;
    //     }
    // }
    // return num;
}

// 48-Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
    return numbers.filter(num=>num % divisor === 0)
    // or
    // let newArr = [];
	// for (let i = 0; i < numbers.length; i++) {
	// 	if (numbers[i] % divisor === 0) {
	// 		newArr.push(numbers[i]);
	// 	} 
	// }
    // return newArr;
}

// 49-Is the string uppercase?
String.prototype.isUpperCase = function() {
    return this == this.toUpperCase();
    // or
    // if(this.toString() == this.toUpperCase()){
    //     return true;
    // } else{
    //     return false;
    // }
}

// 50-Chuck Norris VII - True or False? (Beginner)
function ifChuckSaysSo(){
    return ![]
    // or
    // return !true;
}

// 51-The Feast of Many Beasts
function feast(beast, dish) {
    return beast[0] == dish[0] && beast[beast.length -1] == dish[dish.length -1];
    // or
    // if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
    //     return true;
    // }else {return false;}
}

// 52-Count the number of cubes with paint on
function countSquares(cuts){
    return cuts == 0 ? 1 :6 * cuts * cuts + 2;
    // or
    // if(cuts===0){
    //     return 1
    // }
    // let innerCube = Math.pow(cuts-1,3)
    // let outerCube = Math.pow(cuts+1,3)
    // return outerCube-innerCube
}

// 53-Gravity Flip
const flip=(d, a)=>{
    if(d==='R'){
        return a.sort((a,b)=> a-b )
    }
    return a.sort((a,b)=>b-a)
    // or
    // switch(d){
    //     case 'R':
    //     return a.sort((a,b) => a-b)
    //     break;
    //     case 'L':
    //         return a.sort((a,b) => b-a)  
    //     break;
    // }
    // return 
}


// 54-If you can't sleep, just count sheep!!
const countSheep = function (num){
    return [...Array(num)].map((v,i) => i + 1 + ' sheep...').join('')
    // or
    // let sheepString = '';
    // for(let i=1;i<=num;i++){
    //     sheepString += i.toString() + ' sheep...'
    // }
    // return sheepString;
}

// 55-Find the smallest integer in the array
function findSmallestInt(arr) { 
    return Math.min(...arr)
    // or
    // return args.sort((a,b)=>a-b)[0];
}

// 56-Get the mean of an array
function getAverage(marks){
    let sum = marks.reduce((total,mark)=>total + mark,0)
    return Math.floor(sum / marks.length)
    // or
    // let mark = 0;
    // for(let i = 0; i < marks.length; i++){
    //     mark += marks[i];
    // }
    // return Math.floor(mark / marks.length);
}

// 57-Return Negative
function makeNegative(num) {
    return num >= 0 ? -num : num;
    // or
    // if(num <= 0) return num;
    // return num * -1;
}

// 58-Abbreviate a Two Word Name
function abbrevName(name){
    return name.toUpperCase().split(' ').map(char=>char[0]).join('.');
    // or
    // name = name.toUpperCase().split(' ');
    // return name[0][0] + '.' + name[1][0];
}

// 59-Multiply
function multiply(a, b){
    return a * b
    // or
    // if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    //     return 0;
    // }
    // return a * b;
}


// 60-Calculate average
function findAverage(array) {
    if(array.length === 0) return 0;
    let sum = array.reduce((sum,num)=>sum +num,0)
    return sum / array.length;
    // or
    // return array.length === 0 ? 0 : array.reduce((sum, num)=> sum + num, 0)/array.length;
}

// 61-Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item)).concat(arr2).sort((num1, num2) => num1 - num2)
    // or
    // return Array.from(new Set(arr1.concat(arr2).sort((num1,num2)=>num1 - num2))) 
}

// 62-Find Nearest square number
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)),2)
    //or
    // return Math.round(n**0.5)**2;
}

// 63-Sum Mixed Array
function sumMix(x){
    return x.map(num=>parseInt(num)).reduce((total,current)=>total + current,0)
    // or
    // let result = 0;
    // for (let n of x) {
    //     result += parseInt(n);
    // }
    // return result;
}

// 64-DNA to RNA Conversion
function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
    // or
    // return dna.replace(/T/g,'U');
}

// 65-Fake Binary
function fakeBin(x){
    return x.split('').map(char => char < 5 ? 0 : 1).join('');
    // or
    // let bin = '';
    // for(let char of x){
    //     if(parseInt(char) <5){
    //     bin +='0';
    //     }else{
    //     bin += '1';
    //     }
    // }
    // return bin ;
}

// 66-Grasshopper - Summation
var summation = function (num) {
    return num * (1+num) / 2;
    // or
    // let sum = 0;
    // for(let i=0; i<=num;i++){
    //     sum+=i
    // }
    // return sum;
}

// 67-Circular Objects #1 - Running around in circles
let circular = {value:'Hello World'}
circular.self = circular
// or
// class Circular {
//     constructor() {
//         this.value = "Hello World";
//         this.self = this;
//     }
// }
// circular = new Circular();


// 68-Transportation on vacation
function rentalCarCost(d) {
    let total = d * 40;
    if(d >= 7) return total - 50;
    if(d >= 3) return total - 20;
    return total;
    // or
    // return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}