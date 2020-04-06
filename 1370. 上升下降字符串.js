/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let s_arr = s.split("");
    s_arr = s_arr.sort();
    hash_map = new Map();
    let max = 1;
    s_arr.forEach(item => {
        let value = hash_map.get(item);
        if (value) {
            hash_map.set(item, value+1);
            if(value+1 > max) max = value + 1;
        }
        else{
            hash_map.set(item, 1);
        }
    })
    let str_arr=new Array(max).fill("");
    hash_map.forEach((value, key) => {
        while(value--){
            if(value%2 == 0)
                str_arr[value] += key;
            else
                str_arr[value] = key + str_arr[value];
        }
    })
    let str = ""
    str_arr.forEach(item =>{
        str += item;
    })
    return str;
};

let test_arr = [
    "aaaabbbbcccc",
    "rat",
    "leetcode",
    "ggggggg",
    "spo",
    ""
]

test_arr.forEach(element => {
    console.log(sortString(element));
});
