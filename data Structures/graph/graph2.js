// geek for geeks
// https://www.geeksforgeeks.org/implementation-graph-javascript/

// graph vertex lista as Map
// and edge as Set

const Queue = require('../../simple/queue')


class Graph{
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices
        this.AdjList = new Map()
    }

    addVertex(v){
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(v,[])
    }
    addEdge(v,w){
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
        if(!this.AdjList.get(v) || !this.AdjList.get(w)) return 'no vertex'
        this.AdjList.get(v).push(w)
        // Since graph is undirected,
        // add an edge from w to v also
        this.AdjList.get(w).push(v)
    }
    printGraph(){
        const get_keys = this.AdjList.keys()
        for(let i of get_keys){
            // get the corresponding adjacency list
            // for the vertex
            const get_values = this.AdjList.get(i)
            let conc = ''
            // iterate over the adjacency list
            // concatenate the values into a string
            for(let j of get_values){
                conc += j + ' '
            }
            console.log(i+'->'+conc)


        }
    }
    bfs(startingNode){
        const visited = {}
        const q = new Queue

        // add the starting node to the queue
        visited[startingNode] = true
        q.enqueue(startingNode)
    }
}


let newGraph = new Graph(6)

let vertices = [  'B', 'C', 'D', 'E', 'F' ]

for(i = 0 ; i <vertices.length ; i++){
    newGraph.addVertex(vertices[i])
}
(newGraph.addEdge('A', 'B'));
newGraph.addEdge('A', 'D');
newGraph.addEdge('A', 'E');
newGraph.addEdge('B', 'C');
newGraph.addEdge('D', 'E');
newGraph.addEdge('E', 'F');
newGraph.addEdge('E', 'C');
newGraph.addEdge('C', 'F');

newGraph.printGraph()

newGraph.bfs('A')