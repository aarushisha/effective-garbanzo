/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = "";
    let resultLength = 0;
    for (let i = 0; i < s.length; i++) {
        // odd length palindrome
        let left = i;
        let right = i;
        // left and right are within the bounds of the string, and they are the same
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > resultLength) {
                result = s.slice(left, right + 1);
                resultLength = right - left + 1;
            }
            left--;
            right++;
        }
        // even length palindrome
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > resultLength) {
                result = s.slice(left, right + 1);
                resultLength = right - left + 1;
            }
            left--;
            right++;
        }
    }
    return result;
};