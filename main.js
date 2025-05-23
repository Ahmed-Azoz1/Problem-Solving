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


// 69-Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => {
    return Object.values(gunners).includes('nay') ? 'Shiver me timbers!' : 'Fire!'; 
    // or
    // for(name in gunners)
    //     if(gunners[name] === 'nay'){
    //         return 'Shiver me timbers!'
    //     }
    // return 'Fire!'
}

// 70-Sum of positive
function positiveSum(arr) {
    return arr.filter(num=>num > 0).reduce((total,current)=>total + current,0)
    // or
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //     sum += arr[i];
    //     }
    // }
    // return sum;
}

// 71-Count by X
function countBy(x, n) {
    let z = [];
    for(let i=1;i <= n;i++){
        z.push(x * i);
    }
    return z;
    // or
    // return Array.from({length: n}, (v, i) => (i + 1) * x);
}

// 72-Correct the mistakes of the character recognition software
function correct(string)
{
	let newString='';
    for(let char of string){
        if(char === '5'){
            newString += 'S';
        }else if(char === '1'){
            newString += 'I';
        }else if(char === '0'){
            newString += 'O'
        }else{
            newString += char;
        }
    }
    return newString;
    // or
    // return string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I");
}

// 73-Is this my tail?
function correctTail(bod, tail){
    return bod[bod.length - 1] == tail;
    // or
    // let sub = bod.substr(bod.length-(tail.length));
    // if (sub === tail) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
}

// 74-Removing Elements
function removeEveryOther(arr){
    return arr.filter((_,index)=>index % 2==0);
    // or
    // for (let i = 1; i < arr.length;i++){
    //     arr.splice(i,1);
    // }
    // return arr;
}

// 75-Enumerable Magic #1 - True for All?
function all( arr, fun ){
    return arr.every(fun);
    // or
    // let length = arr.length;
    // for (let i=0; i<length; ++i){
    //     if (!fun(arr[i])){
    //         return false;
    //     }
    // }
    // return true;
}

// 76-Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump;
    // or
    // if (distanceToPump <= mpg * fuelLeft){
    //     return true;
    // } else {
    //     return false;
    // }
};

// 77-get character from ASCII Value
function getChar(c){
    return String.fromCharCode(c);
    // or
    // return eval('"\\'+ c.toString(8) +'"')
}

// 78-Short Long Short
function solution(a, b){
    return a.length < b.length ? a+b+a:b+a+b;
    // or
    // if(a.length < b.length) return a+b+a;
    // return b+a+b;
}

// 79-Keep up the hoop
function hoopCount (n) {
    return n>= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
    // or
    // if (n >= 10) return("Great, now move on to tricks") ;
    // return("Keep at it until you get it") 
}

// 80-Is he gonna survive?
function hero(bullets, dragons){
    return bullets / 2 >=dragons;
    // or
    // return (bullets / 2 >= dragons) ? true : false;
}

// 81-MakeUpperCase
function makeUpperCase(str) {
    return str.toUpperCase()
    // or
    // return str.replace(/[a-z]/g,s=>String.fromCharCode(s.charCodeAt(0)-32))
}

// 82-Double Char
function doubleChar(str) {
    let end = '';
    for(let char of str){
        end +=char + char;
    }
    return end;
    // or
    // return [...str].map(char=>char+char).join('');
}


// 83-Is it even?
function testEven(n) {
    return n % 2 ==0;
    // or
    // if ( n%2 === 0){
    //     return true
    // }else{
    //     return false
    // }
}

// 84-Surface Area and Volume of a Box
function getSize(width, height, depth){
    return [2 *(width*height+width*depth+height*depth),width*height*depth];
    // or
    // let volume = width * height * depth;
    // let area = 2 * (width * height + height * depth + depth * width);
    // return [area, volume];
}

// 85-Find Multiples of a Number
function findMultiples(integer, limit) {
    let result = [];
    for(let increment = 1;increment * integer <= limit;increment++){
        result.push(increment * integer);
    }
    return result;
    // or
    // [...Array(limit / integer ^ 0)].map((_, res) => ++res * integer);
}

// 86-Parse nice int from char problem
function getAge(inputString){
    return parseInt(inputString[0]);
    // or
    // return +inputString[0];
}

// 87-Grasshopper - Terminal game combat function
function combat(health, damage) {
    return damage > health ? 0 : health - damage;
    // or
    // if (health - damage < 0){
    //     return 0;
    // }else{
    // return health - damage;
    // }
}

// 88-Classic Hello World
class Solution{
    static main(){
        console.log("Hello World!")
    }
    // or
    // main = () => {console.log("Hello World!")}
}
// Solution = new Solution

// 89-Miles per gallon to kilometers per liter
function converter (mpg) {
    return Math.round(mpg / 4.54609188 * 1.609344 * 100) / 100;
    // or
    // return +(mpg * .354006043538).toFixed(2)
}

// 90-Arguments to Binary addition
function arr2bin(arr){
    return arr.reduce((prev,curr)=>prev + (typeof curr == 'number' ? curr : 0),0).toString(2);
    // or
    // let sum = 0;
    // arr.forEach((num)=>{
    //     if(typeof num === 'number'){
    //         sum += num;
    //     }
    // });
    // return sum.toString(2);
}

// 91-Exclusive "or" (xor) Logical Operator
function xor(a, b) {
    return a === b ? false : true;
    // or
    // return a != b;
}

// 92-Is the date today
function isToday(date) {
    let today = new Date();
    return today.setHours(0,0,0,0) == date.setHours(0,0,0,0);
    // or
    // return new Date().toDateString() === date.toDateString();
}

// 93-Basic Training: Add item to an Array
websites.push('codewars');
// or
// websites[0] = "codewars";


// 94-Formatting decimal places #0
function twoDecimalPlaces(n) {
    return Number(n.toFixed(2));
    // or
    // return +n.toFixed(2);
}

// 95-Fix the Bugs (Syntax) - My First Kata
function myFirstKata(a ,b) {
    return typeof a == 'number' && typeof b == 'number' ? a % b + b % a :false;
    // or
    // if (typeof(a) !== "number" || typeof(b) !== "number") {
    //     return false;
    // } else {
    //     return a % b + b % a;
    // }
}

// 96-Welcome to the City
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
    // or
    // return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
}

// 97-Sleigh Authentication
function Sleigh() {}
Sleigh.prototype.authenticate = function(name, password) {
    return name == 'Santa Claus' && password == 'Ho Ho Ho!';
};
// or
// function Sleigh() {
//     this.name = "Santa Claus";
//     this.password = "Ho Ho Ho!";
// }

// Sleigh.prototype.authenticate = function(name, password) {
//     return this.name == name && this.password == password;
// };

// 98-What is between?
function between(a, b) {
    let arr = [];
    for(let i=a;i<=b;i++ ){
        arr.push(i);
    }
    return arr;
    // or
    // [...Array(b - a + 1)].map((_, idx) => idx + a);
}

// 99-How old will I be in 2099?
function  calculateAge(birth,current) {
    let difference = current - birth;
    if(birth == current) return `You were born this very year!`;
    else if (difference == 1) return `You are 1 year old.`;
    else if (difference > 1) return `You are ${difference} years old.`;
    else if (difference === -1) return `You will be born in 1 year.`;
    else return `You will be born in ${difference * -1} years.`;
    // or
    // return (current - birth > 1 ) ? `You are ${current - birth} years old.` : 
    // (current - birth == -1) ? `You will be born in 1 year.` :
    // (current - birth < 0) ? `You will be born in ${birth - current} years.` :
    // (current - birth == 1 ) ? `You are 1 year old.` : 
    // (current - birth == 0 ) ? `You were born this very year!` : false;
}

// 100-Thinkful - Logic Drills: Traffic light
function updateLight(current) {
    return current == `red` ? `green` : current == `green` ? `yellow` : `red`;
    // or
    // switch (current) {
    //     case 'green':
    //         return 'yellow';
    //     case 'yellow':
    //         return 'red';
    //     default:
    //         return 'green';
    // }
}

// 101-Convert number to reversed array of digits
function digitize(n) {
    return [...String(n)].map(Number).reverse();
    // or
    // return Array.from(String(n), Number).reverse();
}

// 102-Find the Remainder
function remainder(n, m){
    return a > b ? a % b : b % a;
    // or
    // let numbers = [n,m].sort((one,two)=>one-two);
    // let [small,big] = numbers;
    // return big % small;
}

// 103-Lario and Muigi Pipe Problem
function pipeFix(numbers){
    let lastNumbers = [];
    for(let i = numbers[0];i<= numbers[numbers.length -1];i++){
        lastNumbers.push(i);
    }
    return lastNumbers;
    // or
    // return Array.from({ length: numbers.pop() - numbers[0] + 1 }, (v, i) => i + numbers[0]);
}

// 104-Dollars and Cents
function formatMoney(amount){
    return `$${amount.toFixed(2)}`
    // or
    // return '$' + amount.toFixed(2);
}

// 105-Returning Strings
function greet(name){
    return `Hello, ${name} how are you doing today?`
    // or
    // return "Hello, " + name + " how are you doing today?";
}

// 106-How many stairs will Suzuki climb in 20 years?
function stairsIn20(s){
    return 20 * s.reduce((total,day)=>{return [...total,...day]},[]).reduce((sum,current)=>sum+current);
    // or
    // let stairs = 0;
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = 0; j < s[i].length; j++) {
    //         stairs += s[i][j];
    //     }
    // }
    // return stairs * 20;
}

// 107-Simple validation of a username with regex
function validateUsr(username) {
    return /^[a-z\d_]{4,16}$/.test(username);
    // or
    // return username.length>=4&&username.length<=16&&!/\W|[A-Z]/.test(username);
}

// 108-Super Duper Easy
function problem(x){
    return typeof x == 'number' ? x * 50 + 6 : 'Error';
    // or
    // if(typeof x === "string"){
    //     return "Error";
    // }
    // return (x * 50) + 6;
}

// 109-Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears ==1) {
        return [1,15,15]
    }else if(humanYears ==2){
        return [2,24,24]
    }else{
        return [humanYears,24+(humanYears-2)*4,24+(humanYears-2)*5];
    }
    // or
    // const cat = humanYears > 1 ? 24 + (humanYears-2)*4 : 15
    // const dog = humanYears > 1 ? 24 + (humanYears-2)*5 : 15
    // return [humanYears, cat, dog];
}

// 110-Generate range of integers
function generateRange(min, max, step){
    let arr = [];
    for (let i=min; i<=max; i += step) {
        arr.push(i);
    }
    return arr;
    // or
    // return Array.from({length:(max-min)/step + 1},(_,index)=>min+index * step);
}

// 111-For Twins: 2. Math operations
function iceBrickVolume(radius, bottleLength, rimLength) {
    return (bottleLength - rimLength) * 2 * radius * radius;
    // or
    // return  (2 * Math.pow(radius, 2)) * (bottleLength - rimLength)
}

// 112-Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
    let str =  string.split("");
    if(str[str.length - 1].includes("!")) {
        str.pop()
    }
    return str.join("") 
    // or
    // return string.replace(/\!$/,'');
}

// 113-Find the Slope
function slope(points){
    return points[0] == points[2] ? 'undefined' : String((points[3]-points[1])/(points[2]-points[0]));
    // or
    // let y = points[3] - points[1];
    // let x = points[2] - points[0];
    // if (x==0){
        // return String(undefined);
    // }
    // return String(y/x);
}

// 114-Expressions Matter
function expressionMatter(a, b, c) {
    return Math.max(a+b+c,a*b*c,(a+b)*c,a*(b+c));
    // or
    // let values = [(a*(b+c)), (a*b*c), (a+b*c), ((a+b)*c), (a+b+c)];
    // return Math.max(...values);
}

// 115-Return the day
function whatday(num) { 
    switch(num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return 'Wrong, please enter a number between 1 and 7';
        }
    // or
    // return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][num -1] || "Wrong, please enter a number between 1 and 7";
}

// 116-Quadrants
function quadrant(x, y) {
    if (x > 0 && y > 0) return 1;
    if (x < 0 && y > 0) return 2;
    if (x < 0 && y < 0) return 3;
    return 4;
    // or
    // let area = [[2,1],[3,4]]
    // let xa = x > 0 ? 1 : 0;
    // let ya = y > 0 ? 0 : 1;
    // return area[ya][xa];
}

