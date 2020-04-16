// 349. 两个数组的交集
// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
// 说明:

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // if (nums1.length > nums2.length) {//确保nums2长度不小于nums1
    //     let swp = nums1;
    //     nums1 = nums2;
    //     nums2 = swp;
    // }
    // //将这两个数组转换成计数集合
    // let map1 = new Map(), map2 = new Map();
    nums1.forEach(element => {
        map1.set(element, map1.get(element) + 1 || 1);
    })
    // nums2.forEach(element => {
    //     map2.set(element, map2.get(element) + 1 || 1);
    // })
    // let arr = [];
    // nums2.forEach(element => {
    //     let count1 = map1.get(element);
    //     let count2 = map2.get(element);
    //     if (count1 && count2) {
    //         let min = count1 < count2 ? count1 : count2;
    //         arr.concat(new Array(min).fill(element));
    //     }
    // })
    // return arr;

    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    return [...set1].filter(x => set2.has(x))
};

let test = [
    [[1, 2, 2, 1], [2, 2]]
]
test.forEach(element => {
    console.log(intersection(element[0], element[1]));
})