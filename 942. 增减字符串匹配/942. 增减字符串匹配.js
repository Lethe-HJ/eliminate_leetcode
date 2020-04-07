/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let min = 0, max = S.length, res = [];
    for(let i of S)
        res.push((i == "I" ? min++ : max--));
    res.push(max);
    return res;
};

let test = [
    "IDID",
    "III",
    "DDI"
]

test.forEach(element =>{
    console.log(diStringMatch(element))
})