// 117-Remove the time
function shortenToDate(longDate) {
    const [date, time] = longDate.split(',');
    return date;
    // or
    // return longDate.split(',')[0];
}

// 118-Is this a triangle?
function isTriangle(a,b,c){
    return a+b>c && b+c>a && c+a>b;
    // or
    // return Math.max(a,b,c)<(a+b+c)/2;
}

// 119-Rotate for a Max
function maxRot(n) {
    let str = n.toString();
    let arr = [str];
    for (var i=0;i<=str.length-1 ;i++){
        str = str.slice(0,i)+str.slice(i+1)+str[i];
        arr.push(str.split().join());
    }
    return Math.max.apply(null, arr);
    // or
    // return [...`${n}`].reduce((pre, _, idx) => Math.max(pre, n = `${n}`.slice(0, idx) + `${n}`.slice(idx + 1) + `${n}`.slice(idx, idx + 1)), n);
}

// 120-Do you speak "English"?
function spEng(sentence){
    return /english/i.test(sentence);
    // or
    // return sentence.toLowerCase().includes("english");
}

// 121-Define a card suit
function defineSuit(card) {
    if(card.includes('♣')){
        return 'clubs'
    }else if(card.includes('♦')){
        return 'diamonds'
    }else if(card.includes('♥')){
        return 'hearts'
    }else{
        return 'spades'
    }
    // or
    // let suit = card.slice(-1);
    // switch (suit) {
    //     case '♣':
    //         return 'clubs'
    //     case '♦':
    //         return 'diamonds'
    //     case '♥':
    //         return 'hearts'
    //     case '♠':
    //         return 'spades'
    // }
}

// 122-Be Concise IV - Index of an element in an array
function find(a, e) {
    return a.indexOf(e) >= 0 ? a.indexOf(e) : "Not found";
    // or
    // return a.includes(e) ? a.indexOf(e) : `Not found`;
}

// 123-A Strange Trip to the Market
function isLockNessMonster(s) {
    if(s.toLowerCase().includes('tree fiddy')){
        return true;
    }else if(s.toLowerCase().includes('three fiddy')){
        return true;
    }else if(s.toLowerCase().includes('3.50')){
        return true;
    }else{
        return false;
    }
    // or
    // return s.includes("tree fiddy") || s.includes("3.50");
}

// 124-A wolf in sheep's clothing
function warnTheSheep(queue) {
    let position = queue.reverse();
    let index = position.indexOf('wolf');
    if(index == 0){
        return `Pls go away and stop eating my sheep`;
    }else{
        return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
    }
    // or
    // let position = queue.reverse().indexOf('wolf');
    // return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

// 125-Merging sorted integer arrays (without duplicates)
function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b);
    // or
    // return Array.from(new Set(a.concat(b).sort((x,y)=>x-y)))
}

// 126-Template Strings
const templateStrings = (noun, adjective) =>{
    return `${noun} are ${adjective}`;
    // or
    // return noun + " are " + adjective;
}

// 127-Leonardo Dicaprio and Oscars
function leo(oscar){
    if(oscar == 88 ){
        return "Leo finally won the oscar! Leo is happy";
    }else if(oscar == 86){
        return "Not even for Wolf of wallstreet?!";
    }else if(oscar < 88){
        return "When will you give Leo an Oscar?";
    }else{
        return "Leo got one already!";
    }
    // or
    // const responses = {
    //     86: "Not even for Wolf of wallstreet?!",
    //     87: "When will you give Leo an Oscar?",
    //     88: "Leo finally won the oscar! Leo is happy"
    // };
    // return responses[oscar] || (oscar > 88 ? "Leo got one already!" : "When will you give Leo an Oscar?");
}

// 128-Hello, Name or World!
function hello(name) {
    if(!name) return 'Hello, World!'
    return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
    // or
    // return `Hello, ${ name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

// 129-Pole Vault Starting Marks
function startingMark(bodyHeight){
    return +(bodyHeight * 3.9354 + 3.4681).toFixed(2);
    // or
    // return (m=>+(m * bodyHeight + 9.45 - m * 1.52).toFixed(2))
    // ((10.67 - 9.45) / (1.83 - 1.52));
}

// 130-How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((prev,curr)=>prev + curr) / classPoints.length < yourPoints;
    // or
    // let avg = classPoints.reduce((prev,curr) => prev + curr) / classPoints.length;
    // if (avg < yourPoints) {
    //     return true;
    // }else {
    //     return false;
    // }
}

// 131-Exclamation marks series #2: Remove all exclamation marks from the end of sentence
function remove (string) {  
    return string.replace(/!+$/,'');
    // or
    // return string.charAt(string.length - 1) === '!' ? remove(string.slice(0, string.length - 1)) : string;
}

// 132-Heads and Legs
function animals(heads, legs){
    let cows = legs%2 ? -1 : legs/2-heads;
    return heads >= cows && cows >= 0 ? [heads-cows, cows] : "No solutions";
    // or
    // let cow = (legs - heads * 2) / 2;
    // let chicken = heads - (legs - heads * 2) / 2;
    // if (chicken < 0 || cow < 0 || Math.round(chicken) != chicken || Math.round(cow) != cow){
    //     return "No solutions";
    // }else{
    //     return [chicken, cow];
    // }
}

// 133-Drink about
function peopleWithAgeDrink(old) {
    return `drink ${old < 14 && 'toddy' || old < 18 && 'coke' || old < 21 && 'beer' || old >= 21 && 'whisky'}`;
    // or
    // if(old < 14){
    //     return 'drink toddy'
    // }else if(old < 18){
    //     return 'drink coke'
    // }else if(old < 21){
    //     return 'drink beer'
    // }else{
    //     return 'drink whisky'
    // }
};

// 134-Mr. Freeze
Object.freeze(MrFreeze);
// or
// function freezeObj(obj) {
//     Object.freeze(obj);
// }
// freezeObj(MrFreeze);


// 135-Grasshopper - Terminal Game #1
function Hero (name) {
    this.name = name || 'Hero'
    this.position = '00'
    this.health =100
    this.damage =5
    this.experience =0
}
// or
// class Hero {
//     constructor(name) {
//         this.name = name || 'Hero';
//         this.position = '00';
//         this.health = 100;
//         this.damage = 5;
//         this.experience = 0;
//     }
// }

// 136-Wilson primes
function amIWilson(p) {
    p = BigInt(p);
    return ((factorial(p-1n)) + 1n) % (p * p) == 0n;
}
function factorial(x){
    if(x <= 1n){
        return 1n;
    }
    return x * factorial(x - 1n);
}
// or
// function amIWilson(p) {
//     p = BigInt(p);
//     const fac = n => n ? n * fac(n-1n) : 1n;
//     const d = (fac(p-1n) + 1n);
//     return !(d % (p * p));
// }

// 137-String cleaning
function stringClean(s){
    return s.replace(/\d/g,'');
    // or
    // let result = '';
    // for(let i=0;i<s.length;i++) {
    //     if(isNaN(s[i])||s[i]==' ') result+=s[i]; 
    // }
    // return result;
}

// 138-Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
function remove (string) {
    return string.split('!').join('') + '!';
    // or
    // return string.replace(/!/g, '') + "!";
}

// 139-Grader
function grader(score) {
    if (score>1||score<0.6) return 'F'
    if (score<0.7) return 'D'
    if (score<0.8) return 'C'
    if (score<0.9) return 'B'
    return 'A'
    // or
    // return score > 1 || score < 0.6 ? 'F' : score < 0.7 ? 'D' : score < 0.8 ? 'C' : score < 0.9 ? 'B' : 'A' ;
}

// 140-Grasshopper - Grade book
function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3;
    if(score >= 90){
        return 'A';
    }else if(score >= 80){
        return 'B';
    }else if(score >= 70){
        return 'C';
    }else if(score >= 60){
        return 'D';
    }else {
        return 'F';
    }
    // or
    // return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F"
}

// 141-The 'if' function
function _if(bool, func1, func2) {
    return bool ? func1() : func2();
    // or
    // if(bool) {
    //     return func1();
    // } 
    // return func2();
}

// 142-Highest and Lowest
function highAndLow(numbers){
    const arr = numbers.split(' ').map(Number);
    const max = Math.max(...arr)
    const low = Math.min(...arr)
    return `${max} ${low}`
    // or
    // numbers = numbers.split(' ');
    // return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// 143-Descending Order
function descendingOrder(n){
    let myFunc = num => Number(num);
    let intArr = Array.from(String(n), myFunc);
    const arr = intArr.sort(function(a, b){return b-a});
    return Number(arr.join(''));
    // or
    // return parseInt(String(n).split('').sort().reverse().join(''))
}

// 144-Sum of a sequence
const sequenceSum = (begin, end, step) => {
    let result = 0;
    for(let i = begin;i <= end; i += step){
        result += i;
    }
    return result;
    // or
    // if (begin > end) {
    //     return 0;
    // }
    // return begin + sequenceSum(begin + step, end, step);
};

// 145-Simple Fun #384: Is Turing's Equation?
function isTuringEquation(s){
    let arr = s.replace('+','=').split('=');
    let first = arr[0].split('').reverse().join('')*1;
    let second = arr[1].split('').reverse().join('')*1;
    let third = arr[2].split('').reverse().join('')*1;
    return first + second===third;
    // or
    // let [a,b,c] = s.split(/[+=]+/).map(n=>(+n.split('').reverse().join('')));
    // return a + b === c;
}

// 146-Remove duplicates from list
function distinct(a) {
    return [...new Set(a)];
    // or
    // return Array.from(new Set(a));
}

// 147-noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)
function greaterThanLessThan (a,b,c) {
    return a < b < c;
    // or
    // return (a < b) < c ;
}

// 148-Reversing Words in a String
function reverse(string){
    return string.split(" ").reverse().join(" ");
    // or
    // let arr = string.split(' ');
    // let rev = [];
    // for (let i = arr.length - 1; i > -1; i--) {
    //     rev.push(arr[i]);
    // }
    // return rev.join(' ');
}

// 149-Geometry Basics: Circle Area in 2D
function circleArea(circle){
    return Math.PI * circle.radius ** 2;
    // or
    // return radius * radius * Math.PI
}

// 150-validate code with simple regex
function validateCode (code) {
    let str = code.toString().split("");
    if(str[0] == "1" || str[0] == "2" || str[0] == "3"){
        return true;
    }else{
        return false;
    }
    // or
    // return /^[123]/.test(code);
}

// 151-Make Me Slow
function makeMeSlow() {
    for (var x = 0; x < 6000000000; x++) {}
    // or
    // setTimeout(()=> {}, 6000)
}

// 152-Likes Vs Dislikes
function likeOrDislike(buttons) {
    return buttons.reduce((p,c)=>p == c ? Nothing : c,Nothing);
    // or
    // let result = "Nothing";
    // for (let i = 0; i < buttons.length; i++) {
    //     if (buttons[i] == result) {
    //         result = "Nothing";
    //     } else {
    //         result = buttons[i];
    //     }
    // }
    // return result;
}

// 153-Two to One
function longest(s1, s2) {
    return [...new Set(s1+s2)].sort().join('');
    // or
    // let str = new Set([...s1, ...s2]);
    // return [...str].sort().join('');
}

// 154-Disemvowel Trolls
function disemvowel(str) {
    return str.match(/[^aeiou]/gi).join("");
    // or
    // return str.replace(/[aeiou]/gi, '');
}

// 155-Grasshopper - Terminal game move function
function move (position, roll) {
    return position + (roll*2);
    // or
    // let rolls = roll * 2;
    // let total = position + rolls;
    // return total;
}

// 156-The wheat/rice and chessboard problem
function squaresNeeded(grains){
    let square = 0
    let ans = 1
    while (ans <= grains){
        ans *= 2
        square += 1
    }
    return square;
    // or
    // return Math.ceil(Math.log2(grains+1))
}

// 157-Welcome!
function greet(language) {
	return((hello)=>hello[language] || 'Welcome')({
        czech: "Vitejte"
        , danish: "Velkomst"
        , dutch: "Welkom"
        , estonian: "Tere tulemast"
        , finnish: "Tervetuloa"
        , flemish: "Welgekomen"
        , french: "Bienvenue"
        , german: "Willkommen"
        , irish: "Failte"
        , italian: "Benvenuto"
        , latvian: "Gaidits"
        , lithuanian: "Laukiamas"
        , polish: "Witamy"
        , spanish: "Bienvenido"
        , swedish: "Valkommen"
        , welsh: "Croeso"
    }
    )
    // or
    // switch(language){
    //     case "english": return "Welcome";
    //     case "czech": return "Vitejte";
    //     case "danish": return "Velkomst";
    //     case "dutch": return "Welkom";
    //     case "estonian": return "Tere tulemast";
    //     case "finnish": return "Tervetuloa";
    //     case "flemish": return "Welgekomen";
    //     case "french": return "Bienvenue";
    //     case "german": return "Willkommen";
    //     case "irish": return "Failte";
    //     case "italian": return "Benvenuto";
    //     case "latvian": return "Gaidits";
    //     case "lithuanian": return "Laukiamas";
    //     case "polish": return "Witamy";
    //     case "spanish": return "Bienvenido";
    //     case "swedish": return "Valkommen";
    //     case "welsh": return "Croeso";
    //     default: return "Welcome";
    // }
}

// 158-Printing Array elements with Comma delimiters
function printArray(array){
    let list = []
    array.map((word)=>list.push(word))
    return list;
    // or
    // return array.join();
}

// 159-My Language Skills
function myLanguages(results) {
    let resultsSort = Object.entries(results).sort((a, b) => b[1] - a[1]);
    let result = [];
    for (let language of resultsSort) {
        if (language[1] >= 60) {
            result.push(language[0]);
        }
    }
    return result;
    // or
    // return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

// 160-Friend or Foe?
function friend(friends){
    let result = [];
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length == 4){
            result.push(friends[i])
        }
    }
    return result;
    // or
    // return friends.filter(n => n.length === 4)
}

