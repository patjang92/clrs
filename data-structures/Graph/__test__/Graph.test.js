import Graph from '../Graph';

describe('Graph', () => {

  it('can add vertices', () => {
    let g = new Graph();
    expect(g.vertices).toEqual([]);

    g.addVertex('A');
    expect(g.vertices).toEqual(['A']);
    expect(g.adjList).toEqual({ 'A' : new Set() });

    g.addVertex('A');
    expect(g.vertices).toEqual(['A']);
    expect(g.adjList).toEqual({ 'A' : new Set() })

    g.addVertex('B');
    expect(g.vertices).toEqual(['A', 'B']);
    expect(g.adjList).toEqual({ 'A' : new Set(), 'B': new Set() })
  })

  it('can add edges for undirected graph', () => {
    let g = new Graph();
    g.addVertex('A');
    g.addVertex('B');
    g.addEdge('A', 'B');

    expect(g.adjList['A'].has('B')).toBe(true);
    expect(g.adjList['B'].has('A')).toBe(true);

    g.addEdge('A', 'B');
    expect(g.adjList['A'].has('B')).toBe(true);
    expect(g.adjList['B'].has('A')).toBe(true);

    g.addVertex('C');
    g.addEdge('A', 'C');
    expect(g.adjList['A'].has('B')).toBe(true);
    expect(g.adjList['A'].has('C')).toBe(true);
    expect(g.adjList['C'].has('A')).toBe(true);
  })


  it('can add edges for directed graph', () => {
    let g = new Graph(true);
    g.addVertex('A');
    g.addVertex('B');
    g.addEdge('A', 'B');

    expect(g.adjList['A'].has('B')).toBe(true);
    expect(g.adjList['B'].has('A')).toBe(false);

    g.addEdge('A', 'B');
    expect(g.adjList['A'].has('B')).toBe(true);
    expect(g.adjList['B'].has('A')).toBe(false);

    g.addVertex('C');
    g.addEdge('A', 'C');
    expect(g.adjList['A'].has('B')).toBe(true);
    expect(g.adjList['A'].has('C')).toBe(true);
    expect(g.adjList['C'].has('A')).toBe(false);
  })

  it('can remove edges for undirected graph', () => {
    let g = new Graph();
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addEdge('A', 'B');
    g.addEdge('A', 'C');

    g.removeEdge('A', 'B');
    expect(g.adjList['A'].has('B')).toBe(false);
    expect(g.adjList['B'].has('A')).toBe(false);

    g.removeEdge('C', 'A');

    expect(g.adjList['A'].has('C')).toBe(false);
    expect(g.adjList['C'].has('A')).toBe(false);
  })

  it('can remove edges for directed graph', () => {
    let g = new Graph(true);
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addEdge('A', 'B');
    g.addEdge('A', 'C');

    g.removeEdge('B', 'A')

    expect(g.getEdges('A')).toEqual(['B', 'C']);
    expect(g.getEdges('B')).toEqual([]);
    expect(g.getEdges('C')).toEqual([]);

    g.removeEdge('A', 'B');
    expect(g.getEdges('A')).toEqual(['C']);
  })

  it('can remove vertices', () => {
    let g = new Graph();
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');

    g.removeVertex('D');
    expect(g.vertices).toEqual(['A', 'B', 'C']);

    g.removeVertex('C');
    expect(g.vertices).toEqual(['A', 'B']);

    g.addEdge('A', 'B');
    g.removeVertex('B');
    expect(g.vertices).toEqual(['A']);
    expect(g.getEdges('A')).toEqual([]);
  })

  it('can get adj matrix', () => {
    let g = new Graph();
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addEdge('A', 'B');
    g.addEdge('A', 'C');

    const mockMatrix = [
      [0, 1, 1],
      [1, 0, 0],
      [1, 0, 0]
    ];

    expect(g.adjMatrix).toEqual(mockMatrix);

  })

})