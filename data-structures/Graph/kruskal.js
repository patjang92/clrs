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
  console.log("sortedEdges = ", sortedEdges);

  sortedEdges.forEach((edge) => {
    const { startVertex, endVertex } = edge;
    console.log("\n---------------------------new iteration------------------------------")
    // console.log('edge :', edge);
    console.log('startVertex.value :', startVertex.value);
    console.log('endVertex.value :', endVertex.value);
    console.log('disjointedSet.items :', Object.values(disjointSet.items).map(item => { return { key: item.getKey(), root: item.getRoot().getKey() }}));
    const startVertexSet = disjointSet.find(startVertex);
    const endVertexSet = disjointSet.find(endVertex);
    console.log("startVertexSet = ", startVertexSet);
    console.log("endVertexSet = ", endVertexSet);

    if (!disjointSet.inSameSet(startVertex, endVertex)) {
      console.log("adding edge");
      mst.addEdge(edge);
      console.log('mst.getAllEdges() :', mst.getAllEdges());
      disjointSet.union(startVertex, endVertex);
      // console.log('disjointedSet.items :', Object.values(disjointSet.items));

    }
  })
  console.log("ACTUAL edges = ", mst.getAllEdges().map(({startVertex, endVertex}) => { return { startVertex, endVertex }}))

  return mst;
}