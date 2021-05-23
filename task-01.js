var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSum(number) {
    process.stdout.write(String(number));
}

let arraySource;
let changedArray;
let k = 0;

rl.question('', function (fline) {
    let farr = _processLine(fline);
    if (farr.length != 2) {
        console.log('Error');
        return;
    }
    k = farr[1];
    rl.question('', function (sline) {

        arraySource = _processLine(sline);
        // console.log(arraySource);
        bubbleSort(arraySource);
        // console.log(arraySource);
        changedArray = arraySource.slice();
        changedArray = changeArray(changedArray, k);
        // console.log(changedArray); // 1 - k
        let sourceSum = getSumOfArray(arraySource);
        let changedSum = getSumOfArray(changedArray);
        // console.log(changedSum);
        // console.log(sourceSum);
        process.stdout.write(String(changedSum - sourceSum));
        // console.log(changedSum - sourceSum);

        rl.close();
    });
});

function _processLine(line) {
    line = line.trim();
    return line.split(" ").map(function (item) { return parseFloat(item); });
}

function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (maxGrow(arr[j]) < maxGrow(arr[j + 1])) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}


function maxGrow(num) {
    let numStr = String(num);
    for(let i = 0; i < numStr.length; i++) {
        if(numStr[i] != '9') {
            numStr = setCharAt(numStr,i,'9')
            break;
        }
    }
    return Number(numStr) - num;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function changeArray(arr, k) {
    for(let i = 0; i < arr.length && k > 0; i++, k--) {
        arr[i] = changeNum(arr[i]);
    }
    return arr;
}

function changeNum(num) {
    let numStr = String(num);
    for(let i = 0; i < numStr.length; i++) {
        if(numStr[i] != '9') {
            numStr = setCharAt(numStr,i,'9')
            break;
        }
    }
    return Number(numStr);
}

function getSumOfArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}