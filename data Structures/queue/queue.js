
class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    enQueue(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.length ++
    }
    deQueue(){
        this.tail = this.tail.prev
        this.tail.next = null
        this.length --
    }
    peek(){
        return this.head.value
    }
    length(){
        return this.length
    }

    print(){
        if(!this.length) return console.log(null)
        let temp = this.head
        while(temp){
            console.log(temp.value)
            temp = temp.next
        }
    }
}


let newQueue  = new Queue()

newQueue.enQueue(10)
newQueue.enQueue(20)
newQueue.enQueue(30)
newQueue.enQueue(77)

newQueue.deQueue()

newQueue.print()