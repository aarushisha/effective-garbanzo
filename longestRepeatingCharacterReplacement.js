/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const length = s.length;
    let maxLength = 0;
    let counts = {};
    let left = 0;
    for (let right = 0; right < length; right++) {
        if (counts[s[right]]) {
            counts[s[right]]++;
        } else {
            counts[s[right]] = 1;
        }
        if ((right - left + 1) - Math.max(...Object.values(counts)) > k) {
            counts[s[left]]--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

console.log(characterReplacement("AABABBA", 1));