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

    // if (!this.adjList.hasOwnProperty(v)) {
    //   this.adjList[v] = new Set();
    // }
    this.adjList[v].add(u);

    if (!this.directed) {
      // if (!this.adjList.hasOwnProperty(u)) {
      //   this.adjList[u] = new Set();
      // }
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

    
    // if (this.adjList.hasOwnProperty(v)) {
      this.adjList[v].delete(u);
    // }

    if (!this.directed) {
      // if (this.adjList.hasOwnProperty(u)) {
        this.adjList[u].delete(v);
      // }
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

}