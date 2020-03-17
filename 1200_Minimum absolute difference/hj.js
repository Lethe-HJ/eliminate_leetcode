var len;    //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) {   //建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {     //堆调整
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}

var minimumAbsDifference = function(arr) {
    arr = heapSort(arr);
    let min_diff = Infinity, diff = 0;
    let min_diff_arr = new Array();
    for(let i=0; i<arr.length-1; i++){
        diff = Math.abs(arr[i+1] - arr[i]);
        if(diff < min_diff){
            min_diff_arr = [[arr[i],arr[i+1]]];
            min_diff = diff;
        }
        else if (diff == min_diff){
            min_diff_arr.push([arr[i],arr[i+1]])
        }
    }
    return min_diff_arr;
};


console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));