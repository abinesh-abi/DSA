
// https://reginafurness.medium.com/implementing-a-max-heap-in-javascript-b3e2f788390c

class MaxHeap {
  constructor() {
    // this is where the array that represents our heap will be stored
    this.values = [];
  }

  // index of the parent node
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // index of the left child node
  leftChild(index) {
    return index * 2 + 1;
  }

  // index of the right child node
  rightChild(index) {
    return index * 2 + 2;
  }

  // returns true if index is of a node that has no children
  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    );
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [ this.values[index2],this.values[index1]];
  }


  print() {
    if(!this.values.length)return console.log('heap is empty')

    if(this.isLeaf(0)) return console.log('ROOT',this.values[0])

    let i = 0;
    while (!this.isLeaf(i)) {
      console.log("PARENT:", this.values[i]);
      console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
      console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
      i++;
    }
  }

  add(value){
    if(!this.values.length) return this.values.push(value)
    this.values.push(value)
    this.heapifyUp(this.values.length -1)
  }

  heapifyUp(index){
    let currentIndex = index
    let parentIndex =  this.parent(index)

    while(currentIndex > 0 && this.values[currentIndex]>this.values[parentIndex]){
      // swap 
      this.swap(currentIndex,parentIndex)
      
      // this.currentIndex = 0
      currentIndex = parentIndex
      parentIndex = this.parent(currentIndex)
    }
  }

  heapifyDown(index) {
    if(!this.isLeaf(index)){
      let leftChildIndex = this.leftChild(index)
      let rightChildIndex = this.rightChild(index)
      let largestIndex = index
      if(this.values[leftChildIndex]>this.values[largestIndex]){
        largestIndex = leftChildIndex
      }
      if(this.values[rightChildIndex]>this.values[largestIndex]){
        largestIndex = rightChildIndex
      }

      // compare indext to largestIndex
      if(largestIndex !== index){
        this.swap(index,largestIndex)
        this.heapifyDown(largestIndex)
      }

    }

  }
  
  // for delete root
  extractMax() {
    if(!this.values.length)return 'Heap is empty'
    const max = this.values[0]
    const end = this.values.pop()
    // assign first element as lastememt
    this.values[0] = end
    this.heapifyDown(0)
    return max
  }
  
  // build heap from an array
  buildHeap(array){
    this.values = array

    // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
    let lastParent =Math.floor(this.values.length/2) //for get last parent
    for(let i=lastParent ;i>=0;i--){
      this.heapifyDown(i)
    }
  }

  peek =()=> this.values[0]
}


let heap = new MaxHeap();
heap.buildHeap([9,8,6,15,20,10])
// heap.extractMax()

// heap.add(9)
// heap.add(8)
// heap.add(6)
// heap.add(15)
// heap.add(20)
// heap.add(10)

// console.log(heap.extractMax())

// console.log(heap.peek())

console.log(heap.values)



// Let’s look at the time complexity of the methods we just wrote:

// leftChild, rightChild, parent, and isLeaf() take O(1) time
// heapifyUp, and heapifyDown both take O(log n) time
// add takes O(log n)
// extractMax takes O(log n) time
// print takes O(n-l) where l represents the number of leaves. In a complete binary tree, 1/2 the nodes are leaves, so you could also say O(1/2n) or simply, O(n).
// buildHeap takes O(n)

////////////////////////////////////////////////////////////////////////
// heap sort
let sortArray = [6,2,33,11,3,2,1,55,55]
console.log(heapSort(sortArray))
function heapSort(array){
  let sorted = []
  let heap = new MaxHeap()
  // heap.buildHeap(array)
  for(let i=0;i<array.length;i++){
    heap.add(sortArray[i])
  }

  for(let i=0;i<array.length;i++){
    sorted.push(heap.extractMax())
  }
  return sorted
}
