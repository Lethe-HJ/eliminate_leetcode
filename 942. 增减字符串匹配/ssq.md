#### [942. 增减字符串匹配](https://leetcode-cn.com/problems/di-string-match/)

难度简单119

给定只含 `"I"`（增大）或 `"D"`（减小）的字符串 `S` ，令 `N = S.length`。

返回 `[0, 1, ..., N]` 的任意排列 `A` 使得对于所有 `i = 0, ..., N-1`，都有：

- 如果 `S[i] == "I"`，那么 `A[i] < A[i+1]`
- 如果 `S[i] == "D"`，那么 `A[i] > A[i+1]`

 

**示例 1：**

```
输出："IDID"
输出：[0,4,1,3,2]
```

### 解法

```js
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let arr = [],res =[];
  for(let i =0;i<S.length+1;i++){
    arr.push(i)
  }
  for(let item of S){
    if(item === 'D'){
      res.push(arr[arr.length-1])
      // tail--;
      arr.pop()
    }else if(item === 'I'){
      res.push(arr[0])
      // head++
      arr.shift()
      // arr.splice(0,1)
    }
  }
  // console.log(arr)
  res.push(arr[0])
  return res
};
```

