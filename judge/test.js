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
            console.log(`\n测试用例${i}/${test_arr.length},失败`);
            console.log("input:" + test_arr[i]);
            console.log("expect_output:" +  test_arr[i]);
            console.log("your_output:" + output);
        }
    };
}

test(
    sumZero,
    [5, 1, 3],
);
