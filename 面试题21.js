// 面试题21.调整数组顺序使奇数位于偶数前面
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
// 示例：
// 输入：nums = [1, 2, 3, 4]
// 输出：[1, 3, 2, 4]
// 注：[3, 1, 2, 4] 也是正确的答案之一。
// 提示：
// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let head = 0, tail = nums.length - 1, tmp;
    while (head < tail) {
        while (nums[head] % 2 !== 0 && head < tail) {//找到第一个偶数
            head++;
        }
        while (nums[tail] % 2 !== 1 && head < tail) {//找到倒数第一个奇数
            tail--;
        }
        tmp = nums[head];
        nums[head] = nums[tail];
        nums[tail] = tmp;
    };
    return nums;
}
console.log(exchange([1, 11, 14]));

console.log(exchange([2, 4, 6]));
console.log(exchange([1, 2, 3, 4]));
console.log(exchange([2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1]));


