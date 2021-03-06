350. 两个数组的交集 II
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]

## 解法

for循环解法
```js
var intersect = function(nums1, nums2) {
    let res = [];
    if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];
    for (let i = 0; i < nums1.length; i++) {
        let key = nums2.indexOf(nums1[i]);
        if (key !== -1) res.push(nums2.splice(key, 1));
    }
    return res;
};
```
哈希表法
解析:
先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。
然后再遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组里。
如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。
如果value值等于1，则删除该元素。
```js
var intersect = function(nums1, nums2) {
    let hash = new Map()
    let res = []
    for(let i = 0; i < nums1.length; i++) {
        if(hash.has(nums1[i])) {
            hash.set(nums1[i], hash.get(nums1[i]) + 1)
        } else {
           hash.set(nums1[i], 1) 
        }
    }
    
    for(let i = 0; i < nums2.length; i++) {
        let temp = nums2[i]
        let hashKey = hash.get(temp)
        if(hash.has(temp)) {
            res.push(temp)
            if(hashKey > 1) {
                hash.set(temp, hashKey - 1)
            } else {
                hash.delete(temp)
            }
        }
    }
    
    return res
};
```
双指针
解析:
两个数组排序
设定两个为0的指针，比较两个指针的元素是否相等
如果相等，元素push到返回值里，两个指针同时往前
如果不相等，元素小的指针往前

```js
var intersect = function(nums1, nums2) {
    let p1 = 0
    let p2 = 0
    let res = []
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] == nums2[p2]) {
            res.push(nums1[p1])
            p1++
            p2++
        } else if(nums1[p1] < nums2[p2]) {
            p1++
        } else {
            p2++
        }
    }
    return res
};

```