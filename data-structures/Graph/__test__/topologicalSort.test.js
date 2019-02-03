import Graph from '../Graph';
import GraphVertex from '../GraphVertex';
import GraphEdge from '../GraphEdge';
import depthFirstSearch from '../depthFirstSearch';
import topologicalSort from '../topologicalSort';

describe('Graph - Topological Sort', () => {
  it('should do a topological sort', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');

    const vertexG = new GraphVertex('G');
    const vertexH = new GraphVertex('H');
    const vertexI = new GraphVertex('I');


    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeBD = new GraphEdge(vertexB, vertexD);
    const edgeEA = new GraphEdge(vertexE, vertexA);
    const edgeFE = new GraphEdge(vertexF, vertexE);

    
    const edgeHG = new GraphEdge(vertexH, vertexG);
    const edgeIG = new GraphEdge(vertexI, vertexG);

    const graph = new Graph(true);
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeBD)
      .addEdge(edgeHG)
      .addEdge(edgeIG)
      .addEdge(edgeEA)
      .addEdge(edgeFE)

    console.log('graph.getAllVertices() :', graph.getAllVertices());

    let sorted = topologicalSort(graph);
    console.log('sorted :', sorted);
  })

  it('should do topological sorting on graph', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');
    const vertexG = new GraphVertex('G');
    const vertexH = new GraphVertex('H');

    const edgeAC = new GraphEdge(vertexA, vertexC);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeBD = new GraphEdge(vertexB, vertexD);
    const edgeCE = new GraphEdge(vertexC, vertexE);
    const edgeDF = new GraphEdge(vertexD, vertexF);
    const edgeEF = new GraphEdge(vertexE, vertexF);
    const edgeEH = new GraphEdge(vertexE, vertexH);
    const edgeFG = new GraphEdge(vertexF, vertexG);

    const graph = new Graph(true);

    graph
      .addEdge(edgeAC)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeCE)
      .addEdge(edgeDF)
      .addEdge(edgeEF)
      .addEdge(edgeEH)
      .addEdge(edgeFG);

    const sortedVertices = topologicalSort(graph);

    expect(sortedVertices).toBeDefined();
    expect(sortedVertices.length).toBe(graph.getAllVertices().length);
    
    expect(sortedVertices.map(v => v.value)).toEqual([
      vertexB,
      vertexD,
      vertexA,
      vertexC,
      vertexE,
      vertexH,
      vertexF,
      vertexG,
    ].map(v => v.value));
  })
})