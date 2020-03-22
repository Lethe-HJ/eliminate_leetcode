var getLeastNumbers = function(arr, k) {
    let four_arr = arr.slice(0, k).sort((a, b) => a-b);
    for(let i=k; i<arr.length; i++){
        if(arr[i] < four_arr[k-1]){
            for(let j=0; j<k; j++){
                if((j == 0 && arr[i] <= four_arr[0]) || (arr[i] >= four_arr[j-1] && arr[i] < four_arr[j])){
                    four_arr.splice(j, 0, arr[i]);
                    four_arr.pop();
                    break;
                }
            }
        }
    }
    return four_arr;
};


var getLeastNumbers = function(arr, k) {
    return arr.sort((a, b) => a-b).slice(0, k);
};


console.log(getLeastNumbers([3, 2, 1], 2));
console.log(getLeastNumbers([3, 2, 1, 1], 3));
let res = getLeastNumbers(
    [0,1,1,1,4,5,3,7,7,8,10,2,7,8,0,5,2,16,12,1,19,15,5,18,2,2,22,15,8,22,17,6,22,6,22,26,32,8,10,11,2,26,9,12,9,7,28,33,20,7,2,17,44,3,52,27,2,23,19,56,56,58,36,31,1,19,19,6,65,49,27,63,29,1,69,47,56,61,40,43,10,71,60,66,42,44,10,12,83,69,73,2,65,93,92,47,35,39,13,75],
    75
);

let expect = [0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,4,5,5,5,6,6,6,7,7,7,7,7,8,8,8,8,9,9,10,10,10,10,11,12,12,12,13,15,15,16,17,17,18,19,19,19,19,20,22,22,22,22,23,26,26,27,27,28,29,31,32,33,35,36,39,40,42];
console.log(expect);
console.log(res);
console.log(res == expect);