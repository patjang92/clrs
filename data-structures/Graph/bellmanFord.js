/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @return {{distances, previousVertices}}
 */
export default function bellmanFord(graph, startVertex) {
  const distances = {};
  const previousVertices = {};

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  distances[startVertex.getKey()] = 0;
  graph.getAllVertices().forEach((vertex) => {
    previousVertices[vertex.getKey()] = null;
    if (vertex.getKey() !== startVertex.getKey()) {
      distances[vertex.getKey()] = Infinity;
    }
  });

  // We need (|V| - 1) iterations.
  for (let iteration = 0; iteration < (graph.getAllVertices().length - 1); iteration += 1) {
    // During each iteration go through all edges.
    graph.getAllEdges().forEach(({ startVertex, endVertex, weight }) => {
      let startKey = startVertex.getKey();
      let endKey = endVertex.getKey();

      // Find out if the distance to the neighbor is shorter in this iteration
      // then in previous one.
      if (distances[endKey] > distances[startKey] + weight) {
        distances[endKey] = distances[startKey] + weight;
        previousVertices[endKey] = startVertex;
      }
    })
  }

  let negativeWeightCycleExists = false;
  graph.getAllEdges().forEach(({ startVertex, endVertex, weight }) => {
    if (distances[startVertex.getKey()] > distances[endVertex.getKey()] + weight) {
      negativeWeightCycleExists = true;
    }
  })

  return {
    distances,
    previousVertices,
    negativeWeightCycleExists
  };
}