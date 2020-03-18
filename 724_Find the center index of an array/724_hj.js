var pivotIndex = function(nums) {
    let sum_li = [0];
    let sum = 0;
    let len = nums.length;
    nums.forEach(num => {
        sum += num;
        sum_li.push(sum);
    })
    for(let i=0; i<len; i++){
        if(sum_li[i] == sum_li[len] - sum_li[i+1]){
            return i;
        }
    }
    return -1;
};

const test_arr = [
    [1, 7, 3, 6, 5, 6],
    [1, 2,  3]
];

test_arr.forEach(element => {
    console.log(pivotIndex(element));
});