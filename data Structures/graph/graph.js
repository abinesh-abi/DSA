// // adjacency matrix
// const matrix = [
//     [0,1,0],[1,0,1],[0,1,0]
// ]

// console.log(matrix)

// // adjacency list
// const adjacencyList ={
//     'A':['B'],
//     'B':['A','C'],
//     'C':['B']
// }
// console.log(adjacencyList['A'])

// graph vertex Object
// and Edge as Set


// https://replit.com/@Codevolution/JavaScript-Data-Structures#graph.js
class Graph{
    constructor(){
        this.vertices =[]
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
            this.vertices.push(vertex)
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = new Set();
           this.addVertex[vertex1]
        }
        if (!this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = new Set();
           this.addVertex[vertex2]
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '-> ' + [...this.adjacencyList[vertex]] )
        }
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        &&
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
           return  
        }
        for(let adjcentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjcentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2)
            &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    BFS(root=this.vertices){
        // my own implementation
        let queue = []
        let visited = new Set()
        queue.push(root[0])
        visited.add(root[0])
        while(queue.length){
            let curr = queue.shift()
            for(let val of this.adjacencyList[curr]){
               if(!visited.has(val)) {
                queue.push(val)
                visited.add(val)
            }
            }
            console.log(curr)
        }
        let isCompleate = root.filter(val=>!visited.has(val))
        if(isCompleate.length)this.BFS(isCompleate)
    }
    DFS(){
        // my own implementation
         let visited =new Set()
        for(let i in this.adjacencyList){
                if(!visited.has(i)){
                    visited.add(i)
                    console.log(i)
                } 
            this.adjacencyList[i].forEach(val=>{
                if(!visited.has(val)){
                    visited.add(val)
                    console.log(val)
                } 
            })
        }
    }
}
const graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')

graph.addVertex('H')
graph.addVertex('I')
graph.addVertex('J')

graph.addEdge('A','B')
graph.addEdge('A','D')
graph.addEdge('B','D')
graph.addEdge('D','C')
graph.addEdge('C','G')
graph.addEdge('D','E')
graph.addEdge('E','F')

graph.addEdge('H','I')
graph.addEdge('H','J')
// graph.addEdge('A','C')

// graph.removeVertex('B')

// graph.BFS()
graph.DFS()
graph.display()

// console.log(graph.hasEdge('A','B'))

