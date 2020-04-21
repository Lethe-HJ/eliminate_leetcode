// 784. 字母大小写全排列

// 给定一个字符串S，通过将字符串S中的每个字母转变大小写，
// 我们可以获得一个新的字符串。返回所有可能得到的字符串集合。

// 示例:
// 输入: S = "a1b2"
// 输出: ["a1b2", "a1B2", "A1b2", "A1B2"]

// 输入: S = "3z4"
// 输出: ["3z4", "3Z4"]

// 输入: S = "12345"
// 输出: ["12345"]

// 注意：

//     S 的长度不超过12。
//     S 仅由数字和字母组成。

var chg_str = function (str, pos, char) {
    return str.substring(0, pos) + char + str.substring(pos + 1, str.length);
}


/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {//"a1b2"
    let alphs = [];
    for (let i = 0; i < S.length; i++) {
        let ascii = S[i].charCodeAt();
        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
            alphs.push(i);//记录字母的索引值
        }
    }//[0,2]
    let res = [S];//["a1b2","A1b2","a1B2","A1B2"]
    alphs.forEach(alph_index => {
        for (let i = 0, len = res.length; i < len; i++) {//len=2
            let ascii = res[i][alph_index].charCodeAt();//
            let new_ascii = ascii <= 90 ? ascii + 32 : ascii - 32;//a1b2=>A1b2
            res.push(chg_str(res[i], alph_index, String.fromCharCode(new_ascii)));//"A1b2"
        }
    })
    return res;
};

let test = [
    ["a1b2", ["a1b2", "a1B2", "A1b2", "A1B2"]],
    ["3z4", ["3z4", "3Z4"]],
    ["12345", ["12345"]]
]

test.forEach(element => {
    let res = letterCasePermutation(element[0]);
    console.log("expect", element[1]);
    console.log("yours ", res);
})

// a1b2c3
//    0 2 4

// a1b2c3 a1b2C3 a1B2c3 a1B2C3 A1b2c3 A1b2C3 A1B2c3 A1B2C3


var letterCasePermutation = function (S) {//a1b2c3
    function dfs(start, str) {
        res.push(str);
        for (let i = start; i < str.length; i++) {
            if (str[i] >= "a" && str[i] <= "z") {
                dfs(i + 1, str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
            } else if (str[i] >= "A" && str[i] <= "Z") {
                dfs(i + 1, str.slice(0, i) + str[i].toLowerCase() + str.slice(i + 1));
            }
        }
    }

    var res = [];
    dfs(0, S);
    return res;
};