// 161-Stacked Balls - 2D
function stackHeight2d(layers) {
    return !layers ? 0 : ((layers - 1) * Math.sqrt(3) / 2 + 1);
    // or
    // if (layers === 0) {
    //     return 0;
    // }
    // return 1 + (layers - 1) * Math.sqrt(3) / 2;
}

// 162-"this" is a problem
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this.name = `${first} ${last}`;
    // or
    // return { 
    //     firstName : first,
    //     lastName : last,
    //     name: first + ' ' + last
    // }
}

// 163-Volume of a Cuboid
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
    // or
    // getVolumeOfCuboid(length, width, height) {
    //     return length * width * height
    // }
}

// 164-Price of Mangoes
function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3))
    // or
    // if( quantity / 3 < 1 ){
    //     return quantity * price;
    // } else {
    //     return (quantity-(Math.floor(quantity / 3))) *price;
    // }
}

// 165-Reversed Words
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
    // or
    // let reverse = [];
    // let words = str.split(" ");
    // for(let i=words.length-1; i>=0; i--){
    //     reverse.push(words[i]);
    // }
    // return reverse.join(" ")
}

// 166-Reversed sequence
const reverseSeq = n => {
    let result = [];
    for(let i=n;i>0;i--){
        result.push(i)
    }
    return result;
    // or
    // return Array(n).fill(0).map((e, i) => n - i );
};

// 167-Grasshopper - Debug sayHello
function sayHello(name) {
    return `Hello, ${name}`
    // or
    // return 'Hello, ' +  name;
}

// 168-Find Maximum and Minimum Values of a List
var min = function(list){
    return Math.min(...list);
    // or
    // list.sort((a, b) => (a - b));
    // return list[0];
}
var max = function(list){
    return Math.max(...list);
    // or
    // list.sort((a, b) => (b - a));
    // return list[0];
}

// 169-Convert to Binary
function toBinary(n){
    return +n.toString(2);
    // or
    // return parseInt(n.toString(2));
}

// 170-Will there be enough space?
function enough(cap, on, wait) {
    if(cap - (on + wait) >= 0) return 0;
    return (on + wait) - cap;
    // or
    // return (on + wait > cap) ? on + wait - cap : 0;
}

// 171-altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
    return this.split("").map(item => item === item.toUpperCase()? item.toLowerCase(): item.toUpperCase()).join('');
    // or
    // new_str = "";
    // for(let i = 0; i < this.length; i++) {
    //     if(this[i] === this[i].toUpperCase()) {
    //         new_str += this[i].toLowerCase();
    //     }
    //     else {
    //         new_str += this[i].toUpperCase();
    //     }
    // }
    // return new_str;
}

// 172-Coding 3min : Jumping Dutch act
function sc(floor){
    if(floor <= 1) {
        return '';
    } else if(floor < 7) {
        return 'Aa~ '.repeat(floor - 1) + 'Pa! ' + 'Aa!';
    } else {
        return 'Aa~ '.repeat(floor - 1) + 'Pa!';
    }
    // or
    // if(floor <= 1) return "";
    // return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}

// 173-Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
    // or
    // if( bool ){
    //     return "Yes";
    // }
    // return "No";
}

// 174-Convert a string to an array
function stringToArray(string){
    return string.split(' ');
    // or
    // return string.trim().split(" ");
}

// 175-V A P O R C O D E
function vaporcode(string) {
    return string.toUpperCase().split(' ').join('').split('').join('  ');
    // or
    // return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ");
}

// 176-Do I get a bonus?
function bonusTime(salary, bonus) {
    let result;
    bonus ? result = salary * 10 : result = salary;
    return `£${result}`;
    // or
    // return bonus ? `£${10 * salary}` : `£${salary}`;
}

// 177-Indexed capitalization
function capitalize(s,arr){
    let chars = s.split('');
    arr.forEach(index => {
        if (index >= 0 && index < chars.length) {
            chars[index] = chars[index].toUpperCase();
        }
    });
    return chars.join('');
    // or
    // const arrLetters = [...s]
    // arr.map(index=>  index > s.length ? '' : arrLetters[index] = arrLetters[index].toUpperCase())
    // return arrLetters.join('')
};

// 178-Duck Duck Goose
function duckDuckGoose(players, goose) {
    return players[(goose -1) % players.length].name;
    // or
    // const index = (goose - 1) % players.length;
    // return players[index].name;
}

// 179-Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
    const x = a.x - b.x;
    const y = a.y - b.y;
    return Math.sqrt(x ** 2 + y ** 2)
    // or
    // return Math.hypot(a.x - b.x, a.y - b.y);
}

// 180-No oddities here
function noOdds( values ){
    return values.filter(x => x % 2 === 0);
    // or
    // let arr = [];
    // for(let num in values){
    //     if(num%2==0) arr.push(+num);
    // }
    // return arr;
}

// 181-Count the divisors of a number
function getDivisorsCnt(n){
    let num = 0;
    if(n==1) return 1;
    if(n%Math.sqrt(n)==0) num++
    for(let i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
            num+=2;
        }
    }
    return num;
    // or
    // let count = 0;
    // for (let i = 1, lim = n ** .5; i <= lim; i++){
    //     n % i || (count += 1 + (i < lim));
    // }
    // return count;
}

// 182-The 'spiraling' box
function createBox(m, n) {
    // Create an empty matrix filled with zeros
    const matrix = Array.from({ length: n }, () => Array(m).fill(0));

    // Fill the matrix according to the layers
    for (let layer = 0; layer < Math.ceil(Math.min(m, n) / 2); layer++) {
        
        // Fill the top edges
        for (let i = layer; i < m - layer; i++) {
            matrix[layer][i] = layer + 1;   // Top edge
        }

        // Fill the bottom edges
        for (let i = layer; i < m - layer; i++) {
            matrix[n - layer - 1][i] = layer + 1;  // Bottom edge
        }

        // Fill the side edges
        for (let i = layer; i < n - layer; i++) {
            matrix[i][layer] = layer + 1;  // Left edge
            matrix[i][m - layer - 1] = layer + 1;  // Right edge
        }
    }

    return matrix;
    
    // or

    // let matrixArray = [];
    // for (let i = 0; i < n; i++) {   
    //     matrixArray[i] = [];
    //     for (let j = 0; j < m; j++) { 
    //     let min = Math.min(i, j, m - j - 1, n - i - 1);
    //     matrixArray[i][j] = min + 1;
    //     }
    // }
    // return matrixArray;
}

// 183-Vowel Count
function getCount(str) {
    return (str.match(/[aeiou]/g) || []).length;
    // or
    // return str.split('').filter(letter => "aeiou".includes(letter)).length;
}

// 184-See You Next Happy Year
function nextHappyYear(year){
    while(new Set(String(++year).split('')).size < 4);
    return year;
    // or
    // return /(.).*\1/.test(year + 1) ? nextHappyYear(year + 1) : year + 1;
}

// 185-Move 10
function moveTen(s){
    return s.split('').map(ele=>ele.charCodeAt() + 10>122 ? 
                            String.fromCharCode(ele.charCodeAt() - 16): 
                            String.fromCharCode(ele.charCodeAt() + 10)).join('')
    // or
    // return s.replace(/./g, val => String.fromCharCode(97 + (val.charCodeAt() - 87 ) % 26));
}

// 186-Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
function howManySmaller(arr,n){
    return arr.filter((ele)=>ele.toFixed(2) < n).length;
    // or
    // total = 0;
    // for (i = 0; i < arr.length; i++){
    //     if (arr[i].toFixed(2) < n)
    //     total++;
    // }
    // return total;
}

// 187-Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
    return arr.slice(0,n);
    // or
    // let res = [];
    // for (let i in arr) {
    //     if (i < n && i < arr.length) {
    //         res.push(arr[i]);
    //     }
    // }
    // return res;
}

// 188-Square Every Digit
function squareDigits(num){
    return +String(num).split('').map(ele=>(+ele) **2).join('');
    // or
    // let string = num.toString();
    // let results = [];
    // for (let i = 0; i < string.length; i++){
    //     results[i] = string[i] * string[i];
    // }
    // return Number(results.join(''));
}

// 189-Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
    return n > 0 ? remove(s.replace('!',''),n-1) : s;
    // or
    // for (let i=0;i<n;i++){
    //     s=s.replace("!","")
    // };
    // return s;
}

// 190-Safen User Input Part I - htmlspecialchars
function htmlspecialchars(formData) {
    let safeData = formData.replace(/&/g, '&amp;');
    safeData = safeData.replace(/</g, '&lt;');
    safeData = safeData.replace(/>/g, '&gt;');
    safeData = safeData.replace(/"/g, '&quot;');
    return safeData;
    // or
    // const dict = {
    //     '<': '&lt;',
    //     '>': '&gt;',
    //     '"': '&quot;',
    //     '&': '&amp;',
    // };
    // return formData.replace(/[<>"&]/g, char => dict[char]);
}

// 191-isReallyNaN
const isReallyNaN = (val) => {
    return Number.isNaN(val);
    // or
    // return val != val
};

// 192-Fuel Calculator: Total Cost
function fuelPrice(litres, pricePerLitre) {
    let discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
    let finalPricePerLitre = pricePerLitre - discount;
    return +(litres * finalPricePerLitre).toFixed(2);
    // or
    // for(let i =2;i<=10;i+=2){
    //     if(litres >= i){
    //         pricePerLitre -= 0.05
    //     }
    // }
    // return +(litres * pricePerLitre).toFixed(2)
}

// 192-Get number from string
function getNumberFromString(s) {
    return +s.replace(/\D/g,'');
    // or
    // return parseInt(s.split("").filter(x => "0123456789".includes(x)).join(""));
}

// 193-For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
var quote = function(fighter) {
    return 'george saint pierre' == fighter.toLowerCase() ?
    'I am not impressed by your performance.' : 
    "I'd like to take this chance to apologize.. To absolutely NOBODY!";
    // or
    // switch(fighter.toLowerCase()) {
    //     case 'conor mcgregor': return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
    //     case 'george saint pierre': return "I am not impressed by your performance.";
    //     default : 'Who are you?' 
    // }
};

// 194-Generate user links
function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
    // or
    // return 'http://www.codewars.com/users/' + encodeURIComponent(user);
}

// 195-Check same case
function sameCase(a, b){
    if(a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()){
        return -1;
    }else if(a == a.toLowerCase() && b == b.toLowerCase() || a == a.toUpperCase() && b == b.toUpperCase()){
        return 1;
    }else{
        return 0;
    }
    // or
    // if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) return -1;
    // if ((a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() && b === b.toLowerCase())) {
    //     return 1;
    // } else return 0;
}

