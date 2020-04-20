// 961. 重复 N 次的元素
// 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。
// 返回重复了 N 次的那个元素。
// 示例 1：
// 输入：[1,2,3,3]
// 输出：3
// 示例 2：
// 输入：[2,1,2,5,3,2]
// 输出：2
// 示例 3：
// 输入：[5,1,5,2,5,3,5,4]
// 输出：5
// 提示：
//     4 <= A.length <= 10000
//     0 <= A[i] < 10000
//     A.length 为偶数

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    let hashmap = new Map();
    for (let i = 0; i < A.length; i++) {
        let count = hashmap.get(A[i]);
        if (count == 1) {
            return A[i];
        }
        else
            hashmap.set(A[i], 1);
    }
};



var repeatedNTimes = function (A) {
    if (A[0] == A[2]) return A[0];
    if (A[1] == A[3]) return A[1];
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] == A[i + 1])
            return A[i];
    }
    if (A.length == 4 && A[0] == A[A.length - 1]) return A[0];
};


let test = [
    [1, 2, 3, 3],
    [2, 1, 2, 5, 3, 2],
    [5, 1, 5, 2, 5, 3, 5, 4]
]

test.forEach(element => {
    console.log(repeatedNTimes(element));
})