import breadthFirstSearch from './breadthFirstSearch';
import depthFirstSearch from './depthFirstSearch';

export default class Graph {
  /**
   * @param {boolean} isDirected
   */
  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  /**
   * @param {GraphVertex} newVertex
   * @returns {Graph}
   */
  addVertex(newVertex) {
    this.vertices[newVertex.getKey()] = newVertex;

    return this;
  }

  /**
   * @param {string} vertexKey
   * @returns GraphVertex
   */
  getVertexByKey(vertexKey) {
    return this.vertices[vertexKey];
  }

  /**
   * @param {GraphVertex} vertex
   * @returns {GraphVertex[]}
   */
  getNeighbors(vertex) {
    return vertex.getNeighbors();
  }

  /**
   * @return {GraphVertex[]}
   */
  getAllVertices() {
    return Object.values(this.vertices);
  }

  /**
   * @return {GraphEdge[]}
   */
  getAllEdges() {
    return Object.values(this.edges);
  }

  /**
   * @param {GraphEdge} edge
   * @returns {Graph}
   */
  addEdge(edge) {
    // Try to find and end start vertices.
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    // Insert start vertex if it wasn't inserted.
    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }

    // Insert end vertex if it wasn't inserted.
    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey());
    }

    // Check if edge has been already added.
    if (this.edges[edge.getKey()]) {
      throw new Error('Edge has already been added before');
    } else {
      this.edges[edge.getKey()] = edge;
    }

    // Add edge to the vertices.
    if (this.isDirected) {
      // If graph IS directed then add the edge only to start vertex.
      startVertex.addEdge(edge);
    } else {
      // If graph ISN'T directed then add the edge to both vertices.
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }

  /**
   * @param {GraphEdge} edge
   */
  deleteEdge(edge) {
    // Delete edge from the list of edges.
    if (this.edges[edge.getKey()]) {
      delete this.edges[edge.getKey()];
    } else {
      throw new Error('Edge not found in graph');
    }

    // Try to find and end start vertices and delete edge from them.
    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);
  }

  /**
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @return {(GraphEdge|null)}
   */
  findEdge(startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex.getKey());

    if (!vertex) {
      return null;
    }

    return vertex.findEdge(endVertex);
  }

  /**
   * @return {number}
   */
  getWeight() {
    return this.getAllEdges().reduce((weight, graphEdge) => {
      return weight + graphEdge.weight;
    }, 0);
  }

  /**
   * Reverse all the edges in directed graph.
   * @return {Graph}
   */
  reverse() {
    /** @param {GraphEdge} edge */
    this.getAllEdges().forEach((edge) => {

      if (!this.findEdge(edge.endVertex, edge.startVertex)) {
        // Delete straight edge from graph and from vertices.
        this.deleteEdge(edge);

        // Reverse the edge.
        edge.reverse();
  
        // Add reversed edge back to the graph and its vertices.
        this.addEdge(edge);
      }
    });

    return this;
  }

  /**
   * @return {object}
   */
  getVerticesIndices() {
    const verticesIndices = {};
    this.getAllVertices().forEach((vertex, index) => {
      verticesIndices[vertex.getKey()] = index;
    });

    return verticesIndices;
  }

  /**
   * @return {*[][]}
   */
  getAdjacencyMatrix() {
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    // Init matrix with infinities meaning that there is no ways of
    // getting from one vertex to another yet.
    const adjacencyMatrix = Array(vertices.length).fill(null).map(() => {
      return Array(vertices.length).fill(Infinity);
    });

    // Fill the columns.
    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors().forEach((neighbor) => {
        const neighborIndex = verticesIndices[neighbor.getKey()];
        adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight;
      });
    });

    return adjacencyMatrix;
  }

  /**
   * @return {string}
   */
  toString() {
    return Object.keys(this.vertices).toString();
  }


  bfsTraversal(start) {
    let traversal = [];
    let parent = {};
    let distance = {};
    let visited = {};

    distance[start.getKey()] = 0;
    parent[start.getKey()] = null;
    
    const enterVertex = ({ currentVertex }) => {
      let key = currentVertex.getKey();
      visited[key] = true;
      traversal.push(currentVertex);
    }
  
    const allowTraversal = ({ currentVertex, nextVertex }) => {
      if (!visited.hasOwnProperty(nextVertex.getKey())) {
        let nKey = nextVertex.getKey();
        visited[nKey] = true;
        parent[nKey] = currentVertex;
        distance[nKey] = distance[currentVertex.getKey()] + 1;
        return true;
      }
      return false;
    }

    breadthFirstSearch(this, start, { enterVertex, allowTraversal })
    return { traversal, parent, distance }
  }

  dfsTraversal(startVertex) {
    let time = 0;
    const traversal = [];
    const discoveryTime = {};
    const finishTime = {};
    const parent = {};
    const visited = {};

    const enterVertex = ({ currentVertex, previousVertex }) => { 
      visited[currentVertex.getKey()] = true;
      time++;
      traversal.push(currentVertex.value) 
      discoveryTime[currentVertex.getKey()] = time;
      parent[currentVertex.getKey()] = previousVertex;
    }

    const allowTraversal = ({ nextVertex }) => {
      return !visited.hasOwnProperty(nextVertex.getKey())
    }

    const leaveVertex = ({currentVertex}) => {
      time++;
      finishTime[currentVertex.getKey()] = time;
    }

    depthFirstSearch(this, startVertex, { enterVertex, allowTraversal, leaveVertex });

    return { traversal, discoveryTime, finishTime, parent }
  }

}