// 196-Fix your code before the garden dies!
function rainAmount(mm){
    if (mm < 40) {
        return `You need to give your plant ${40 - mm}mm of water`;
    }else{
        return `Your plant has had more than enough water for today!`;
    };
    // or
    // return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!";
}

// 197-USD => CNY
function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
    // or
    // return (usd*6.75).toFixed(2) + ' Chinese Yuan'; 
}

// 198-Hex to Decimal
function hexToDec(hexString){
    return parseInt(hexString,16);
    // or
    // let decimalNumber = parseInt(hexString, 16);
    // return decimalNumber;
}

// 199-Enumerable Magic #20 - Cascading Subsets
function eachCons(array, n) {
    let results = [];
    for(let i=0;i<array.length;i++){
        let arr = [];
        for(let j=0;j<n;j++){
            let index = i + j;
            if(index >= array.length){
                return results;
            }
            arr.push(array[index]);
        }
        results.push(arr);
    }
	return results;
    // or
    // return array.map((el, i)=> array.slice(i, i+n)).filter(x => x.length === n)
}

// 200-Are You Playing Banjo?
function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() === 'r' ?  name + ' plays banjo' : name + ' does not play banjo';
    // or
    // return /[rR]/g.test(name[0]) ? `${name} plays banjo` : `${name} does not play banjo`;
}

// 201-FIXME: Replace all dots
var replaceDots = function(str) {
    return str.replace(/\./g, '-');
    // or
    // return str.replaceAll(".", "-");
}

// 202-Is there a vowel in there?
function isVow(a){
    return a.map((num)=>/[aeiuo]/.test(String.fromCharCode(num)) ? String.fromCharCode(num) : num);
    // or
    // for (let i=0, l=a.length; i<l; ++i){
    //     let char = String.fromCharCode(a[i])
    //     if ('aeiou'.indexOf(char) !== -1)
    //     a[i] = char;
    // }
    // return a;
}

// 203-The Wide-Mouthed frog!
function mouthSize(animal) {
    return /alligator/i.test(animal) ? 'small' : 'wide' ;
    // or
    // return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

// 204-Enumerable Magic - Does My List Include This?
function include(arr, item){
    return arr.includes(item);
    // or
    // let index = arr.findIndex(el => el === item);
    // return index !== -1;
}

// 205-Polish alphabet
function correctPolishLetters (string) {
    return string.replace(/[ąćęłńóśźż]/g,replacer =>`acelnoszz`['ąćęłńóśźż'.indexOf(replacer)]);
    // or
    // let dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    // return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}

// 206-Simple multiplication
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
    // or
    // if(number % 2 ===0 ){
    //     return number * 8;
    // }
    // else{
    //     return number * 9;
    // } 
}

// 207-Calculate BMI
function bmi(weight, height) {
    let bmi = weight / height **2;
    if(bmi <= 18.5){
        return 'Underweight';
    }else if(bmi <= 25){
        return 'Normal';
    }else if(bmi <= 30){
        return 'Overweight';
    }else{
        return 'Obese';
    }
    // or
    // let bmi = weight / height**2;
    // return bmi <= 18.5 ? 'Underweight' : bmi <= 25.0 ? 'Normal' : bmi <= 30.0 ? 'Overweight' : 'Obese';
}

// 208-Find the position!
function position(letter){
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
        'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let position = alphabet.indexOf(letter.toLowerCase()) +1;
    return `Position of alphabet: ${position}`;
    // or
    // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}

// 209-Grasshopper - Function syntax debugging
function main (verb, noun){
    return verb + noun;
    // or
    // return `${verb}${noun}`;
}

// 210-Calculate Price Excluding VAT
function excludingVatPrice(price){
    return price == null ? -1 : +(price / 1.15).toFixed(2);
    // or
    // if (price === null) return -1
    // return +((price / 1.15).toFixed(2));
}

// 211-Opposites Attract
function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 === 1){
        return true;
    }else if(flower2 % 2 === 0 && flower1 % 2 === 1){
        return true;
    }else{
        return false;
    }
    // or
    // return flower1 % 2 !== flower2 % 2;
}

// 212-Thinkful - Number Drills: Blue and red marbles
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let red= redStart - redPulled;
    let blue= blueStart - bluePulled;
    return blue / (blue + red);
    // or
    // let blue = blueStart - bluePulled;
    // let red = redStart - redPulled;
    // let all = blue + red;
    // return blue / all ;
}

// 213-Get Planet Name By ID
function getPlanetName(id){
    let name;
    switch(id){
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
        }
    return name;
    // or
    // return {
    //     1: 'Mercury',
    //     2: 'Venus',
    //     3: 'Earth',
    //     4: 'Mars',
    //     5: 'Jupiter',
    //     6: 'Saturn',
    //     7: 'Uranus',
    //     8: 'Neptune'
    // }[id]
}

// 214-Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    return sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) > pontoonDistance / youSpeed ? `Alive!` : `Shark Bait!`; 
    // or
    // if(dolphin){
    //     sharkSpeed /= 2;
    // }
    // return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

// 215-Function 1 - hello world
function greet(){
    return "hello world!";
    // or
    // return `hello world!`;
}

// 216-Remove String Spaces
function noSpace(x){
    return x.replaceAll(" ","");
    // or
    // return x.split(' ').join('');
}

// 217-Remove First and Last Character
function removeChar(str){
    return str.slice(1,-1);
    // or
    // let newArr = [];
    // for(let i = 1; i < str.length - 1; i++){
    //     newArr.push(str[i]);
    // }
    // return newArr.join('');
};

// 218-Is n divisible by x and y?
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
    // or
    // if (n % x === 0 && n % y === 0) {
    //     return true;
    // }
    // return false;
}

// 219-Never visit a . . . !?
function SubtractSum(n){
    const fruits = {
        1: "kiwi",
        2: "pear",
        3: "kiwi",
        4: "banana",
        5: "melon",
        6: "banana",
        7: "melon",
        8: "pineapple",
        9: "apple"
    };
    function sumOfDigits(num) {
        return num.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    }
    while (n >= 10) {
        let sum = sumOfDigits(n);
        n = n - sum;
    }
    return fruits[n];
    // or
    // const digitSum = (n + '').split('').reduce((res, v) => res + +v, 0);
    // return n - digitSum < 100 ? 'apple' : SubtractSum(n - digitSum);
}

// 220-Convert a Boolean to a String
function booleanToString(b){
    return b ? 'true' : 'false';
    // or
    // return b.toString();
}

// 221-Opposite number
function opposite(number) {
    return number * -1;
    // or
    // return(-number);
}

// 222-You Can't Code Under Pressure #1
function doubleInteger(i) {
    return i * 2;
    // or
    // i += i
    // return i;
}

// 223-Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    // or
    // return [...arguments].reduce((sum, item) => sum += item , 0)
}

// 224-Keep Hydrated!
function litres(time) {
    return Math.floor(time * .5);
    // or
    // return Math.floor(time / 2)
}

// 225-Reverse List Order
function reverseList(list) {
    return list.reverse();
    // or
    // let array = [];
    // for (let i = list.length-1; i >= 0; i --){
    //     array.push(list[i]);
    // }
    // return array;
}

// 226-You only need one - Beginner
function check(a, x) {
    return a.includes(x);
    // or
    // return a.indexOf(x) > -1;
}

// 227-Difference of Volumes of Cidsubo
function findDifference(a, b) {
    return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]));
    // or
    // return Math.abs(a.reduce((a,b)=>a*b) - b.reduce((a,b)=> a*b))
}

// 228-A Needle in the Haystack
function findNeedle(haystack) {
    const index = haystack.indexOf('needle');
    return `found the needle at position ${index}`;
    // or
    // for (let i=0; i<haystack.length; i++){
    //     if (haystack[i] === 'needle')
    //         return 'found the needle at position ' + i;
    // }
}

// 229-Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((num1,num2) => (num1-num2))));
    // or
    // let merge = arr1.concat(arr2);
    // merge = new Set(merge);
    // merge = Array.from(merge);
    // return merge.sort((num1,num2)=>num1 - num2);
}

// 230-Stringy Strings
function stringy(size) {
    let string = '';
    for(let i = 0; i < size; i++){
        if (i % 2 === 0){
            string += '1';
        }else{
            string += '0';
        }
    }
    return string;
    // or
    // let string = "";
    // for(let i = 1; i<=size; i++ ){
    //     string += i%2;
    // }
    // return string;
}

// 231-GrFunction Fixerasshopper - Basic 
function addFive(num) {
    let total = num + 5
    return total
    // or
    // return num + 5;
}

// 232-Name Shuffler
function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
    // or
    // let arr = str.split(" ");
    // return arr[1] + ' ' + arr[0];
}

// 233-Training JS #7: if..else and ternary operator
function saleHotdogs(n){
    if(n < 5) return n * 100;
    if(n < 10) return n * 95;
    return n * 90;
    // or
    // return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

// 234-Add Length
function addLength(str) {
    let words = str.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words[i] + ' ' + words[i].length);
    }
    return result;
    // or
    // return str.split(" ").map(s => `${s} ${s.length}`)
}

// 235-Sum of differences in array
function sumOfDifferences(arr) {
    let sorted = arr.sort((a,b)=>b-a);
    let total = 0;
    for (let i = 0; i < sorted.length -1; i++) {
        total += sorted[i] - sorted[i+1];
    }
    return total;
    // or
    // return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// 236-Sum of Multiples
function sumMul(n,m){
    if (n>=m) return 'INVALID';
    let total =0;
    let index = n;
    while(index < m){
        total += index;
        index += n;
    }
    return total;
    // or
    // if (n >= m) return "INVALID";
    // let sum = 0;
    // for (let i = n; i < m; i+=n) {
    //     sum += i;
    // }
    // return sum;
}

// 237-Unfinished Loop - Bug Fixing #1
function createArray(number){
    let newArray = [];
    for(let counter = 1; counter <= number; counter++){
        newArray.push(counter);
    }
    return newArray;
    // or
    // return Array.from({length:number},(_,index)=> index +1);
}

// 238-Name on billboard
function billboard(name, price = 30){
    let total = 0;
    for(let _ of name){
        total += price;
    }
    return total;
    // or
    // return name.split('').reduce((sum, letter) => sum + price, 0); 
}

// 239-Color Ghost
const Ghost = function() {
    this.color = ['white','yellow','red','purple'][Math.floor(Math.random() * 4)]
};
// or
// function Ghost() {
//     return {
//       color: ["white", "yellow", "purple", "red"][Math.floor((Math.random() * 4))]
//     }
// }

// 240-Closest elevator
function elevator(left, right, call){
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
    // or
    // const leftDist = Math.abs(left - call)
    // const rightDist = Math.abs(right - call)
    // return leftDist >= rightDist ? 'right' : 'left';
}

// 241-Smallest unused ID
function nextId(ids){
    return ids.sort((a,b)=>a-b).reduce((prev,curr)=>prev + (prev==curr),0);
    // or
    // let x = 0;
    // while (ids.includes(x)) x++;
    // return x;
}

// 242-Classy Extentions
class Cat extends Animal {
    speak(){
        return this.name + ' meows.';
    }
    // or
    // speak() {
    //     return `${this.name} meows.`;
    // }
}

// 243-Switch/Case - Bug Fixing #6
function evalObject(value){
    let result = 0;
    switch(value.operation){
        case'+': return result = value.a + value.b;
        case'-': return result = value.a - value.b;
        case'/': return result = value.a / value.b;
        case'*': return result = value.a * value.b;
        case'%': return result = value.a % value.b;
        case'^': return result = Math.pow(value.a, value.b);
    }
    return result;
    // or
    // let result = 0;
    // switch(value.operation){
    //     case'+': result = value.a + value.b;
    //         break;
    //     case'-': result = value.a - value.b;
    //         break;
    //     case'/': result = value.a / value.b;
    //         break;
    //     case'*': result = value.a * value.b;
    //         break;
    //     case'%': result = value.a % value.b;
    //         break;
    //     case'^': result = Math.pow(value.a, value.b);
    //         break;
    // }
    // return result;
}

// 244-Is your period late?
function periodIsLate(last, today, cycleLength) {
    const differenceInTime = today - last;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays > cycleLength;
    // or
    // return (today-last)/86400000>cycleLength;
}

// 245-Get Nth Even Number
function nthEven(n){
    return n * 2-2;
    // or
    // return (n-1)*2;
}

// 246-UEFA EURO 2016
function uefaEuro2016(teams, scores){
    if(scores[0] == scores[1]){
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
    }else if(scores[0] < scores[1]){
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
    }
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
    // or
    // return `At match ${teams[0]} - ${teams[1]}, ${scores[0] === scores[1] ? `teams played draw.` : `${scores[0] > scores[1] ? teams[0] : teams[1]} won!`}`;
}

// 247-Did she say hallo?
function validateHello(greetings) {
    return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
    // or
    // const messages = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
    // const lowerCaseGreetings = greetings.toLowerCase();
    // for (let i = 0; i < messages.length; i++) {
    //     if (lowerCaseGreetings.includes(messages[i])) {
    //     return true;
    //     }
    // }
    // return false;
}

// 248-Is it a number?
function isDigit(s) {
    return s == parseFloat(s);
    // or
    // return parseFloat(s) === Number(s);
}

// 249-Logical calculator
function logicalCalc(array, op){
    let result = array[0];
    for(let i = 1; i < array.length; i++){
        if(op == "AND"){
            result = result && array[i];
        }
        if(op == "OR"){
            result = result || array[i];
        }
        if(op == "XOR"){
            result = result != array[i];
        }
    }
    return result;
    // or
    // return !!array.reduce((prev,curr)=>op == 'AND'?prev && curr:op == 'OR' ? prev || curr : prev ^ curr);
}

// 250-Playing with cubes II
class Cube {
    constructor(side=0){
        this.side = Math.abs(side);
    }
    getSide() {
        return this.side; 
    }
    setSide(n) {
        this.side = Math.abs(n);
    }
    // or
    // constructor(side) {
    //     this.setSide(side)
    // }
    // getSide() {
    //     return this.side
    // }
    // setSide(n) {
    //     this.side = n ? Math.abs(n) : 0
    // }
}

// 251-Fun with ES6 Classes #1 - People, people, people
class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
    // or
    // constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    //     Object.assign(this, { firstName, lastName, age, gender });
    // }
    // sayFullName() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
    // static greetExtraTerrestrials(raceName) {
    //     return `Welcome to Planet Earth ${raceName}`;
    // }
}

