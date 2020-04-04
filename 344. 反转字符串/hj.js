var reverseString = function(s) {
    if(s.length == 2){
        [s[0], s[1]] = [s[1], s[0]];
        return s;
    }
    let len = s.length;
    let tail = s.pop();
    let head = reverseString(s);
    head.unshift(tail);
    return head;
};

// var reverseString = function(s){
//     var helper = function(left, right){
//         if(left < right){
//             [s[left], s[right]] = [s[right], s[left]]
//             helper(left + 1, right - 1)
//         }
//     }            
//     helper(0, s.length - 1)
//     return s;
// }
var reverseString = function(s) {
    let len = s.length;
    helper(0,len-1,s)
    return s;
 };
 function helper(left,right,s){
    if(left<right){
        [s[left],s[right]] = [s[right],s[left]]
        helper(left++,right--,s)
    }
 }

console.log(reverseString(["h","e","l","l","o"]))