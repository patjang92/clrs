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
  const seen = {};
  
  const callbacks = {
    enterVertex: ({ currentVertex }) => { 
      seen[currentVertex.getKey()] = true;
    },
    allowTraversal: ({ nextVertex }) => {
      return !seen.hasOwnProperty(nextVertex.getKey());
    },
    leaveVertex: ({ currentVertex }) => { sortedNodes.push(currentVertex) }
  }

  graph.getAllVertices().forEach(v => {
    if (!seen.hasOwnProperty(v.getKey())) {
      depthFirstSearch(graph, v, callbacks);
    }
  })

  return sortedNodes.toArray();

}