// 252-Broken Counter
function Counter() {
    this.value = 0;
}
Counter.prototype.increase = function() {
    this.value++;
};
Counter.prototype.getValue = function() {
    return this.value;
};
Counter.prototype.reset = function() {
    this.value = 0;
};
// or
// class Counter {
// 	constructor() {
//         this.value = 0;
//     }
//     increase() {
//         this.value++;
//     };
//     getValue() {
//         return this.value;
//     };
//     reset() {
//         this.value = 0;
//     };
// }

// 253-Enumerable Magic #4 - True for None?
function none(arr, fun){
    return !arr.some(fun);
    // or
    // for (let i = 0; i < arr.length; i++) {
    //     if (fun(arr[i]) == true) {
    //         return false;
    //     }
    // }
    // return true;
}

// 254-Job Matching #1
function match(candidate, job) {
    if(!candidate.minSalary || !job.maxSalary){
        throw error;
    }else{
        return candidate.minSalary * .9 <= job.maxSalary;
    }
    // or
    // if (!job.maxSalary || !candidate.minSalary) throw TypeError('Missing salary');
    // return job.maxSalary >= (candidate.minSalary * .9);
}

// 255-Return Two Highest Values in List
function twoHighest(arr) {
    let unique = [...new Set(arr)];
    let sorted = unique.sort((a, b) => (a - b) * -1);
    if(sorted.length <= 2) return sorted;
    return sorted.slice(0, 2);
    // or
    // return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}

// 256-Hello, Name or World!
function hello(name) {
    if(!name){
        return 'Hello, World!';
    }else{
        return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
    }
    // or
    // return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

// 257-Student's Final Grade
function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10){
        return 100;
    }else if(exam > 75 && projects >= 5){
        return 90;
    }else if(exam > 50 && projects >= 2){
        return 75;
    }else{
        return 0;
    }
    // or
    // let score = 0;
    // switch (true) {
    //     case (exam > 90 || projects > 10):
    //         score = 100;
    //         break;
    //     case (exam > 75 && projects >= 5):
    //         score = 90;
    //         break;
    //     case (exam > 50 && projects >= 2):
    //         score = 75;
    //         break;
    //     default:
    //         score = 0;
    // }
    // return score;
}

// 258-Plural
function plural(n) {
    return n !=1;
    // or
    // return n === 1 ? false : true;
}

// 259-Grasshopper - Terminal Game Turn Function
function doTurn () {
    rollDice();
    move();
    combat();
    getCoins();
    buyHealth();
    printStatus();
    // or
    // let actions = [rollDice, move, combat, getCoins, buyHealth, printStatus];
    // actions.forEach(e => e());
}

// 260-pick a set of first elements
function first(arr, n) {
    return n == undefined ? arr.slice(0,1) : arr.slice(0,n);
    // or
    // const finalArr = [];
    // if(n === undefined){
    //     finalArr[0] = arr[0];
    // }else{ 
    //     for(let i = 0; i < n && i < arr.length; i++){
    //         finalArr.push(arr[i]);
    //     }
    // }
    // return finalArr;
}

// 261-Grasshopper - Array Mean
function findAverage(nums) {
    return nums.reduce((prev, curr) => prev + curr) / nums.length;
    // or
    // let sum = 0;
    // for (num in nums) {
    //     sum += nums[num];
    // }
    // return sum / (nums.length);
}

// 262-Parse float
function parseF(s) {
    return /\d/.test(s) ? +s :null;
    // or
    // return parseFloat(s) == +s ? parseFloat(s) : null;
}

// 263-Add new item (collections are passed by reference)
function addExtra( listOfNumbers ){
    return listOfNumbers.concat(['codeManS']);
    // or
    // return listOfNumbers.concat(0)
}

// 264-No zeros for heros
function noBoringZeros(n) {
    return +`${n}`.replace(/0+$/,'');
    // or
    // while(n%10==0 && n!=0){n/=10;}
    // return n;
}

// 265-Age Range Compatibility Equation
function datingRange(age){
    const lowerBound = Math.floor(age - 0.10 * age);
    const upperBound = Math.floor(age + 0.10 * age);
    const lowerMatch = Math.floor(age / 2 + 7);
    const upperMatch = Math.floor((age - 7) * 2);
    return age <= 14 ? `${lowerBound}-${upperBound}` : `${lowerMatch}-${upperMatch}`;
    // or
    // return age <= 14 ? `${Math.floor(age - 0.10 * age)}-${Math.floor(age + 0.10 * age)}` : `${Math.floor(age/2 + 7)}-${Math.floor((age-7) * 2)}`;
}

// 266-NBA full 48 minutes average
function pointsPer48(ppg, mpg) {
    return (ppg && mpg) ? parseFloat(((ppg * 48) / mpg).toFixed(1)) : 0;
    // or
    // return +(ppg * 48 /mpg).toFixed(1) || 0;
}

// 267-simple calculator
function calculator(a,b,sign){
    if ((typeof a === "number") && (typeof b === "number")) {
        switch (sign) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        }
    }
    return "unknown value";
    // or
    // return typeof a == 'number' && typeof b == 'number' && ['+','-','*','/'].includes(sign) ? sign == '+' ? a + b : sign == '-' ? a - b : sign == '*' ? a * b : a / b : 'unknown value';
}

// 268-ASCII Total
function uniTotal (string) {
    return string.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    // or
    // let count = 0;
    // for (let i = 0; i < string.length; i++) {
    //     count += string.charCodeAt(i);
    // }
    // return count;
}

// 269-Are there any arrows left?
function anyArrows(arrows){
    return arrows.some( element => !element.damaged);
    // or
    // return arrows.some(element => element.damaged ? false: true)
}

// 270-Enumerable Magic #2 - True for Any?
function any(arr, fun){
    return arr.some(fun);
    // or
    // for (let i=0; i<arr.length; ++i)
    //     if (fun(arr[i]))
    //         return true;
    // return false;
}

// 271-Simple Fun #261: Whose Move
function whoseMove(lastPlayer, win) {
    if (win) {
        return lastPlayer; 
    } else {
        return lastPlayer === "black" ? "white" : "black";
    }
    // or
    // const opp = lastPlayer === 'black' ? 'white' : 'black';
    // return  win ? lastPlayer : opp;
}

// 272-Compare within margin
function closeCompare(a, b, margin){
    if(margin === undefined) margin = 0;
    if(Math.abs(a - b) <= margin){
        return 0;
    }
    return a < b ? -1 : 1;
    // or
    // if(a == b || Math.abs(a - b) <= margin){
	// 	return 0
	// }
	// return a > b ? 1 : -1;
}

// 273-Classy Classes
class Person {
    constructor(name,age) {
        this.info = `${name}s age is ${age}`;
    }
    // or
    // constructor(name,age) {
    //     this.name = name;
    //     this.age  = age;
    // }
    // get info() {
    //     return this.name + "s age is " +this.age
    // }
}

// 274-OOP: Object Oriented Piracy
class Ship {
    constructor(draft, crew) {
        this.draft = draft
        this.crew = crew
    }
    isWorthIt() {
        return this.draft - this.crew * 1.5 > 20
    }
    // or
    // constructor(draft, crew) {
    //     this.draft = draft
    //     this.crew = crew
    // }
    // isWorthIt(){
    //     let crewWgt = this.crew * 1.5
    //     return this.draft - crewWgt > 20
    // }
}

// 275-BASIC: Making Six Toast.
function sixToast(num) {
    return Math.abs(num - 6);
    // or
    // return num >= 6 ? num - 6 : num;
}

// 276-SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
    return a.reduce((acc, num) => acc + num ** 2, 0) > b.reduce((acc, num) => acc + num ** 3, 0);
    // or
    // let sum1=0;
    // let sum2=0;
    // for (let n of a) {
    //     sum1 += n*n;
    // }
    // for (let n of b) {
    //     sum2 += n*n*n;
    // }
    // return (sum1 > sum2);
}

// 277-Evil or Odious
function evil(n) {
    return n.toString(2).replace(/0/g,'').length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
    // or
    // let count = 0
    // while (n > 0) {
    //     n &= (n - 1)
    //     count++
    // }
    // return (count % 2 == 0) ? "It's Evil!" : "It's Odious!";
}

// 278-get ascii value of character
function getASCII(c){
    return c.charCodeAt(0);
    // or
    // return [...c].map(char => char.charCodeAt()).reduce((curr, prev) => prev + curr)
}

// 279-Find the sum of the roots of a quadratic equation
function roots(a,b,c){
    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return null;
    }
    let sumOfRoots = -b / a;
    return +sumOfRoots.toFixed(2);
    // or
    // return b ** 2 - 4 * a * c < 0 ? null : -(b / a).toFixed(2)
} 

// 280-Sort and Star
function twoSort(s) {
    s.sort();
    let first = s[0];
    return first.split('').join('***');
    // or
    // return s.sort()[0].split('').join('***');
}

