/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
    const length = nums.length;
    if (length === 1) {
        if (nums[0] > 0) {
            return length;
        } else {
            return 0;
        }
    }
    let maxLength = 0;
    let start = 0;
    while (start < length) {
        let countOfNegativeNumbers = 0;
        let startingNegative = -1;
        let endingNegative = -1;
        let end = start;
        while (end < length && nums[end] !== 0) {
            if (nums[end] < 0) {
                countOfNegativeNumbers++;
                if (startingNegative === -1) {
                    startingNegative = end;
                }
                endingNegative = end;
            }
            if (countOfNegativeNumbers % 2 === 0) {
                maxLength = Math.max(maxLength, end - start + 1);
            } else {
                // (end - (startingNegative + 1) + 1) is the length if going from index after starting negative all the way to end
                // (((end - 1) - startingNegative) + 1) is the length if starting from start to the index before endingNegative
                maxLength = Math.max(maxLength, (end - (startingNegative + 1) + 1), (((endingNegative - 1) - start) + 1));
            }
            end++;
        }
        start = end + 1;
    }
    return maxLength;
};