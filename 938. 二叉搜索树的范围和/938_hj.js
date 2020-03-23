// var rangeSumBST = function(root, L, R) {
//     let inOrderNode = (node)=>{
//         if(node == null) return 0;//递归的出口(终止条件)
//         else{
//             if(node.val > R){//大于这个范围
//                 return inOrderNode(node.left);//返回其左节点的总和
//             }
//             else if(node.val < L){//小于这个范围
//                 return inOrderNode(node.right);//返回其右节点的总和
//             }
//             else {//属于这个范围
//                 return node.val + inOrderNode(node.left) + inOrderNode(node.right);//当前节点的总和
//             }
//         }
//     }
//     return inOrderNode(root);
// };


var sum = arr => {//arr0=[1, 2, 3] arr1=[1 ,2] arr2=[1]
    if(arr.length==1) return arr[0];//return2 arr3[0]; 
    else{
        let cur = arr.pop();//arr0=[1, 2] cur0=3  arr1=[1] cur1=2
        return sum(arr) + cur;//return0 sum1(arr0) + 3 return1 sum2(arr1) + 2
    }
}

console.log(sum([1, 2, 3]));//sum0([1, 2, 3])

