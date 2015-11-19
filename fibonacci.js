"use strict";
var Fibonacci = (function () {
    function Fibonacci() {
    }
    Fibonacci.prototype.inRange = function (start, end) {
        if ((typeof start) !== 'number' || (typeof end) !== 'number') {
            console.log('Please enter number');
            return;
        }
        if (start < 1 || end <= 1) {
            console.log('Value should be more than 1');
            return;
        }
        if (end <= start) {
            console.log('First value should be less than last value');
            return;
        }
        var arr = [];
        var fn1 = 0;
        var fn2 = 1;
        while (fn1 <= end) {
            var current = fn2;
            fn2 = fn1;
            fn1 = fn1 + current;
            if (start <= fn2 && fn2 <= end) {
                arr.push(fn2);
            }
        }
        return arr;
    };
    return Fibonacci;
})();
var fib = new Fibonacci();
console.log(fib.inRange(10, 100));
//# sourceMappingURL=fibonacci.js.map