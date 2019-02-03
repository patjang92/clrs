import depthFirstSearch from './depthFirstSearch';
import topologicalSort from './topologicalSort';

export default function stronglyConnectedComponents(graph) {
  let verticesByDecreasingFinishTime = topologicalSort(graph);
  graph.reverse();

  return getStronglyConnectedComponents(graph, verticesByDecreasingFinishTime);
}

function getStronglyConnectedComponents(graph, vertices) {
  const seen = {};
  const sccSets = [];
  let sccSet = [];

  const callbacks = {
    allowTraversal: ({ nextVertex }) => {
      return !seen.hasOwnProperty(nextVertex.getKey());
    },
    enterVertex: ({ currentVertex }) => {
      seen[currentVertex.getKey()] = true;
      sccSet.push(currentVertex);
    }
  };

  vertices.forEach(vertex => {
    if (!seen.hasOwnProperty(vertex.getKey())) {
      sccSet = [];
      depthFirstSearch(graph, vertex, callbacks);
      sccSets.push(sccSet);
    }      
  })

  return sccSets;
}
 



