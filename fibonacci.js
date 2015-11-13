"use strict";
var Fibonacci = (function () {
    function Fibonacci() {
    }

    Fibonacci.prototype.inRange = function (start, end) {
        if ((typeof start) !== 'number' || (typeof end) !== 'number') {
            alert('Please enter number');
            return;
        }
        if (start <= 1 || end <= 1) {
            alert('Value should be more than 1');
            return;
        }
        if (end <= start) {
            alert('First value should be less than last value');
            return;
        }

        var next = 1;
        var i = 1;
        var arr = [0, 1];
        while (next < end) {
            next = arr[i] + arr[i - 1];
            if (next < end) {
                arr.push(next);
            }
            i++;
        }
        var arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= start) {
                arr2.push(arr[i]);
            }
        }
        return arr2;
    };
    return Fibonacci;
})();
var fib = new Fibonacci();
console.log(fib.inRange(20, 2500));