var rangeSumBST = function(root, L, R) {
    let inOrderNode = (node)=>{
        if(node == null) return 0;
        else{
            if(node.val > R){
                return inOrderNode(node.left);
            }
            else if(node.val < L){
                return inOrderNode(node.right);
            }
            else {
                return node.val + inOrderNode(node.left) + inOrderNode(node.right);
            }
        }
    }
    return inOrderNode(root);
};