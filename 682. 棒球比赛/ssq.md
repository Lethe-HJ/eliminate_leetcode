#### [682. 棒球比赛](https://leetcode-cn.com/problems/baseball-game/)

难度简单112

你现在是棒球比赛记录员。
给定一个字符串列表，每个字符串可以是以下四种类型之一：
1.`整数`（一轮的得分）：直接表示您在本轮中获得的积分数。
\2. `"+"`（一轮的得分）：表示本轮获得的得分是前两轮`有效` 回合得分的总和。
\3. `"D"`（一轮的得分）：表示本轮获得的得分是前一轮`有效` 回合得分的两倍。
\4. `"C"`（一个操作，这不是一个回合的分数）：表示您获得的最后一个`有效` 回合的分数是无效的，应该被移除。

每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
你需要返回你在所有回合中得分的总和。

**示例 1:**

```
输入: ["5","2","C","D","+"]
输出: 30
解释: 
第1轮：你可以得到5分。总和是：5。
第2轮：你可以得到2分。总和是：7。
操作1：第2轮的数据无效。总和是：5。
第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
第4轮：你可以得到5 + 10 = 15分。总数是：30。
```

### 解法

```js
var calPoints = function(ops) {
    let sum = 0,arr = [];
    for(let i=0;i<ops.length;i++){
        let temp = ops[i];
        if(temp === 'C'){
            let obj = arr.pop();
            sum -= obj;    
        }else if(temp === '+'){
            let obj = arr[arr.length-1] + arr[arr.length-2];
            arr.push(obj);
            sum +=obj;
        }else if(temp === 'D'){
            let obj = arr[arr.length-1]*2;
            arr.push(obj);
            sum += obj;
        }else{
            arr.push(Number(temp));
            sum += Number(temp);
        }
       
    }
    return sum
};
console.log(calPoints(["5","2","C","D","+"]))
```



### 用swich速度变慢

```js
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let sum = 0,arr = [];
    for(let i=0;i<ops.length;i++){
        let temp = ops[i];
        switch(temp){
            case 'C': 
                let obj1 = arr.pop();
                sum -= obj1;
                break;
            case '+':
                let obj2 = arr[arr.length-1] + arr[arr.length-2];
                arr.push(obj2);
                sum +=obj2;
                break;
            case 'D':
                let obj3 = arr[arr.length-1]*2;
                arr.push(obj3);
                sum += obj3;
                break;
            default:
                arr.push(Number(temp));
                sum += Number(temp);
            }
    }
    return sum
};

```

