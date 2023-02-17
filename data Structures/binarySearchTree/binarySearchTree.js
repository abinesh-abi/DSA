// https://replit.com/@Codevolution/JavaScript-Data-Structures#binary-search-tree.js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }


  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    // depth first search
    if (root) {
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
  }

  postOrder(root){
   if(root){
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
   } 
  }
  
  levelOrder(){
    // breadth first search
    const queue = []
    queue.push(this.root)
    while (queue.length) {
     let curr = queue.shift() 
     console.log(curr.value)
     if (curr.left) {
      queue.push(curr.left)
     }
     if (curr.right) {
      queue.push(curr.right)
      
     }
    }
  }

  min(root){
    if (!root.left) {
      return root.value
    }else{
      return this.min(root.left)
    }
  }

  max(root){
    if(!root.right){
      return root.value
    }else{
      return this.max(root.right)
    }
  }

  delete(value){
    this.root = this.deleteNode(this.root,value)
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  // dddd(value){
  //   let root = deleteNodeeee(value,this.root,this.min)
  //   function deleteNodeeee(value,root,min){
  //     if(!root)return root
  //     if(value < root.value)root.left = deleteNodeeee(value,root.left,min)
  //     else if(value > root.value) root.right = deleteNodeeee(value,root.right,min)
  //     else {
  //       if(!root.left && !root.right){
  //         return null
  //       }
  //       if(!root.left)return root.right
  //       if(!root.right) return root.left
  //       root.value = min(root.right)
  //       root.right = deleteNodeeee(root.right,root.value,min)
  //     }
  //     return root
  //   }
  //   this.inOrder(root)
  // }

  // isBST(node, min, max) {
  //   if (!node) {
  //     return true;
  //   }
  //   if (node.value < min || node.value > max) {
  //     return false;
  //   }
  //   return (
  //     this.isBST(node.left, min, node.value) &&
  //     this.isBST(node.right, node.value, max)
  //   );
  // }

  isBST(root = this.root){
    // my own implemetation
    if(!root)return true
    if(root.left?.value > root.value)return false
    if(root.right?.value < root.value)return false
    return (this.isBST(root.left) && this.isBST(root.right))
  }

  height(node) {
    if (!node) {
      return 0;
    } else {
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  heightttt(node){
    // my own implementation
    if(!node)return 0
    let left = this.heightttt(node.left)
    let right = this.heightttt(node.right)
    return Math.max(left,right)+1
  }

  printLevel(node, level) {
    if (!node) {
      return;
    }
    if (level === 1) {
      console.log(`${node.element} `);
    } else if (level > 1) {
      this.printLevel(node.left, level - 1);
      this.printLevel(node.right, level - 1);
    }
  }
  level(root = this.root,count = 0){
    // my own implentation
    if(!root)return --count
    count ++
    let left = this.level(root.left,count)
    let right = this.level(root.right,count)
    return Math.max(left,right)
  }

}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(20);
// bst.insert(4);
// bst.insert(7);
// bst.insert(13);
// bst.insert(16);
// bst.insert(12);
// bst.insert(2);
// bst.insert(1);
// bst.insert(9);
// bst.insert(6 );



// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 8));
// console.log(bst.search(bst.root, 15));

// console.log('preOrder++++++++++++')
// bst.preOrder(bst.root);
// console.log('inOrder++++++++++++')
// bst.inOrder(bst.root);
// console.log('postOrder++++++++++++')
// bst.postOrder(bst.root);
// console.log('levelOrder++++++++++++')
// bst.levelOrder(bst.root)

// console.log(bst.max(bst.root),'max')
// console.log(bst.min(bst.root),'min')
// bst.delete(10)

console.log('BFS - level order')
// bst.levelOrder(bst.root)

console.log('DFS - in order')
bst.inOrder(bst.root)

// console.log(bst.delete(15))
console.log('post order')
// bst.postOrder(bst.root)



// validate bst
// console.log(bst.root.left.value = 2000)
// console.log(bst.isBST(bst.root),'isbst')
// console.log(bst.isBST())
// console.log(bst.height(bst.root))
// console.log(bst.level(),'level')

// console.log(bst.heightttt(bst.root))