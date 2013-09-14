"use strict";

define(function () {
    var problem1 = function (upperBound) {
        var result = 0,
            i = 1;

        while (i < upperBound) {
            if (i % 3 === 0 || i % 5 === 0) {
                result = result + i;
            }
            i++;
        }

        return result;
    };

    return problem1;

});
