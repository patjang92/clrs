import depthFirstSearch from './depthFirstSearch';
import Stack from '../Stack/Stack';

export default function stronglyConnectedComponents(graph) {
  let verticesByDecreasingFinishTime = getVerticesByDecreasingFinishTime(graph);
  graph.reverse();

  return getStronglyConnectedComponents(graph, verticesByDecreasingFinishTime);
}

function getVerticesByDecreasingFinishTime(graph) {
  const seen = {};
  const stack = new Stack();

  const callbacks = {
    allowTraversal: ({ nextVertex }) => {
      return !seen.hasOwnProperty(nextVertex.getKey());
    },
    enterVertex: ({ currentVertex }) => {
      seen[currentVertex.getKey()] = true;
    },
    leaveVertex: ({ currentVertex }) => {
      stack.push(currentVertex);
    }
  };

  graph.getAllVertices().forEach(vertex => {
    if (!seen.hasOwnProperty(vertex)) {
      depthFirstSearch(graph, vertex, callbacks);
    }
  })

  return stack;
}

function getStronglyConnectedComponents(graph, vertexStack) {
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

  while(!vertexStack.isEmpty()) {
    let vertex = vertexStack.pop();
    if (!seen.hasOwnProperty(vertex.getKey())) {
      sccSet = [];
      depthFirstSearch(graph, vertex, callbacks);
      sccSets.push(sccSet);
    }      
  }

  return sccSets;
}
 



