/**
 * @typedef {Object} Callbacks
 *
 * @property {function(vertices: Object): boolean} [allowTraversal] -
 *  Determines whether DFS should traverse from the vertex to its neighbor
 *  (along the edge). By default prohibits visiting the same vertex again.
 *
 * @property {function(vertices: Object)} [enterVertex] - Called when DFS enters the vertex.
 *
 * @property {function(vertices: Object)} [leaveVertex] - Called when DFS leaves the vertex.
 */

/**
 * @param {Callbacks} [callbacks]
 * @returns {Callbacks}
 */
function initCallbacks(callbacks = {}) {
  const initiatedCallback = callbacks;

  const visited = {};
  
  const allowTraversal = ({ nextVertex }) => {
    if (!visited.hasOwnProperty(nextVertex.getKey())) {
      let nKey = nextVertex.getKey();
      visited[nKey] = true;
      return true;
    }
    return false;
  }
  
  const enterVertex = ({ currentVertex }) => {
    visited[currentVertex.getKey()] = true;
  };

  const leaveVertex = () => {};

  initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversal;
  initiatedCallback.enterVertex = callbacks.enterVertex || enterVertex;
  initiatedCallback.leaveVertex = callbacks.leaveVertex || leaveVertex;

  return initiatedCallback;
}

/**
 * @param {Graph} graph
 * @param {GraphVertex} currentVertex
 * @param {GraphVertex} previousVertex
 * @param {Callbacks} callbacks
 */
function depthFirstSearchRecursive(graph, currentVertex, previousVertex, callbacks) {
  callbacks.enterVertex({ currentVertex, previousVertex });

  currentVertex.getOutboundNeighbors().forEach((nextVertex) => {
    if (callbacks.allowTraversal({ previousVertex, currentVertex, nextVertex })) {
      depthFirstSearchRecursive(graph, nextVertex, currentVertex, callbacks);
    }
  });

  callbacks.leaveVertex({ currentVertex, previousVertex });
}

/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {Callbacks} [callbacks]
 */
export default function depthFirstSearch(graph, startVertex, callbacks) {
  const previousVertex = null;
  depthFirstSearchRecursive(graph, startVertex, previousVertex, initCallbacks(callbacks));
}