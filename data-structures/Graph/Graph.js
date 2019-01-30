import Queue from '../Queue/Queue';

class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

export default class Graph {

  constructor(directed = false) {
    this.directed = directed;
    this.vertices = [];
    this.adjList = {};
  }

  addVertex(v) {
    if (this.getVertices().includes(v)) return false;
    this.adjList[v] = new Set();
  }

  addEdge(v, u) {
    const vertices = this.getVertices();
    console.log('vertices :', vertices);

    if (!vertices.includes(v) || !vertices.includes(u)) {
      throw new Error("Vertex does not exist");
    }

    this.getEdges(v).add(u);

    if (!this.directed) {
      this.getEdges(u).add(v);
    } 

    return true;
  }

  removeVertex(v) {
    let vertices = this.getVertices();
    const index = vertices.indexOf(v);
    if (index < 0) return false;

    delete this.adjList[v];    

    Object.values(this.adjList).forEach(edges => {
      edges.delete(v);
    })

    return true;
  }

  removeEdge(v, u) {
    const vertices = this.getVertices();

    if (!vertices.includes(v) || !vertices.includes(u)) {
      throw new Error("Vertex does not exist");
    }
    
    this.getEdges(v).delete(u);

    if (!this.directed) {
      this.getEdges(u).delete(v);
    }

    return true;
  }

  get adjMatrix() {
    const vertices = this.getVertices();
    const numVertices = vertices.length;
    let matrix = new Array(numVertices).fill(0).map(() => new Array(numVertices).fill(0));
    
    vertices.forEach((v, i) => {
      this.getEdges(v).forEach(u => {
        matrix[i][vertices.indexOf(u)] = 1;
      }) 
    })

    return matrix;
  }

  getVertices() {
    return Object.keys(this.adjList);
  }

  getEdges(v) {
    if (!this.getVertices().includes(v)) throw new Error("Vertex does not exist");
    return this.adjList[v];
  }

  getEdgesArray(v) {
    if (!this.getVertices().includes(v)) throw new Error("Vertex does not exist");
    return Array.from(this.adjList[v]);
  }

  bfsTraversal(start, dest) {
    const vertices = this.getVertices();
    if (!vertices.includes(s)) return;

    // enum
    const Status = Object.freeze({ UNVISITED: "unvisited", VISITING: "visited", VISITED: "visited" });

    const visitStatuses = {};
    const distances = {};
    const parents = {};

    let vertexQueue = new Queue();

    vertices.forEach(v => { 
      visitStatuses[v] = Status.UNVISITED;
      distances[v] = Infinity;
      parents[v] = null;
    })

    visitStatuses[start] = Status.VISITING;
    distances[start] = 0;
    parents[start] = null;

    vertexQueue.enqueue(start);

    while (!vertexQueue.isEmpty()) {
      let u = vertexQueue.dequeue();
      if (u == dest) return { node: u, distance: distances[u], parent: parents[u] };


      this.getEdges(u).forEach(v => {
        if (visitStatuses[v] == Status.UNVISITED) {
          visitStatuses[v] = Status.VISITING;
          distances[v] = distances[u] + 1;
          parents[v] = u;
          vertexQueue.enqueue(v);
        }
      })

      visitStatuses[u] = Status.VISITED;
    }

    return null;
  }

}