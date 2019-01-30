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
    if (this.vertices.includes(v)) return false;
    this.vertices.push(v);
    this.adjList[v] = new Set();
  }

  addEdge(v, u) {
    if (!this.vertices.includes(v) || !this.vertices.includes(u)) {
      throw new Error("Vertex does not exist");
    }

    this.adjList[v].add(u);

    if (!this.directed) {
      this.adjList[u].add(v);
    } 

    return true;
  }

  removeVertex(v) {
    const index = this.vertices.indexOf(v);
    if (index < 0) return false;

    this.vertices.splice(index, 1);

    Object.values(this.adjList).forEach(vertices => {
      vertices.delete(v);
    })

    delete this.adjList[v];

    return true;
  }

  removeEdge(v, u) {
    if (!this.vertices.includes(v) || !this.vertices.includes(u)) {
      throw new Error("Vertex does not exist");
    }
    
    this.adjList[v].delete(u);

    if (!this.directed) {
      this.adjList[u].delete(v);
    }

    return true;
  }

  get adjMatrix() {
    const numVertices = this.vertices.length;
    let matrix = new Array(numVertices).fill(0).map(() => new Array(numVertices).fill(0));
    
    this.vertices.forEach((v, i) => {
      this.adjList[v].forEach(u => {
        matrix[i][this.vertices.indexOf(u)] = 1;
      }) 
    })

    return matrix;
  }

  getEdges(v) {
    if (!this.vertices.includes(v)) throw new Error("Vertex does not exist");
    return Array.from(this.adjList[v]);
  }

  bfsSearch(start, dest) {
    if (!this.vertices.includes(s)) return;

    const Status = Object.freeze({ UNVISITED: "unvisited", VISITING: "visited", VISITED: "visited" });

    const visitStatuses = {};
    const distances = {};
    const parents = {};

    let vertexQueue = new Queue();

    this.vertices.forEach(v => { 
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