/**
 * Time O(N)
 * Space O(N)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // do a sliding window, one index at i and one at i + 1
    let set = {};
    let left = 0;
    let result = 0;
    for (let right = 0; right < s.length; right ++) {
        while (set[s[right]]) {
            delete set[s[left]];
            left++;
        }
        set[s[right]] = true;;
        result = Math.max(result, right - left + 1);
    }
    return result;
};

console.log(lengthOfLongestSubstring("aaaaaaaabb"))