// 281-Take the Derivative
function derive(coefficient,exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`;
    // or
    // const product = coefficient * exponent;
    // const newExponent = exponent - 1;
    // return `${product}x^${newExponent}`;
}

// 282-Training JS #5: Basic data types--Object
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
    // or
    // let {color,name,legs} = obj;
    // return `This ${color} ${name} has ${legs} legs.`;
}

// 283-Localize The Barycenter of a Triangle
function barTriang(p1, p2, p3) {
    let xO = (p1[0] + p2[0] + p3[0]) / 3;
    let yO = (p1[1] + p2[1] + p3[1]) / 3;
    return [parseFloat(xO.toFixed(4)), parseFloat(yO.toFixed(4))];
    // or
    // let x = (p1[0] + p2[0] + p3[0]) / 3;
    // let y = (p1[1] + p2[1] + p3[1]) / 3;
    // x = x.toFixed(4);
    // y = y.toFixed(4);
    // return [Number(x), Number(y)];
}

// 284-Invalid Login - Bug Fixing #11
function validate(username, password){
    return password.indexOf("||") > -1 || password.indexOf('//') > -1 ? "Wrong username or password!" : new Database().login(username, password);
    // or
    // let database = new Database();
    // return database.login(username, encodeURI(password));
}

// 285-Remove First and Last Character Part Two
function array(string) {
    let nums = string.split(',');
    let str = nums.slice(1,nums.length - 1).join(' ');
    if (str === '') return null;
    return str;
    // or
    // return string.split(",").slice(1,-1).join(" ") || null;
}

// 286-Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);
    // or
    // let totalObstructedRows = nRows - row;
    // let totalObstructedCols = nCols - (col - 1);
    // return totalObstructedRows * totalObstructedCols;
}

// 287-Take an Arrow to the knee, Functionally
const ArrowFunc = function(arr) {
    return arr.map(ele => String.fromCharCode(ele)).join(''); //Complete this function
    // or
    // return String.fromCharCode(...arr)
}

// 288-Online RPG: player to qualifying stage?
function playerRankUp (points) {
    return points > 99 ? 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.' : false;
    // or
    // if (points < 100) {
    //     return false;
    // }
    // return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
}

// 289-Alan Partridge II - Apple Turnover
function apple(x){
    if (x * x > 1000) {
        return "It's hotter than the sun!!";
    } else {
        return "Help yourself to a honeycomb Yorkie for the glovebox.";
    }
    // or
    // return x * x > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

// 290-Bin to Decimal
function binToDec(bin) {
    return parseInt(bin, 2);
    // or
    // return +`0b${bin}`
}

// 291-Filter out the geese
function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird=> !geese.includes(bird));
    // or
    // let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // return birds.filter( bird => geese.indexOf(bird) < 0 );
};

// 292-Regular Ball Super Ball
const Ball = function(ballType) {
    this.ballType = ballType || 'regular';
    // or
    // this.ballType = typeof ballType !== 'undefined' ? ballType : 'regular';
};

// 293-Return to Sanity
function mystery() {
    let results = {sanity: 'Hello'};
    return results;
    // or
    // return {sanity: 'Hello'};
}

// 294-String Templates - Bug Fixing #5
function buildString(...template){
    return `I like ${template.join(', ')}!`;
    // or
    // return 'I like '+template.join(', ')+"!";
}

// 295-Who ate the cookie?
function cookie(x){
    return typeof x === 'string' ? 'Who ate the last cookie? It was Zach!' : typeof x === 'number' ? 'Who ate the last cookie? It was Monica!' : 'Who ate the last cookie? It was the dog!';
    // or
    // return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}

// 296-Find the Integral
function integrate(coefficient, exponent) {
    return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
    // or
    // return coefficient / (exponent + 1) + "x^" + (exponent + 1);
}

// 297-To square(root) or not to square(root)
function squareOrSquareRoot(array) {
    return array.map(num => Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num * num);
    // or
    // return array.map(x => {
    //     const r = Math.sqrt(x);
    //     return (r % 1 == 0) ? r : (x*x);
    // });
}

// 298-Who is going to pay for the wall?
function whoIsPaying(name) {
    if (name.length <= 2) {
        return [name];
    }
    return [name, name.slice(0, 2)];
    // or
    // return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}

// 299-Multiplication table for number
function multiTable(number) {
    let table = '';
    for(let i = 1; i <= 10; i++){
        table += `${i} * ${number} = ${i*number}\n`
    }
    return table.slice(0, -1)
    // or
    // return [...Array(10).keys()].map(i => `${i + 1} * ${number} = ${(i + 1) * number}`).join('\n');
}

// 300-How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
    return name === "Zach" ? 18 : 0;
    // or
    // if (name === "Zach"){
    //     return 18;
    // } else {
    //     return 0;
    // }
}

// 301-What's the real floor?
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
    // or
    // if (n <= 0) {
    //     return n;
    // } else if (n < 13) {
    //     return n - 1;
    // } else {
    //     return n - 2;
    // }
}

// 302-Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
    return(Math.floor(hol / normPrice / discount * 100))
    // or
    // if (hol) {
    //     return Math.floor(hol / (normPrice * discount / 100));
    // } else {
    //     return 0;
    // }
}

// 303-Capitalization and Mutability
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
    // or
    // const first = word[0].toUpperCase()
    // return first + word.slice(1)
}

// 304-Are arrow functions odd?
function odds(values){
    return values.filter(x => x % 2 !== 0);
    // or
    // return values.filter(x => x % 2);
}

// 305-Be Concise I - The Ternary Operator
function describeAge(age) {
    return "You're a(n) " + (age <= 12 ? "kid" : age <= 17 ? "teenager" : age <= 64 ? "adult" : "elderly");
    // or
    // if (age <= 12) {
    //     return "You're a(n) kid";
    // } else if (age >= 13 && age <= 17) {
    //     return "You're a(n) teenager";
    // } else if (age >= 18 && age <= 64) {
    //     return "You're a(n) adult";
    // } else {
    //     return "You're a(n) elderly";
    // }
}

// 306-Find the first non-consecutive number
function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);
    return (Number.isInteger(result)) ? result : null;
    // or
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] - arr[i - 1] !== 1) {
    //         return arr[i];
    //     }
    // }
    // return null;
}

// 307-L1: Set Alarm
function setAlarm(employed, vacation){
    return employed && !vacation;
    // or
    // return (employed && !vacation) ? true : false;
}

// 308-Grasshopper - Check for factor
function checkForFactor (base, factor) {
    return base % factor === 0;
    // or
    // let check = base % factor
    // if(check == 0){
    //     return true
    // }
    // return false
}

// 309-Beginner Series #2 Clock
function past(h, m, s){
    return (h * 3600 + m * 60 + s) * 1000;
    // or
    // return h *3600000 + m * 60000 + s * 1000;
}

// 310-Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
    // or
    // return Math.abs(2 * sonYearsOld - dadYearsOld);
}

// 311-Area or Perimeter
const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : 2 * l + w * 2;
    // or
    // if(l === w){
    //     return l * w;
    // }else{
    //     return 2 * l + w * 2;
    // }
};

// 312-Jenny's secret message
function greet(name){
    if(name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
    // or
    // return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}

// 313-Training JS #10: loop statement --for
function pickIt(arr){
    let odd = [], even = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2){
            odd.push(arr[i])
        }else{
            even.push(arr[i])
        }
    }
    return [odd,even];
    // // or
    // let odd = [], even = [];
    // for (let num of arr) num & 1 ? odd.push(num) : even.push(num);
    // return [odd,even];
}

// 314-Grasshopper - Personalized Message
function greet (name, owner) {
    return 'Hello ' + (name == owner ? 'boss' : 'guest');
    // or
    // return name === owner ? 'Hello boss' : 'Hello guest';
}

// 315-Triple Trouble
function tripleTrouble(one, two, three){
    let result = '';
    for (let i = 0; i < one.length; i++) {
        result += one[i] + two[i] + three[i];
    }
    return result;
    // or
    // return one.split('').map((l, p)=>one[p]+two[p]+three[p]).join('');
}

// 316-Quarter of the year
const quarterOf = (month) => {
    return Math.ceil(month  / 3);
    // or
    // if(month <= 3) return 1;
    // if(month <= 6) return 2;
    // if(month <= 9) return 3;
    // if(month <= 12) return 4;
}

// 317-Collatz Conjecture (3n+1)
const hotpo = function(n){
    return n < 2 ? 0 : hotpo(n% 2 ? 3*n+1 : n/2) + 1;
    // or
    // const rs=0;
    // while (n>1){
    //     rs++;
    //     n=n%2?n*3+1:n/2;
    // }
    // return rs;
}

// 318-Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
    return sperm === 'XY' ? `Congratulations! You're going to have a son.` : `Congratulations! You're going to have a daughter.`;
    // or
    // return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}

// 319-5 without numbers !!
function unusualFive() {
    return "hello".length;
    // or
    // return ['one','two','three','four','five'].length;
}

// 320-Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(string, separator) {
    return string.split(' ').map(ele=>ele.split('').join(separator)).join(' ');
    // or
    // const outStr = string
	// 	.split(' ')
	// 	.map((el) => el.split(''))
	// 	.map((el) => el.join(separator))
	// 	.join(' ');
	// return outStr;
}

// 321-Training JS #1: create your first JS function and print "Hello World!"
function helloWorld() {
    return /*var str*/ console.log('Hello World!');
    // or
    // var str = "Hello World!";
    // console.log( str );
}

// 322-Is it a palindrome?
function isPalindrome(x) {
    return x.split('').reverse().join('').toLowerCase() == x.toLowerCase();
    // or
    // return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

// 323-What's up next?
function nextItem(xs, item) {
    let next = false
    for(let testing of xs){
        if(next){
            return testing
        }
        next = testing == item
    }
    // or
    // const array = xs[Symbol.iterator]()
    // for(let element of array){
    //     if(element == item){
    //         return array.next().value
    //     }
    // }
}

// 324-Multiple of index
function multipleOfIndex(array) {
    return array.filter((ele, index) => ele % index ===0 || ele == 0);
    // or
    // let res = []
    // if(array[0] === 0){
    //     res.push(array[0])
    // }
    // for(let i = 1; i < array.length; i++){
    //     if(array[i] % i === 0){
    //         res.push(array[i])
    //     }
    // }
    // return res
}

// 325-Quadratic Coefficients Solver
function quadratic(x1, x2){
    return [1,-(x1+x2),x1*x2];
    // or
    // const b = -x2-x1;
    // const c = x1*x2
    // return [1, b, c];
}

// 326-Third Angle of a Triangle
function otherAngle(a, b) {
    return 180 - a - b;
    // or
    // return 180-(a+b);
}

// 327-Area of a Square
function squareArea(A) {
    const pi = Math.PI;
    let r = A / (pi / 2);
    let area = r * r;
    return Math.round(area * 100) / 100;
    // or
    // return Math.round(Math.pow(A*2/Math.PI,2) * 100) /100;
}

// 328-How much water do I need?
function howMuchWater(water, load, clothes){
    return clothes < load ? 'Not enough clothes' : clothes > 2 * load ? 'Too much clothes' : +(water * 1.1 ** (clothes -load)).toFixed(2);
    // or
    // if(clothes < load){
    //     return 'Not enough clothes'
    // }else if(clothes > 2 * load){
    //     return 'Too much clothes'
    // }else{
    //     return (water * 1.1 ** (clothes - load)).toFixed(2)
    // }
}

// 329-Neutralisation
function neutralise(s1, s2) {
    let result = "";
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === "+" && s2[i] === "+") {
            result += "+";
        } else if (s1[i] === "-" && s2[i] === "-") {
            result += "-";
        } else {
            result += "0";
        }
    }
    return result;
    // or
    // let result = "";
    // for(let i = 0; i < s1.length; i++) {
    //     result += s1[i] !== s2[i]? "0": s1[i];
    // }
    // return result;
}

// 330-Pythagorean Triple
function isPythagoreanTriple(integers) {
    let [a,b,c] = integers.sort((a,b)=> a-b);
    return a ** 2 + b ** 2 == c ** 2;
    // or
    // let massiv = integers.sort((a, b) => a - b)
    // return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
}

// 331-Grasshopper - If/else syntax debug
function checkAlive (health) {
    if (health > 0) {
        return true ;
    }else{
        return false;
    }
    // or
    // return health > 0;
}

// 332-Push a hash/an object into array
items = [{a: "b", c: "d"}];
// or
// let items = [];
// items.push({ a: "b", c: "d" });

// 333-No Loops 2 - You only need one
function check(a,x){
    return a.includes(x);
    // or
    // return a.some(v=>v==x);
}

// 334-Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(arr){
    return [].concat(...arr).sort((a,b)=>b-a).join('>');
    // or
    // let res = arr.flat()
    // let bigToSmallArray = res.sort((a,b) => b-a)
    // return bigToSmallArray.join('>')
}

// 335-Power
function numberToPower(number, power){
    let result = 1;
    for(let i = 1;i <= power;i++){
        result *= number;
    }
    return result;
    // or
    // if (power === 0) return 1;
    // return number * numberToPower(number, power - 1);
}

// 336-Incorrect division method
const solve = (x, y) => {
    x / y;
    // or
    // let result = x/y;
    // return result;
}

// 337-Training JS #9: loop statement --while and do..while
function padIt(str,n){
    // while
    return '*'.repeat((n+1)/2) + str + '*'.repeat(n/2);
    // or
    // while(n>0){
    //     if(n%2 === 0) {
    //         str = str + "*";
    //     }else{
    //         str = "*" + str;
    //     }
    //     n --;
    // }
    // return str;
}

// 338-Title: Function to Compute the Mirror Product Sum of an Array
function mirrorProduct(arr){
    let sum = 0;
    let numbers = arr.length;
    const mid = Math.ceil(numbers / 2);
    for(let i =0;i<mid;i++){
        let index = numbers -i-1;
        sum += arr[i] * arr[index];
    }
    return sum;
    // or
    // let sum = 0;
    // for (let i = 0; i < arr.length / 2; i++) {
    //     sum += arr[i] * arr[arr.length - 1 - i];
    // }
    // return sum;
}

// 339-For Twins: 1. Types
function typeValidation(variable, type) {
    return typeof variable === type;
    // or
    // if(typeof(variable) === type) {
    //     return true;
    // }
    // return false;
}

// 340-The falling speed of petals
function sakuraFall(v) {
    return v <= 0 ? 0 : 400 / v;
    // or
    // const t = 400 / v
    // if (v <= 0){
    //     return 0
    // }
    // return t;
}

// 341-Unexpected parsing
function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
        status: msg
    }
    // or
    // return ({ status: isBusy ? "busy" : "available" });
}

// 342-Count words
function countWords(str) {
    return str.split(/\s/).filter(ele=>ele).length;
    // or
    // str = str.trim();
    // if (str === '') return 0;
    // return str.split(/\s+/).length;
}

// 343-Implement Array.prototype.filter()
Array.prototype.filter = function (func) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
    // or
    // let result = [];
    // this.forEach(number => {
    //     if(func(number)){
    //         result.push(number);
    //     }
    // });
    // return result;
}

// 344-ES6 string addition
function joinStrings(string1, string2){
    return `${string1} ${string2}`;
    // or
    // const arr = [];
    // arr.push(string1, string2);
    // if (arr.toString() === 'a,,b') return 'a, b';
    // return arr.toString().replace(/,/, ' ');
}

// 345-Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(arr){
    const result = [];
    let shortLength;
    for(let i =0;i< arr.length;i++){
        if(shortLength < arr[i].length){
            shortLength = shortLength;
        }else{
            shortLength = arr[i].length;
        }
    }
    for(i=0;i<arr.length;i++){
        result.push(arr[i].slice(0,shortLength));
    }
    return result;
    // or
    // const minLength = Math.min(...arr.map(str => str.length));
    // return arr.map(str => str.slice(0, minLength));
}

// 346-Training JS #13: Number object and its properties
function whatNumberIsIt(n){
    return Number.isNaN(n) ? 'Input number is Number.NaN' :
    n === Number.POSITIVE_INFINITY ? 'Input number is Number.POSITIVE_INFINITY' :
    n === Number.NEGATIVE_INFINITY ? 'Input number is Number.NEGATIVE_INFINITY' :
    n === Number.MAX_VALUE ? 'Input number is Number.MAX_VALUE' :
    n === Number.MIN_VALUE ? 'Input number is Number.MIN_VALUE' :
    `Input number is ${n}`;
    // or
    // switch (true) {
    //     case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    //     case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    //     case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    //     case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    //     case (isNaN(n)): return "Input number is Number.NaN";
    //     default: return "Input number is " + n;
    // }
}

// 347-Do something "n.times" (Simplifying "for" loops)
Number.prototype.times = function (f) {
    let i =0;
    while(i<this) {
        f(i);
        i++
    }
    // or
    // for (let i = 0; i < this; i++) {
    //     f(i);
    // }
}

// 348-Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n){
    return (difference => difference < 0 ? Math.ceil(n) : difference > 0 ? Math.floor(n) : Math.round(n))
    (String(n).split('.').reduce((prev,curr)=>prev.length - curr.length));
    // or
    // const a = String(n).split('.')
    // if (a[0].length < a[1].length) return Math.ceil(n)
    // if (a[0].length > a[1].length) return Math.floor(n)
    // return Math.round(n);
}

// 349-Aspect Ratio Cropping - Part 1
function aspectRatio(x,y){
    return [Math.ceil(16/9 *y),y];
    // or
    // let xNew = Math.ceil((16/9)* y)
    // return [xNew, y]
}

// 350-!a == a ?!
const a = []
// or
// const a = '0';

// 351-Ensure question
function ensureQuestion(s) {
    return s.endsWith('?') ? s : `${s}?`;
    // or
    // return s.includes('?') ? s : `${s}?`;
}

// 352-Semi-Optional
function wrap(value) {
    return{
        value:value 
    };
    // or
    // return {value};
}

// 353-Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
function firstToLast(str,c){
    return str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
    // or
    // let first = str.indexOf(c);
    // let last = str.lastIndexOf(c);
    // return first === -1 ? -1 : last - first;
}

// 354-Grasshopper - Object syntax debug
let rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient'
        }
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water'
        },
    }
}

// 355-Training JS #14: Methods of Number object--toString() and toLocaleString()
function colorOf(r,g,b){
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
    // or
    // return '#' + [r,g,b].map(x => ('0' + x.toString(16)).slice(-2)).join('');
}

// 356-Is integer safe to use?
function SafeInteger(n) {
    return Number.isSafeInteger(n);
    // or
    // return Number.isInteger(n) && Math.abs(n) <= Number.MAX_SAFE_INTEGER;
}

// 357-Not so black box
JSopenSesame();
// or
// blackBox();
// console.log(blackBox + "string")
// JSopenSesame()

// 358-Training JS #34: methods of Math---pow() sqrt() and cbrt()
function cutCube(volume,n){
    let cube = Math.cbrt(volume);
    let cut = Math.cbrt(n);
    return cut % 1 === 0 && cube % cut === 0;
    // or
    // return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume /n) %1);
}

// 359-Training JS #21: Methods of String object--trim() and the string template
function fiveLine(s){
    return [...Array(5)].map((_,index)=> s.trim().repeat(index + 1)).join('\n');
    // or
    // let str = s.trim();
    // let result = '';
    // for (let i = 1; i <= 5; i++) {
    //     result += str.repeat(i) + '\n';
    // }
    // return result.slice(0, -1);
}

// 360-Configure package json for a node application
const configuration = {
    "name": "your-pack-name",
    "description": "",
    "version": "1.0.0",
    "devDependencies": {
        "express": "^4.17.1"
    },
};
// or
// const configuration = {
//     "name": "your-pack-name",
//     "version": "1.1.1"
//   };

// 361-They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
function isOpposite(s1,s2){
    return !!s1 && s2 == s1.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
    // or
    // if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
    // for(let i = 0; i < s1.length; i++) {
    //     if(s1.charAt(i) === s2.charAt(i)) return false;
    // }
    // return true;
}

// 362-Blood-Alcohol Content
function bloodAlcoholContent(drinks, weight, sex, time){
    const r = sex === 'male' ? 0.73 : 0.66
    const bac = drinks.ounces * drinks.abv * 5.14 / weight * r - 0.015 * time;
    return Number(bac.toFixed(4));
    // or
    // let r = 0;
    // if (sex == 'male'){
    //     r = 0.73;
    // }else{
    //     r = 0.66;
    // }
    // let bac = (drinks.ounces * drinks.abv * 5.14 / weight * r) - 0.015 * time;
    // return +bac.toFixed(4);
}

// 363-Simple Comparison?
function add(a, b){
    return a == b;
    // or
    // return (a == b ? true: false)
}

// 364-Grasshopper - Order of operations
function orderOperations () {
    return (2 + 2) * (2 + 2) * 2;
    // or
    // return 2 + 2 * 2 + 2 * 2 + 22;
}

// 365-Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
    // or
    // const circumference = 2*circle.radius*Math.PI;
    // return Number(circumference.toFixed(6)); 
}

// 366-Regexp Basics - is it a digit?
String.prototype.digit = function() {
    return /^\d$/.test(this);
    // or
    // return this.match(/^[0-9]$/) ? true : false;
};

// 367-Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
function blackAndWhite(arr) {
    if (!Array.isArray(arr)) {
        return "It's a fake array";
    }
    if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
        return "It's a black array";
    }
    return "It's a white array";
    // or
    // return `It's a ${!Array.isArray(arr) ? `fake` : arr.includes(5) && arr.includes(13) ? `black` : `white`} array`;
}

