// 面试题57.和为s的两个数字
// 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
// 示例 1：
// 输入：nums = [2, 7, 11, 15], target = 9
// 输出：[2, 7] 或者[7, 2]
// 示例 2：
// 输入：nums = [10, 26, 30, 31, 47, 60], target = 40
// 输出：[10, 30] 或者[30, 10]
// 限制：
// 1 <= nums.length <= 10 ^ 5
// 1 <= nums[i] <= 10 ^ 6

var binarySearch = function (data, dest, start) {
    var end = data.length - 1;
    while (start <= end) {
        var mid = parseInt((end + start) / 2);
        if (dest == data[mid]) {
            return mid;
        } else if (dest > data[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length && nums[i] < target; i++) {
        let another = target - nums[i];
        let res = binarySearch(nums, another, i + 1);
        if (res !== -1) {
            return [nums[i], another];
        }
    }
}

var twoSum = function (nums, target) {
    var hasmap = new Map();
    nums.forEach(element => {
        let find = hasmap.get(element)
        find ? hasmap.set(element, find + 1) : hasmap.set(element, 1);
    });
    for (var key of hasmap.keys()) {
        let another = target - key;
        if (another == key) {
            if (hasmap.get(another) > 1) {
                return [another, key]
            }
        }
        else {
            if (hasmap.has(another)) {
                return [another, key]
            }
        }
    }
}

var twoSum = function (nums, target) {
    let head = 0, tail = nums.length - 1;
    while (head < tail) {
        let sum = nums[head] + nums[tail];
        if (sum > target) {
            tail--;
        }
        else if (sum < target) {
            head++;
        }
        else {
            return [nums[head], nums[tail]];
        }
    }
}

let test = [
    [[14, 15, 16, 22, 53, 60], 76],
    [[10, 26, 30, 31, 47, 60], 40],
    [[2, 7, 11, 15], 9]
]

test.forEach(element => {
    console.log(twoSum(element[0], element[1]));
})

