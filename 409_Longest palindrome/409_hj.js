const str_to_map = str => {
    let charMap = new Map();
    for(let char of str) {
        // 遍历字母表，统计其中每个字母出现的频率
        charMap.set(char, (charMap.has(char) ? charMap.get(char) + 1 : 1));
    }
    return charMap;
}

const is_odd = num => ( num%2 == 1 ); 

const mutil_char = (num, times) => {
    let str = "";
    while(times--){
        str += num;
    }
    console.log(str);
    return str;
};

const str_reverse = str => ( str.split("").reverse().join("") );

// 这个是求字符串
var longestPalindrome = function(s) {
    let charMap = str_to_map(s);
    let odd = "", left = "";
    charMap.forEach((value, key) =>{
        if(is_odd(value)){
            odd = key;
        }
        left += mutil_char(key, parseInt(value / 2))
    });
        
    return left + odd + str_reverse(left);
};

const test_arr = [
    "abccccdd",
];

//这个是求字符串长度
var longestPalindromelen = function(s) {
    let charMap = str_to_map(s);
    let odd = false, count = 0;
    charMap.forEach((value, key) =>{
        if(!odd && is_odd(value)){
            odd = true;
        }
        count += parseInt(value / 2)
    });
        
    return odd ? 2*count+1 : 2*count;
};


test_arr.forEach(element => {
    console.log(longestPalindrome(element));
    console.log(longestPalindromelen(element));
});