// 368-Improving Math.round(x)
Math.roundTo = function (number, precision) {
    if (precision < 0) {
        return Math.round(number);
    }
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
    // or
    // return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}

// 369-Shifty Closures
const greet = name => () => `Hello, ${name}!`;
const greet_abe = greet(`Abe`);
const greet_ben = greet(`Ben`);
// or
// let name = 'Abe'
// const greetAbe = () => 'Hello, ' + name + '!'
// let newName = 'Ben'
// const greetBen = () => 'Hello, ' + newName + '!'

// 370-Find variable which breaks strict comparison!
function findStrangeValue() {
    return NaN;
    // or
    // return parseInt("");
}

// 371-Potenciation
function power(x,y){
    return x != 0 || y != 0 ? x ** y : 1;
    // or
    // if (x != 0 || y != 0) {
    //     return x ** y;
    // } else {
    //     return 1;
    // }
}

// 372-Be Concise III - Sum Squares
const sumSquares = (array) => {
    return array.reduce((sum, num) => sum + num ** 2, 0);
    //or
    // return array.reduce((sum, num) => sum + Math.pow(num, 2), 0);
};

// 373-Looking for a benefactor
function newAvg(arr, newavg) {
    let result = (arr.length + 1) * newavg - arr.reduce((sum, num) => sum + num, 0);
    if (result <= 0) {
        throw new Error("Expected New Average is too low");
    }
    return Math.ceil(result);
    // or
    // let result = (arr.length + 1) * newavg;
    // for(let index = 0; index < arr.length; index++){
    //     result -= arr[index];
    // }
    // if (result <= 0) {
    //     throw new Error("Expected New Average is too low");
    // }
    // return Math.ceil(result);
}

// 374-The Poet And The Pendulum
function pendulum(values) {
    values.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (i % 2 === 0) {
            result.unshift(values[i]);
        } else {
            result.push(values[i]);
        }
    }
    return result;
    // or
    // const sorted = [...values].sort((a, b) => a - b);
    // const n = values.length;
    // const result = Array(n);
    // let mid = Math.floor((n - 1) / 2);
    // let left = mid;
    // let right = mid + 1;
    // for (let i = 0; i < n; i++) {
    //     if (i % 2 === 0) {
    //         result[left--] = sorted[i];
    //     } else {
    //         result[right++] = sorted[i];
    //     }
    // }
    // return result;
}

// 375-Sort rectangles and circles by area II
function sortByArea(array) {
    return [...array].sort((a, b) => {
        const areaA = Array.isArray(a) ? a[0] * a[1] : Math.PI * a * a;
        const areaB = Array.isArray(b) ? b[0] * b[1] : Math.PI * b * b;
        return areaA - areaB;
    });
    // or
    // return array.map(item => ({
    //     shape: item,
    //     area: Array.isArray(item) ? item[0] * item[1] : Math.PI * item * item
    // })).sort((a, b) => a.area - b.area).map(obj => obj.shape);
}

// 376-Unpacking Arguments
function spread(func, args) {
    return func(...args);
    // or
    // return func.apply(null, args);
}

// 377-Sum of all arguments
function sum() {
    return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
    // or
    // return [...arguments].reduce((acc, curr) => acc + curr, 0);
}

// 378-Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
    return list.some(person => person.language === 'Ruby');
    // or
    // return list.find(x => x.language == 'Ruby') ? true : false;
}

// 379-Sum of powers of 2
const powers = n => {
    let result = [];
    let power = 0;
    while (n > 0) {
        if (n % 2 === 1) {
            result.push(2 ** power);
        }
        n = Math.floor(n / 2);
        power++;
    }
    return result.sort((a, b) => a - b); 
    // or
    // let result = [];
    // let power = 0;
    // while (2 ** power <= n) {
    //     power++;
    // }
    // for (let i = power - 1; i >= 0; i--) {
    //     const value = 2 ** i;
    //     if (n >= value) {
    //         result.push(value);
    //         n -= value;
    //     }
    // }
    // return result.sort((a, b) => a - b);
};

