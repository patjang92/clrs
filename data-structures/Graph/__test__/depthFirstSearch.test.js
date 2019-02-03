import Graph from '../Graph';
import GraphVertex from '../GraphVertex';
import GraphEdge from '../GraphEdge';
import depthFirstSearch from '../depthFirstSearch';

describe('Depth First Search', () => {
  it('should do a depth first search', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeBD = new GraphEdge(vertexB, vertexD);
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeEF = new GraphEdge(vertexE, vertexF);

    const graph = new Graph(true);
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeBD)
      .addEdge(edgeAE)
      .addEdge(edgeEF);

    let traversal = [];
    let time = 0;
    let discoveryTime = {};
    let finishTime = {};
    let parent = {};
    
    const enterVertex = ({ currentVertex, previousVertex }) => { 
      time++;
      traversal.push(currentVertex.value) 
      discoveryTime[currentVertex.getKey()] = time;
      parent[currentVertex.getKey()] = previousVertex;
    }

    const leaveVertex = ({currentVertex}) => {
      time++;
      finishTime[currentVertex.getKey()] = time;
    }

    depthFirstSearch(graph, vertexA, { enterVertex, leaveVertex })

    expect(traversal).toEqual(['A', 'B', 'C', 'D', 'E', 'F'])
    expect(discoveryTime).toEqual({ A: 1, B: 2, C: 3, D: 4, E: 8, F: 9 });
    expect(finishTime).toEqual({ D: 5, C: 6, B: 7, F: 10, E: 11, A: 12 })
  })

  it('graph should do standard dfs traversal', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');
    const vertexD = new GraphVertex('D');
    const vertexE = new GraphVertex('E');
    const vertexF = new GraphVertex('F');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeBD = new GraphEdge(vertexB, vertexD);
    const edgeAE = new GraphEdge(vertexA, vertexE);
    const edgeEF = new GraphEdge(vertexE, vertexF);

    const graph = new Graph(true);
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeBD)
      .addEdge(edgeAE)
      .addEdge(edgeEF);

    let { traversal, discoveryTime ,finishTime, parent } = graph.dfsTraversal(vertexA)

    expect(traversal).toEqual(['A', 'B', 'C', 'D', 'E', 'F'])
    expect(discoveryTime).toEqual({ A: 1, B: 2, C: 3, D: 4, E: 8, F: 9 });
    expect(finishTime).toEqual({ D: 5, C: 6, B: 7, F: 10, E: 11, A: 12 })  
  })
})