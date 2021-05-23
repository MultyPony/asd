var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arraySource;

rl.question('', function (fline) {
    let n = parseFloat(fline);
    rl.question('', function (sline) {
        arraySource = _processLine(sline);
        let res = getRes(arraySource);
        process.stdout.write(String(res[0]) + " " + String(res[1]));
        rl.close();
    });
});

function _processLine(line) {
    line = line.trim();
    return line.split(" ").map(function (item) { return parseFloat(item); });
}

function getRes(arr) {
    let count = 0;
    let res = [-1, -1];

    for(let i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 != 0) {
            if(arr[i] % 2 == 0) {
                if(count > 1) return [-1, -1];
                res[count] = i + 1;
                count++;  
            }
        }
        else if ((i + 1) % 2 == 0) {
            if(arr[i] % 2 != 0) {
                if(count > 1) return [-1, -1];
                res[count] = i + 1;
                count++; 
            }
        }
    }
    if (res[0] == -1 || res[1] == -1)
        res = [-1, -1];
    return res;
}