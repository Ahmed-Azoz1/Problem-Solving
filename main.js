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