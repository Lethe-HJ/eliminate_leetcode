### [面试题57 - II. 和为s的连续正数序列](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/)

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

**示例 1：**

```
输入：target = 9
输出：[[2,3,4],[4,5]]
```

#### 解法:滑动窗口

滑动窗口可以看成数组中框起来的一个部分。在一些数组类题目中，我们可以用滑动窗口来观察可能的候选结果。当滑动窗口从数组的左边滑到了右边，我们就可以从所有的候选结果中找到最优的结果。

对于这道题来说，数组就是正整数序列 [1,2,3,4,5,6,7,8,9]我们设滑动窗口的左边界为 ii，右边界为 jj，则滑动窗口框起来的是一个左闭右开区间 [i, j)[i,j)。注意，为了编程的方便，滑动窗口一般表示成一个左闭右开区间。在一开始，i=1, j=1i=1,j=1，滑动窗口位于序列的最左侧，窗口大小为零。

滑动窗口的重要性质是：窗口的左边界和右边界永远只能向右移动，而不能向左移动。这是为了保证滑动窗口的时间复杂度是 O(n)O(n)。如果左右边界向左移动的话，这叫做“回溯”，算法的时间复杂度就可能不止 O(n)O(n)。

在这道题中，我们关注的是滑动窗口中所有数的和。当滑动窗口的右边界向右移动时，也就是 j = j + 1，窗口中多了一个数字 j，窗口的和也就要加上 j。当滑动窗口的左边界向右移动时，也就是 i = i + 1，窗口中少了一个数字 i，窗口的和也就要减去 i。滑动窗口只有 右边界向右移动（扩大窗口） 和 左边界向右移动（缩小窗口） 两个操作，所以实际上非常简单。

#### 如何用滑动窗口解这道题

当窗口的和小于 target 的时候，窗口的和需要增加，所以要扩大窗口，窗口的右边界向右移动
当窗口的和大于 target 的时候，窗口的和需要减少，所以要缩小窗口，窗口的左边界向右移动
当窗口的和恰好等于 target 的时候，我们需要记录此时的结果。设此时的窗口为 [i, j)[i,j)，那么我们已经找到了一个 ii 开头的序列，也是唯一一个 ii 开头的序列，接下来需要找 i+1i+1 开头的序列，所以窗口的左边界要向右移动



解题思路
先把数分解9=1+8=2+7=3+6=4+5,按这种，找到可能组成正确结果的数组，根据数的结构，易知结果可能存在[1,2,3,4,5]中，不难发现数组最后一个数,如果target是偶数就是target/2,如果是奇数就是target/2取整加一，即Math.floor(target/2)+1 或采用二进制取整(target/2 | 0) + 1,再对找到的数组采用滑动窗口模型，找出答案

```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let index = target % 2 === 0 ? target / 2 : (target / 2 | 0) + 1
  let res = []
  let temp = []
  let sum = 0
  for (let i = 1; i <= index; i++) {
    temp.push(i)
    sum = temp.reduce((pre, cur) => pre + cur)
    while (sum > target) {
      sum -= temp[0]
      temp.shift()
    }
    if (sum === target) {
      temp.length >= 2 && res.push([...temp])
    }
  }
  return res;
};
```

