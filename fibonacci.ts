"use strict";
class Fibonacci {
    inRange(start:number, end:number) {
        //if ((typeof start) !== 'number' || (typeof end) !== 'number') {
        //    console.log ('Please enter number');
        //    return;
        //}
        if (start < 1 || end <= 1) {
            console.log ('Value should be more than 1');
            return;
        }
        if (end <= start) {
            console.log ('First value should be less than last value');
            return;
        }
        var arr = [];
        var fn1 = 0;
        var fn2 = 1;
        while (fn1 <= end) {
            var current = fn2;
            fn2 = fn1;
            fn1 = fn1 + current;
            if ((start <= fn2) && (fn2 <= end)) {
                arr.push(fn2);
            }
        }
        return arr;
    }
}
var fib = new Fibonacci();
console.log(fib.inRange(2, 100));