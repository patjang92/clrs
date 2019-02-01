import Graph from './Graph';
import depthFirstSearch from './depthFirstSearch';
import LinkedList from '../LinkedList/LinkedList';
import Queue from '../Queue/Queue';
import Stack from '../Stack/Stack';

/**
 * 
 * @param {Graph} graph 
 */
export default function topologicalSort(graph) {
  const sortedNodes = new Stack();

  const vertexQueue = new Queue();
  const notSeen = {};
  const seen = {};

  graph.getAllVertices().forEach((vertex) => { 
    notSeen[vertex.getKey()] = true;
    vertexQueue.enqueue(vertex); 
  });

  const callbacks = {
    enterVertex: ({ currentVertex }) => { 
      delete notSeen[currentVertex.getKey()];
      seen[currentVertex.getKey()] = true;
    },
    allowTraversal: ({ nextVertex }) => {
      return notSeen.hasOwnProperty(nextVertex.getKey());
    },
    leaveVertex: ({ currentVertex }) => { sortedNodes.push(currentVertex) }
  }

  while (!vertexQueue.isEmpty()) {
    let v = vertexQueue.dequeue();
    if (notSeen.hasOwnProperty(v.getKey())) {
      depthFirstSearch(graph, v, callbacks);
    }
  }

  return sortedNodes.toArray();

}