import Graph from '../Graph';
import GraphVertex from '../GraphVertex';
import GraphEdge from '../GraphEdge';
import depthFirstSearch from '../depthFirstSearch';
import stronglyConnectedComponents from '../stronglyConnectedComponents';

describe('Graph - Strongly Connected Components', () => {
  it('should get strongly connected components', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');
    const vertexG = new GraphVertex('G');
    const vertexH = new GraphVertex('H');
    const vertexI = new GraphVertex('I');
    const vertexJ = new GraphVertex('J');
    const vertexK = new GraphVertex('K');

    const edgeAB = new GraphEdge(vertexA, vertexB);

    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeDB = new GraphEdge(vertexD, vertexB);
    
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeEF = new GraphEdge(vertexE, vertexF);
    const edgeFA = new GraphEdge(vertexF, vertexA);

    const edgeAG = new GraphEdge(vertexA, vertexG);
    const edgeHG = new GraphEdge(vertexH, vertexG);
    const edgeGH = new GraphEdge(vertexG, vertexH);

    const edgeAI = new GraphEdge(vertexA, vertexI);

    const edgeJK = new GraphEdge(vertexJ, vertexK);
    const edgeKJ = new GraphEdge(vertexK, vertexJ);

    const graph = new Graph(true);
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeDB)
      .addEdge(edgeHG)
      .addEdge(edgeGH)
      .addEdge(edgeAE)
      .addEdge(edgeEF)
      .addEdge(edgeFA)
      .addEdge(edgeAI)
      .addEdge(edgeAG)
      .addEdge(edgeJK)
      .addEdge(edgeKJ)

    const sccSets = stronglyConnectedComponents(graph);
    expect(sccSets.map(set => set.map(v => v.value))).toEqual([['J', 'K'], ['A','F','E'], ['G', 'H'], ['I'], ['B','D','C']])



  })
})