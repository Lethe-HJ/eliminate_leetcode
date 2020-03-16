var canThreePartsEqualSum = function(A) {
    const len = A.length;
    let sum = 0;
    A.forEach(ele => { sum += ele });
    let target_sum = sum/3; 
    let sum_i = A[0], sum_j = A[len-1], i = 1, j = len-2;
    while(sum_i != target_sum && i <= len-3){
        sum_i += A[i++];
    }
    while(sum_j != target_sum && j >= 2){
        sum_j += A[j--];
    }
    return i-1 <= j-1 ? true: false;
};

const test_arr = [
    [0,2,1,-6,6,-7,9,1,2,0,1],
    [0,2,1,-6,6,7,9,-1,2,0,1],
    [3,3,6,5,-2,2,5,1,-9,4],
    [1,-1,1,-1]
];

test_arr.forEach(element => {
    console.log(canThreePartsEqualSum(element));
});