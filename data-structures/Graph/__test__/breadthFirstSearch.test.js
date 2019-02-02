import Graph from '../Graph';
import GraphVertex from '../GraphVertex';
import GraphEdge from '../GraphEdge';
import breadthFirstSearch from '../breadthFirstSearch';

describe('Breadth First Search', () => {
  it('should do a breadth first search', () => {
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
    let parent = {};
    let distance = {};
    let visited = {};

    distance[vertexA.getKey()] = 0;
    parent[vertexA.getKey()] = null;
    
    const enterVertex = ({ currentVertex }) => {
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

    breadthFirstSearch(graph, vertexA, { enterVertex, allowTraversal })

    expect(traversal.map(v => v.value)).toEqual([ 'A', 'B', 'E', 'C', 'D', 'F' ]);
    expect(distance).toEqual({ A: 0, B: 1, E: 1, C: 2, D: 2, F: 2 });
    expect(parent[vertexB.getKey()]).toEqual(vertexA);
  })
})