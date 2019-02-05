import GraphVertex from '../GraphVertex'
import GraphEdge from '../GraphEdge'
import Graph from '../Graph'
import dagShortestPaths from '../dagShortestPaths'

describe('dagShortestPaths', () => {
  it('should find minimum paths to all vertices for directed graph', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');
    const vertexG = new GraphVertex('G');
    const vertexH = new GraphVertex('H');

    const edgeAB = new GraphEdge(vertexA, vertexB, 4);
    const edgeAE = new GraphEdge(vertexA, vertexE, 7);
    const edgeAC = new GraphEdge(vertexA, vertexC, 3);
    const edgeBC = new GraphEdge(vertexB, vertexC, 6);
    const edgeBD = new GraphEdge(vertexB, vertexD, 5);
    const edgeDG = new GraphEdge(vertexD, vertexG, 10);
    const edgeDF = new GraphEdge(vertexD, vertexF, 2);
    const edgeFG = new GraphEdge(vertexF, vertexG, 3);
    const edgeEG = new GraphEdge(vertexE, vertexG, 5);
    const edgeHA = new GraphEdge(vertexH, vertexA, 9);

    const graph = new Graph(true);
    graph
      .addEdge(edgeHA)
      .addEdge(edgeAB)
      .addEdge(edgeAE)
      .addEdge(edgeAC)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeDG)
      .addEdge(edgeDF)
      .addEdge(edgeFG)
      .addEdge(edgeEG)

    const { distances, parents } = dagShortestPaths(graph, vertexA);

    expect(distances).toEqual({
      H: Infinity,
      A: 0,
      B: 4,
      C: 3,
      D: 9,
      E: 7,
      F: 11,
      G: 12,
    });

    expect(parents).toEqual({
      H: null,
      A: null,
      B: vertexA,
      C: vertexA,
      D: vertexB,
      E: vertexA,
      F: vertexD,
      G: vertexE,
    })

  });
});