import Graph from './Graph';
import DisjointSet from '../DisjointSet/DisjointSet';
import QuickSort from '../../algorithms/sorts/QuickSort';

export default function kruskal(graph) {

  if (graph.isDirected) throw new Error("Kruskal's algorithm only works on undirected graphs");

  const mst = new Graph();
  const disjointSet = new DisjointSet((vertex) => vertex.getKey());

  graph.getAllVertices().forEach(vertex => {
    disjointSet.makeSet(vertex);
  })

  const callbacks = {
    compareCallback: (edgeA, edgeB) => {
      if (edgeA.weight == edgeB.weight) return 0;
      else if (edgeA.weight > edgeB.weight) return 1;
      return -1;
    }
  }

  const sortedEdges = new QuickSort(callbacks).sort(graph.getAllEdges())

  sortedEdges.forEach((edge) => {
    const { startVertex, endVertex } = edge;

    if (!disjointSet.inSameSet(startVertex, endVertex)) {
      mst.addEdge(edge);
      disjointSet.union(startVertex, endVertex);
    }
  })

  return mst;
}