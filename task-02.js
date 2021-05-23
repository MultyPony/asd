var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let r = 0;

rl.question('', function (fline) {
    let farr = _processLine(fline);
    if (farr.length != 2) {
        console.log('Error');
        return;
    }
    l = farr[0];
    r = farr[1];

    let result = getResult(l, r);

    process.stdout.write(String(result));
    rl.close();
});

function _processLine(line) {
    line = line.trim();
    return line.split(" ").map(function (item) { return parseFloat(item); });
}

function getResult(l, r) {
    let count = 0;
    let t = l;
    while(t <= r) {
        if(isValid(t)) {
            count++;
            t = nextNum(t);
            continue;
        }
        t++;
    }
    return count;
}

function isValid(num) {
    let str = String(num);

    for(let i = 1; i < str.length; i++) {
        if(str[i] != str[i-1]) {
            return false;
        }
    }
    return true;
}

function nextNum(num) {
    let strN = String(num);
    let length = strN.length;

    if(length < 1) return;
    let n = strN[0];
    if (n == 9) {
        length++;
        n = 1;
    }
    else {
        n++;
    }
    n = String(n);
    let nextNum = n;
    for(let i = 0; i < length - 1; i++) {
        nextNum += n;
    }
    return nextNum;
}

