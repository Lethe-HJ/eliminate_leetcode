var inclued = function(wordset, charsset){
    for(let key in wordset){
        if(!(key in charsset && charsset[key] >= wordset[key])){
            return false;
        }
    }
    return true;
}

var get_charset = function(word){
    let charset = {};
    for(let char of word){
        if(char in charset){
            charset[char] ++;
        }
        else{
            charset[char] = 1;
        }
    }
    return charset;
}

var countCharacters = function(words, chars) {
    let sum = 0;
    let charsset = get_charset(chars)
    words.forEach(word => {
        if(inclued(get_charset(word), charsset)){
            sum += word.length;
        }
    })
    return sum;
};


const test_arr = [
    [["cat","bt","hat","tree"], "atach"],
    [["hello","world","leetcode"], "welldonehoneyr"]
];

test_arr.forEach(element => {
    console.log(countCharacters(element[0], element[1]));
});