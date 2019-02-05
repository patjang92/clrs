import topologicalSort from './topologicalSort';


export default function dagShortestPaths(graph, source) {
  if (!graph.isDirected) throw new Error("Graph must be directed");

  const distances = {};
  const parents = {};

  graph.getAllVertices().forEach(vertex => {
    const key = vertex.getKey();
    if (vertex != source) {
      distances[key] = Infinity;
    } else {
      distances[key] = 0;
    }
    parents[key] = null;
  })

  const sortedVertices = topologicalSort(graph);

  sortedVertices.forEach(startVertex => {
    startVertex.getEdges().forEach(({ startVertex, endVertex, weight }) => {
      const startKey = startVertex.getKey();
      const endKey = endVertex.getKey();
      if (distances[endKey] > distances[startKey] + weight) {
        distances[endKey] = distances[startKey] + weight;
        parents[endKey] = startVertex;
      }
    })
  })

  return { distances, parents };
}