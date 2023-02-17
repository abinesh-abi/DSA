
class Node{
    constructor(value){
        this.value =value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    push=(value)=>{
        let node = new Node(value)
        if (!this.head) {
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
            this.length = this.length ++
    }

    peek(){
        if (!this.head)return null
        return this.head.value
    }
    pop = ()=>{
        if(!this.head) return null
        this.head = this.head.next
        this.length --
        
    }

}

let newStack = new Stack()
newStack.push(10)
newStack.push(20)
newStack.push(30)

newStack.pop()

console.log(newStack.peek())