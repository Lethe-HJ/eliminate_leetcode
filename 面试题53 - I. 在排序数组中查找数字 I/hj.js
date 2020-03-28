// #### [面试题53 - I. 在排序数组中查找数字 I](https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)

// 统计一个数字在排序数组中出现的次数。

// **示例 1:**

// ```
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// ```

// **示例 2:**

// ```
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0
// ```

var search = function (nums, target) {
    let index = binary_search(nums, target);//找到某一个等于target的数的索引
    console.log("index="+index.toString());
    if(index == -1) return 0;
    let i=0, j=1, count=0;
    while(index+i <= nums.length){//向后走
        if(nums[index+i] == target){
            count++;
            i++;
        }
        else{
            break;
        }
    }
    while(index-j >= 0){//向前走
        if(nums[index-j] == target){
            count++;
            j++;
        }
        else{
            break;
        }
    }
    return count;
}

var binary_search = function(nums, target){
    let head=0; tail=nums.length-1;
    while(head <= tail){
        let center = Math.floor((head+tail)/2);
        if(nums[center] > target){
            tail = center-1;
        }
        else if(nums[center] < target){
            head = center+1;
        }
        else{
            return center;
        }
    }
    return -1;
}

console.log(search([5,7,8,8,8,10,11], 8));
console.log(search([5,7,7,8,8,10], 6));
console.log(search([2,2], 2));
console.log(search([2], 2));