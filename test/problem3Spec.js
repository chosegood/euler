/*global define, describe, it, expect*/

//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?
define(['problem3', 'underscore'], function(problem3, _) {
    "use strict";

    describe('problem3: prime factors -', function() {

        it('should calculate prime factors of 13195', function() {
            var result = problem3(13195);
            expect(result).toEqual([5,7,13,29]);
        });

        it('should calculate 29 to be largest prime factor of 13195', function() {
            var result = problem3(13195);
            expect(_.max(result)).toEqual(29);
        });

        it('should calculate 6857 to be largest prime factor of 600851475143', function() {
            var result = problem3(600851475143);
            expect(_.max(result)).toEqual(6857);
        });

    });

});
