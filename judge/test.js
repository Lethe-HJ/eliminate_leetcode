var sumZero = function(n) {
    let arr = [];
    for(let i=1; i<parseInt(n/2); i++){
        arr.push(i, -i);
    }
    if(n % 2 == 0){
        arr.push(0);
    }
    return arr 
};

const is_success = (output) => sum(output) == 0;

const normal = (output, expect_out) => output == expect_out;

const test = (func, test_arr, test_func=normal) => {
    let dimension = test_arr.some(item=> item instanceof Array);//判断是否是一维数组
    try{
        for(let i=0; i<test_arr.length; i++){
            let output = test_func(test_arr[i][0]);
            // let expect_out =  
            if( out != test_arr[i][1] ){
                throw `测试用例${i}/${test_arr.length} \ninput: ${test_arr[i][0]} \n\t
                    output: ${test_arr[i][1]} \n\tyour_output: ${out}\n\t`;
            }
        };
    }
    catch(err){
        console.log("错误!\n" + err);
    }
}

test(
    sumZero,
    [5, 1, 3],
);
