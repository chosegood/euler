/*global define*/

//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?
define(function () {
    "use strict";

    var problem3 = function (targetNumber) {
        var factors = [],
            factor = 2;

        // while (targetNumber > 1) {
        //     while(targetNumber % factor === 0) {
        //         factors.push(factor);
        //         targetNumber /= factor;
        //         factor += 1;
        //     }
        // }

        while (targetNumber > 1) {

            while (targetNumber % factor === 0) {
                factors.push(factor);
                targetNumber /= factor;
            }

            factor += 1;

            if (factor * factor > targetNumber) {
                if (targetNumber > 1) {
                    factors.push(targetNumber);
                    break;
                }
            }

        }

        return factors;
    };

    return problem3;

});
