/*global define*/

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
define(function () {
    "use strict";

    var problem4 = function (upperBound) {
        return;
    },

    reverseNum = function(num) {
        var i,
            reversedStr = '',
            strNum = new String(num);

        for (i=strNum.length - 1; i>=0; i--) {
            reversedStr += strNum[i];
        }
        // console.log('Reversed ['+ num+ '] to [' + Number(reversedStr) + ']');
        return new Number(reversedStr);
    },

    isPalindromic = function(num) {
        console.log('isPalindromic [' + num + '] to [' + reverseNum(num) + '] equals [' + (num == reverseNum(num)) + ']');
        return (num == reverseNum(num));
    };

    return {
        problem4: problem4,
        reverseNum: reverseNum,
        isPalindromic: isPalindromic
    };

});
