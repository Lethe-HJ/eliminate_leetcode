// 821. 字符的最短距离
// 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

// 示例 1:

// 输入: S = "loveleetcode", C = 'e'
// 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
// 说明:

// 字符串 S 的长度范围为 [1, 10000]。
// C 是一个单字符，且保证是字符串 S 里的字符。
// S 和 C 中的所有字母均为小写字母。

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let queue = [];
    let distance = []
    let pre_i = S.length;//定义一个尽可能大的数
    let i;
    for(i=0; i<S.length; i++){
        if(S[i] != C)
            queue.push(i);
        else{
            while(queue.length != 0){
                let current_index = queue.shift();
                let pre_inst = Math.abs(pre_i - current_index);
                let cur_inst = Math.abs(i - current_index);
                distance.push(pre_inst < cur_inst ? pre_inst : cur_inst);
            }
            distance.push(0);
            pre_i = i;
        }
    }
    while(queue.length != 0){
        distance.push(queue.shift() - pre_i);
    }
    return distance;
};

let test = [
    ["loveleetcode",'e'],
    ["aaba", "b"],
    ["abaaa","b"]
];
//1 0 3
test.forEach(element => {
    console.log(shortestToChar(element[0], element[1]));
})