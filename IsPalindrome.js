/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) { // solution 1
    let newString = "";
    for (let char of s) {
        if (isAlphaNumeric(char)) {
            newString = newString.concat(char.toLowerCase());
        }
    }
    if (newString.length === 0) {
        return true;
    }
    let newStringArray = newString.split("");
    let reversedNewString = newStringArray.reverse().join("");
    return newString === reversedNewString;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeTwo = function(s) { // solution 2
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        while (left < right && right > 0 && !isAlphaNumeric(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isAlphaNumeric = function (s) { // solution 1
    return /^[a-z0-9]+$/gi.test(s);
}

console.log(isPalindromeTwo("a."));