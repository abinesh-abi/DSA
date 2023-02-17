class MinHeap {
  constructor() {
    this.values = [];
  }

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
      index >= Math.floor(this.values.length / 2) 
             &&
      index <= this.values.length - 1
    );
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
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
    let i = 0
    this.values.push(value)
    this.heapifyUp(this.values.length-1)
  }

  heapifyUp(index){
    let currentIndex = index
    let parentIndex = this.parent(index)
    while(this.values[currentIndex] < this.values[parentIndex]){
        this.swap(currentIndex,parentIndex)
        currentIndex = parentIndex
        parentIndex = this.parent(currentIndex)
        this.heapifyUp(currentIndex)
    }
  }
  heapifyDown(index){
    if(!this.isLeaf(index)){
        let leftChildIndex = this.leftChild(index)
        let rightChildIndex = this.rightChild(index)
        let largestIndex = index
        if(this.values[leftChildIndex]<this.values[largestIndex]){
            largestIndex = leftChildIndex
        }

        if(this.values[rightChildIndex]<this.values[largestIndex]){
            largestIndex = rightChildIndex
        }
        if(largestIndex !== index){
            this.swap(largestIndex,index)
            this.heapifyDown(largestIndex)
        }

    }
  }
    
  extractMin(){
    if(!this.values.length)return 'This Heap is Empty'
    let min = this.values[0]
    let end = this.values.pop()
    this.values[0] = end
    this.heapifyDown(0)
    return min
  }

}


let heap = new MinHeap();
heap.add(9)
heap.add(8)
heap.add(15)
heap.add(6)
heap.add(20)
heap.add(10)
heap.extractMin()

// console.log(heap.values)
// heap.print()


// Let’s look at the time complexity of the methods we just wrote:

// leftChild, rightChild, parent, and isLeaf() take O(1) time
// heapifyUp, and heapifyDown both take O(log n) time
// add takes O(log n)
// extractMax takes O(log n) time
// print takes O(n-l) where l represents the number of leaves. In a complete binary tree, 1/2 the nodes are leaves, so you could also say O(1/2n) or simply, O(n).
// buildHeap takes O(n)


/////////////////////////////////////////////////////////////////
let arrayToSort = [6,2,33,11,3,2,1,55,55]
console.log(heapSort(arrayToSort))
function heapSort(array){
    let output = []
    let heap = new MinHeap()
    for(val of array){
        heap.add(val)
    }
    for(i=0;i<arrayToSort.length;i++){
        output.push(heap.extractMin())
    }
    return output
}