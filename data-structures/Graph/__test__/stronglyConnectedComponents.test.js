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


    const edgeAB = new GraphEdge(vertexA, vertexB);

    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeDB = new GraphEdge(vertexD, vertexB);
    
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeEF = new GraphEdge(vertexE, vertexF);
    const edgeFA = new GraphEdge(vertexF, vertexA);

    const edgeHG = new GraphEdge(vertexH, vertexG);
    const edgeIG = new GraphEdge(vertexG, vertexI);
    const edgeIH = new GraphEdge(vertexI, vertexH);


    const graph = new Graph(true);
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeDB)
      .addEdge(edgeHG)
      .addEdge(edgeIG)
      .addEdge(edgeAE)
      .addEdge(edgeEF)
      .addEdge(edgeFA)
      .addEdge(edgeIH);

    // console.log('graph.getAllVertices() :', graph.getAllVertices());


    stronglyConnectedComponents(graph);
    // console.log('sortedtoArray :', sorted.toArray());


    // expect(traversal).toEqual(['A', 'B', 'C', 'D', 'E', 'F'])
    // expect(discoveryTime).toEqual({ A: 1, B: 2, C: 3, D: 4, E: 8, F: 9 });
    // expect(finishTime).toEqual({ D: 5, C: 6, B: 7, F: 10, E: 11, A: 12 })
  })

  // it('should do topological sorting on graph', () => {
  //   const vertexA = new GraphVertex('A');
  //   const vertexB = new GraphVertex('B');
  //   const vertexC = new GraphVertex('C');
  //   const vertexD = new GraphVertex('D');
  //   const vertexE = new GraphVertex('E');
  //   const vertexF = new GraphVertex('F');
  //   const vertexG = new GraphVertex('G');
  //   const vertexH = new GraphVertex('H');

  //   const edgeAC = new GraphEdge(vertexA, vertexC);
  //   const edgeBC = new GraphEdge(vertexB, vertexC);
  //   const edgeBD = new GraphEdge(vertexB, vertexD);
  //   const edgeCE = new GraphEdge(vertexC, vertexE);
  //   const edgeDF = new GraphEdge(vertexD, vertexF);
  //   const edgeEF = new GraphEdge(vertexE, vertexF);
  //   const edgeEH = new GraphEdge(vertexE, vertexH);
  //   const edgeFG = new GraphEdge(vertexF, vertexG);

  //   const graph = new Graph(true);

  //   graph
  //     .addEdge(edgeAC)
  //     .addEdge(edgeBC)
  //     .addEdge(edgeBD)
  //     .addEdge(edgeCE)
  //     .addEdge(edgeDF)
  //     .addEdge(edgeEF)
  //     .addEdge(edgeEH)
  //     .addEdge(edgeFG);

  //   const sortedVertices = topologicalSort(graph);

  //   expect(sortedVertices).toBeDefined();
  //   expect(sortedVertices.length).toBe(graph.getAllVertices().length);
  //   // expect(sortedVertices).toEqual([
  //   //   vertexB,
  //   //   vertexD,
  //   //   vertexA,
  //   //   vertexC,
  //   //   vertexE,
  //   //   vertexH,
  //   //   vertexF,
  //   //   vertexG,
  //   // ]);
    
  //   expect(sortedVertices.map(v => v.value)).toEqual([
  //     vertexB,
  //     vertexD,
  //     vertexA,
  //     vertexC,
  //     vertexE,
  //     vertexH,
  //     vertexF,
  //     vertexG,
  //   ].map(v => v.value));
  // })
})