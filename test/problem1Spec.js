/*global define, describe, it, expect*/

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
define(['problem1'], function(problem1) {
    "use strict";

    describe('problem1: Multiples of 3 and 5 -', function() {

        it('should return the sum of all multiples of 3 and 5 for all natural numbers below 10 ', function() {
            var result = problem1(10);
            expect(result).toEqual(23);
        });

        it('should return the sum of all multiples of 3 and 5 for all natural numbers below 1000', function() {
            var result = problem1(1000);
            expect(result).toEqual(233168);
        });

    });

});
