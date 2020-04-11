/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let odd_index = [];//存储不符合要求的的奇数索引
    let even_index = [];//存储不符合要求的的偶数索引
    for (let i = 0; i < A.length; i++) {
        let remainder = i % 2;
        if (remainder != A[i] % 2) {
            if (remainder == 1) odd_index.push(i);
            else even_index.push(i);
        }
    }
    for (let i = 0; i < odd_index.length; i++) {
        [A[odd_index[i]], A[even_index[i]]] = [A[even_index[i]], A[odd_index[i]]];//交换这两个数组中索引对应的A的元素
    }
    return A;
};

let is_success = res => {
    res.forEach((element, index) => {
        if (index % 2 != element % 2)
            return false;
    })
    return true;
};



let test_arr = [
    [4, 2, 5, 7],
    [4, 3],
    [0, 1]
];

test_arr.forEach(element => {
    let res = sortArrayByParityII(element);
    console.log(is_success(res), res);
})

