/*global define*/

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
define(function () {
    "use strict";

    var problem1 = function (upperBound) {
        var result = 0,
            i = 1;

        for (; i < upperBound; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                result = result + i;
            }
        }

        return result;
    };

    return problem1;

});
