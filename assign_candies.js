var distributeCandies = function(candies, num_people) {
    let assign_arr = new Array(num_people).fill(0);
    let times = 0,assign_num = 0;
    while(candies){
        assign_num = assign_num+1 > candies? candies : assign_num+1;
        assign_arr[times++%num_people] += assign_num;
        candies -=assign_num;
    }
    return assign_arr;
}

console.log(distributeCandies(90,4));