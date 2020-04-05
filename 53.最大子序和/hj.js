
let Solution = (nums) => {
    let num_length = nums.length;
    let curr_sum = max_sum = nums[0];

    for(let i=0; i< num_length; i++){
        curr_sum = max(nums[i], curr_sum + nums[i])
        max_sum = max(max_sum, curr_sum)
    }   
    return max_sum
}