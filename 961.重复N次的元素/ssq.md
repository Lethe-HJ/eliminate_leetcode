#### [961. 重复 N 次的元素](https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array/)

难度简单63

在大小为 `2N` 的数组 `A` 中有 `N+1` 个不同的元素，其中有一个元素重复了 `N` 次。

返回重复了 `N` 次的那个元素。

**示例 1：**

```
输入：[1,2,3,3]
输出：3
```

### 解

```js
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let map = new Map();
  let len = Math.floor(A.length/2);
  let num = null;
  A.forEach((item)=>{
      map.set(item,map.has(item)? map.get(item)+1 : 1)
  })
  map.forEach((value,key)=>{
     //  console.log(value,key)
     if(value === len){
        //  console.log(key)
         num =  key
     }
  })
  return num
 };
```

题目规律

```js
var repeatedNTimes = function(A) {
    let set = new Set();
    for(let e of A){
        if(!set.has(e)){
            set.add(e);
        }else{
            return e;
        }
    }
}
```

