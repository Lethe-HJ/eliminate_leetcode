// 面试题 02.01. 移除重复节点
// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
// 示例1:
//  输入：[1, 2, 3, 3, 2, 1]
//  输出：[1, 2, 3]
// 示例2:
//  输入：[1, 1, 1, 1, 2]
//  输出：[1, 2]
// 提示：
// 链表长度在[0, 20000]范围内。
// 链表元素在[0, 20000]范围内。
// 进阶：
// 如果不得使用临时缓冲区，该怎么解决？
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
    let current = head;
    while (current !== null) {
        // console.log(current.val)
        delSameBehind(current);
        current = current.next;
    }
    return head;
};

var delSameBehind = function (target) {
    let current = target.next;
    while (current !== null) {
        // console.log(current.val)
        if (current.val == target.val) {
            if (current.next !== null) {
                current.next = current.next.next ? current.next.next : null;
            }
            else {
                current.next = null;
            }
        }
        current = current.next;
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;

}

let test = [1, 2, 3, 3, 2, 1];

let head = new ListNode(test[0]);
let current = head;
for (let i = 1; i < test.length; i++) {
    current.next = new ListNode(test[i]);
    current = current.next;
}

head = removeDuplicateNodes(head);
current = head;
while (
    current.next !== null) {
    console.log(current.val);
    current = current.next;
}