/*global define, describe, it, expect*/

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
define(['problem4'], function(problem4) {
    "use strict";

    describe('problem4: Largest palindrome product -', function() {

        it('should reverse numbers', function() {
            expect(problem4.reverseNum(10)).toEqual(1);
            expect(problem4.reverseNum(17)).toEqual(71);
            expect(problem4.reverseNum(998)).toEqual(899);
        });

        it('should detect non-palindromic nubmers', function() {
            expect(problem4.isPalindromic(10)).toEqual(false);
            expect(problem4.isPalindromic(17)).toEqual(false);
            expect(problem4.isPalindromic(998)).toEqual(false);
        });

        it('should detect palindromic nubmers', function() {
            expect(problem4.isPalindromic(99)).toEqual(true);
            expect(problem4.isPalindromic(101)).toEqual(true);
            expect(problem4.isPalindromic(9009)).toEqual(true);
        });

    });

});