// 380-Numbers Which Sum of Powers of Its Digits Is The Same Number
function eqSumPowdig(hMax, exp) {
    let result = [];
    for (let num = 10; num <= hMax; num++) {
        let sum = 0;
        let digits = num.toString().split('');
        for (let digit of digits) {
            sum += Math.pow(parseInt(digit), exp);
        }
        if (sum === num) {
            result.push(num);
        }
    }
    return result;
    // or
    // let result = [];
    // for (let num = 10; num <= hMax; num++) {
    //     let sum = num
    //         .toString()
    //         .split('')
    //         .map(digit => Math.pow(parseInt(digit), exp))
    //         .reduce((acc, curr) => acc + curr, 0);
        
    //     if (sum === num) {
    //         result.push(num);
    //     }
    // }
    // return result;
}

// 381-Tricky Doubles
function trickyDoubles(n) {
    const str = n.toString();
    const len = str.length;
    if (len % 2 === 0) {
        const half = len / 2;
        const firstHalf = str.slice(0, half);
        const secondHalf = str.slice(half);
        if (firstHalf === secondHalf) {
            return n;
        }
    }
    return n * 2;
    // or
    // let s = n.toString(), sh = s.slice(s.length / 2);
    // return sh + sh == s ? n : n * 2;
}

// 382-Find Count of Most Frequent Item in an Array
function mostFrequentItemCount(collection) {
    const countMap = {};
    let maxCount = 0;
    let mostFrequentItem = null;

    for (const item of collection) {
        countMap[item] = (countMap[item] || 0) + 1;
        if (countMap[item] > maxCount) {
            maxCount = countMap[item];
            mostFrequentItem = item;
        }
    }
    return maxCount;
    // or
    // if (collection.length === 0) return 0;
    // let count = Object.create(null);
    // collection.forEach( item => {
    //     count[item] = (count[item] || 0) + 1;
    // });
    // return Math.max(...Object.values(count));
}

// 383-Password validator
function password(str) {
    const hasUpperCase = /[A-Z]/.test(str);
    const hasLowerCase = /[a-z]/.test(str);
    const hasNumber = /[0-9]/.test(str);
    const hasMinLength = str.length >= 8;
    return hasUpperCase && hasLowerCase && hasNumber && hasMinLength;
    // or
    // return str.length >= 8 && /[a-z]/.test(str) && /[A-Z]/.test(str) && /\d/.test(str);
}

// 384-Sort arrays - 1
sortme = function( names ){
    return names.sort();
    // or
    // return names.sort((a, b) => a.localeCompare(b));
}

// 385-Say hello!
function greet(name) {
    if(!name) return null;
    return `hello ${name}!`;
    // or
    // if(!name) return null;
    // return 'hello ' + name + '!';
}

// 386-Latin Squares
function makeLatinSquare(n) {
    let square = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push((i + j) % n + 1);
        }
        square.push(row);
    }
    return square;
    // or
    // let square = new Array(n).fill(0).map(() => new Array(n).fill(0))
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) {
    //     square[i][j] = ((i + j) % n) + 1
    //     }
    // }
    // return square;
}

// 387-Filter unused digits
function unusedDigits() {
    const allDigits = '0123456789';
    const usedDigits = Array.from(arguments).join('').split('');
    return allDigits.split('').filter(d => !usedDigits.includes(d)).join('');
}
// or
// function unusedDigits(...args){
//     return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
// }

// 388-Mirroring cipher
function pernicious(n) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    function hammingWeight(num) {
        return num.toString(2).split('1').length - 1;
    }
    if (n <= 0) return "No pernicious numbers";
    
    let limit = Math.floor(n);
    let perniciousNumbers = [];
    
    for (let i = 1; i <= limit; i++) {
        let digitSum = hammingWeight(i);
        if (isPrime(digitSum)) {
            perniciousNumbers.push(i);
        }
    }
    if (perniciousNumbers.length > 0) {
        return perniciousNumbers;
    } else {
        return "No pernicious numbers";
    }
    // or
    // if (n <= 0) return "No pernicious numbers";
    // let sieve = Array(33).fill(true);
    // sieve[0] = sieve[1] = false;
    // for (let i = 2; i <= Math.sqrt(32); i++) {
    //     if (sieve[i]) {
    //         for (let j = i * i; j <= 32; j += i) {
    //             sieve[j] = false;
    //         }
    //     }
    // }

    // function hammingWeight(num) {
    //     let count = 0;
    //     while (num) {
    //         count += num & 1;
    //         num >>= 1;
    //     }
    //     return count;
    // }

    // let limit = Math.floor(n);
    // let perniciousNumbers = [];

    // for (let i = 1; i <= limit; i++) {
    //     let digitSum = hammingWeight(i);
    //     if (sieve[digitSum]) {
    //         perniciousNumbers.push(i);
    //     }
    // }
    // return perniciousNumbers.length > 0 ? perniciousNumbers : "No pernicious numbers";
}

// 389-Simple Fun #176: Reverse Letter
function reverseLetter(str) {
    return str.split('').filter(c => /[a-zA-Z]/.test(c)).reverse().join('');
    // or
    // return str.split('').filter(c => c.match(/[a-zA-Z]/)).reverse().join('');
}

// 390-Family Relations
function relations(familyArray, targetPair) {
    const [a, b] = targetPair;
    const parent = {}, grandparent = {};

    for (let [mom, child] of familyArray) {
        parent[child] = mom;
    }
    for (let child in parent) {
        if (parent[parent[child]]) {
        grandparent[child] = parent[parent[child]];
        }
    }
    return parent[a] === b ? 'Mother' :
            parent[b] === a ? 'Daughter' :
            grandparent[a] === b ? 'Grandmother' :
            grandparent[b] === a ? 'Granddaughter' :
            parent[a] && parent[b] && parent[a] === parent[b] ? 'Sister' :
            parent[a] && parent[parent[a]] === parent[b] ? 'Aunt' :
            parent[b] && parent[parent[b]] === parent[a] ? 'Niece' :
            parent[a] && parent[b] && parent[parent[a]] === parent[parent[b]] && parent[a] !== parent[b] ? 'Cousin' :
            'Unknown';
    // or
    // const [person1, person2] = targetPair;
    // const parent = {};
    // const children = {};
    
    // for (let [mom, child] of familyArray) {
    //     parent[child] = mom;
    //     if (!children[mom]) children[mom] = [];
    //     children[mom].push(child);
    // }
    // if (parent[person1] === person2) return 'Mother';
    // if (parent[person2] === person1) return 'Daughter';
    // if (parent[parent[person1]] === person2) return 'Grandmother';
    // if (parent[parent[person2]] === person1) return 'Granddaughter';
    // if (parent[person1] && parent[person2] && parent[person1] === parent[person2])
    //     return 'Sister';
    // if (parent[person1] && parent[parent[person1]] === parent[person2])
    //     return 'Aunt';
    // if (parent[person2] && parent[parent[person2]] === parent[person1])
    //     return 'Niece';
    // if (
    //     parent[person1] &&
    //     parent[person2] &&
    //     parent[parent[person1]] &&
    //     parent[parent[person2]] &&
    //     parent[parent[person1]] === parent[parent[person2]] &&
    //     parent[person1] !== parent[person2]
    // ) return 'Cousin';
    // return 'Unknown';
}

// 391-Simple Fun #198: Cake Slice
function cakeSlice(n) {
    let sum = 1;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
    // or
    // return (n * (n + 1)) / 2 + 1;
}

// 392-Katastrophe!
function strongEnough(earthquake, age) {
    let magnitude = earthquake.map(shockwave => shockwave.reduce((sum, tremor) => sum + tremor, 0)).reduce((product, shockSum) => product * shockSum, 1);
    let buildingStrength = 1000 * Math.pow(0.99, age);
    return buildingStrength >= magnitude ? "Safe!" : "Needs Reinforcement!";
    // or
    // earthquake = earthquake.reduce((s, v) => s * v.reduce((x, s) => x + s, 0), 1);
    // let strength = 1000 * Math.pow(.99, age);
    // return strength > earthquake ? 'Safe!' : 'Needs Reinforcement!';
}

// 393-Return a string's even characters.
function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
        return "invalid string";
    }
    const result = [];
    for (let i = 1; i < string.length; i += 2) {
        result.push(string[i]);
    }
    return result;
    // or
    // if(2 > string.length || string.length > 100) return 'invalid string';
    // return string.split('').filter(function(item, index) {
    //     return index % 2 != 0;
    // });
}

// 394-Credit Card Checker
function validCard(card) {
    let sum = 0;
    card = card.replace(/\s/g, '');
    let shouldDouble = false;
    for (let i = card.length - 1; i >= 0; i--) {
        let digit = parseInt(card[i]);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
    // or
    // let sum = 0;
    // card = card.split(" ").join("");
    // for(let i = card.length - 1; i >= 0; i--){
    //     const currentDigit = parseInt(card[i])
    //     if(i % 2) sum += currentDigit;
    //     else sum += currentDigit * 2 < 9 ? currentDigit * 2 : currentDigit * 2 - 9; 
    // }
    // return sum % 10 !== 0 ? false : true;
}

// 395-Digits Average
function digitsAverage(input) {
    let digits = input.toString().split('').map(Number);
    while (digits.length > 1) {
        let next = [];
        for (let i = 0; i < digits.length - 1; i++) {
            let avg = Math.ceil((digits[i] + digits[i + 1]) / 2);
            next.push(avg);
        }
        digits = next;
    }
    return digits[0];
    // or
    // if (input < 10) return input
    // const newInput = [...`${input}`].map(Number).reduce((acc, n, i, arr) => i < arr.length - 1 ? acc + Math.ceil((n + arr[i + 1]) / 2) : acc,'')
    // return digitsAverage(+newInput)
}

// 396-Inverting a Hash
function invertHash(hash) {
    return Object.entries(hash).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
    // or
    // const result = {};
    // for(let prop in hash) {
    //     if(hash.hasOwnProperty(prop)) {
    //     result[hash[prop]] = prop
    //     }
    // }
    // return result;
}

// 397-Search for letters
function change(string) {
    const lowerCaseString = string.toLowerCase();
    const result = new Array(26).fill('0');
    for (let char of lowerCaseString) {
        if (char >= 'a' && char <= 'z') {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            result[index] = '1';
        }
    }
    return result.join('');
    // or
    // string = string.toLowerCase()
    // return 'abcdefghijklmnopqrstuvwxyz'.split('').map(function (c) { 
    //     return string.indexOf(c) !== -1 ? 1 : 0;
    // }).join('');
}

// 398-What comes after?
function comes_after(str, l) {
    let result = '';
    let lowerL = l.toLowerCase();
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i].toLowerCase() === lowerL) {
        let nextChar = str[i + 1];
        if (/[a-zA-Z]/.test(nextChar)) {
            result += nextChar;
        }
        }
    }
    return result;
    // or
    // return (str.match(new RegExp(`(?<=${l})[a-z]`,'gi'))||[]).join('');
}

// 399-Unique string characters
function solve(a, b) {
    let uniqueFromA = [...a].filter(char => !b.includes(char)).join('');
    let uniqueFromB = [...b].filter(char => !a.includes(char)).join('');
    return uniqueFromA + uniqueFromB;
    // or
    // return (a+b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
}

// 400-Cats in hats
function height(n) {
    let totalHeight = 2000000;
    let currentHeight = 2000000;
    for (let i = 0; i < n; i++) {
        currentHeight /= 2.5;
        totalHeight += currentHeight;
    }
    return totalHeight.toFixed(3);
    // or
    // return (2000000 * (1 - Math.pow(0.4, n + 1)) / (1 - 0.4)).toFixed(3);
}

// 401-Scrabble Score
function scrabbleScore(str){
    const scoreMap = {
        a: 1, b: 3, c: 3, d: 2, e: 1,
        f: 4, g: 2, h: 4, i: 1, j: 8,
        k: 5, l: 1, m: 3, n: 1, o: 1,
        p: 3, q: 10, r: 1, s: 1, t: 1,
        u: 1, v: 4, w: 4, x: 8, y: 4,
        z: 10
    };
    return str.toLowerCase().split('').reduce((sum, char) => sum + (scoreMap[char] || 0), 0);
    // or
    // return str.toUpperCase().split('').reduce(function(score,v){ return score + ($dict[v]||0)},0);
}

// 402-Chain me
function chain(input, fs) {
    return fs.reduce((acc, fn) => fn(acc), input);
    // or
    // let result = 0;
    // result = fs[0](input);
    // for (let i = 1; i < fs.length; i++) {
    //     result = fs[i](result);
    // }
    // return result;
}