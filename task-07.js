var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arraySource;
let sumNum = 1;

rl.question('', function (fline) {
    const N = parseFloat(fline);
    rl.question('', function (sline) {
        arraySource = _processLine(sline);
        let res = getRes(N, arraySource);

        process.stdout.write(String(res));
        rl.close();
    });
});

function _processLine(line) {
    line = line.trim();
    return line.split(" ").map(function (item) { return parseFloat(item);});
}

function getRes(N, arr) {
    const A = arr[0];
    const B = arr[1];
    const C = arr[2];
    const sumMap = new Map();

    // if ((1 + A) <= N) sumNum++;
    oneCycle(A, N, sumMap);
    // if ((1 + B) <= N) sumNum++;
    oneCycle(B, N, sumMap);
    // // if ((1 + C) <= N) sumNum++;
    oneCycle(C, N, sumMap);
    // // if ((1 + A + B) <= N) sumNum++;
    twoCycle(A, B, N, sumMap);
    // // if ((1 + A + B + C) <= N) sumNum++;
    threeCycle(A, B, C, N, sumMap);
    // // if ((1 + A + C) <= N) sumNum++;
    twoCycle(A, C, N, sumMap);
    // // if ((1 + B + C) <= N) sumNum++;
    twoCycle(B, C, N, sumMap);

    sumNum = sumMap.size + 1;
    return sumNum;
}

function oneCycle(c, N, map) {
    for(let i = c; i <= N; i += c) {
        if((1 + i) <= N) {
            // console.log(1 + i);
            map.set(1 + i, N);
        }
    }
}

function twoCycle(c1, c2, N, map) {
    for(let i = c1; i <= N; i += c1) {
        for(let j = c2; j <= N; j += c2) {
            if((1 + i + j) <= N) {
                map.set(1 + i + j, N);
            }
        }
    }
}

function threeCycle(c1, c2, c3, N, map) {
    for(let i = c1; i <= N; i += c1) {
        for(let j = c2; j <= N; j += c2) {
            for(let k = c3; k <= N; k += c3) {
                if((1 + i + j + k) <= N) {
                    map.set(1 + i + j + k, N);
                }
            }
        }
    }
}