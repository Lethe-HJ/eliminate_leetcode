// 1304. 和为零的N个唯一整数

// 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。

// 示例 1：

// 输入：n = 5
// 输出：[-7,-1,1,3,4]
// 解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。

// 示例 2：

// 输入：n = 3
// 输出：[-1,0,1]

// 示例 3：

// 输入：n = 1
// 输出：[0]

// 提示：

//     1 <= n <= 1000

var sumZero = function(n) {
    let arr = [];
    for(let i=1; i<=parseInt(n/2); i++){
        arr.push(i, -i);
    }
    if(n % 2 == 1){
        arr.push(0);
    }
    return arr 
};

const is_success = (output) => {
    var s = 0;
    for (var i=output.length-1; i>=0; i--) {
        s += arr[i];
    }
    return s == 0;
};


const normal = (output, expect_out) => output == expect_out;

const test = (func, test_arr, test_func=normal) => {
    for(let i=0; i<test_arr.length; i++){
        let output = func(test_arr[i]);
        if( !test_func(test_arr[i]), output){
            console.log(`测试用例${i}/${test_arr.length} \ninput: ${test_arr[i]} \nexpect_output: ${test_arr[i]} \nyour_output: [${output}]\n`);
        }
    };
}

test(
    sumZero,
    [5, 1, 3],
    test_func = is_success
);
