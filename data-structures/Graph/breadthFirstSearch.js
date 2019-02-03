import Queue from '../Queue/Queue';

function initCallbacks(callbacks = {}) {
  
  const allowTraversal = (() => {
    let visited = {};
    return ({ nextVertex }) => {

    if (!visited.hasOwnProperty(nextVertex.getKey())) {
      let nKey = nextVertex.getKey();
      visited[nKey] = true;
      return true;
    }
    return false;
    }
  })()

  const enterVertex = () => {};

  const leaveVertex = () => {};

  const bfsCallbacks = {};
  bfsCallbacks.enterVertex = callbacks.enterVertex || enterVertex;
  bfsCallbacks.allowTraversal = callbacks.allowTraversal || allowTraversal;
  bfsCallbacks.leaveVertex = callbacks.leaveVertex || leaveVertex;

  return bfsCallbacks;
}

// O(E + V)
export default function breadthFirstSearch(graph, startVertex, callbacks) {
  let bfsCallbacks = initCallbacks(callbacks);
  let queue = new Queue();
  let previousVertex = null;

  queue.enqueue(startVertex);
  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    bfsCallbacks.enterVertex({ currentVertex, previousVertex });

    currentVertex.getOutboundNeighbors().forEach(nextVertex => {
      if (bfsCallbacks.allowTraversal({ currentVertex, nextVertex })) {
        queue.enqueue(nextVertex);
      }
    })

    bfsCallbacks.leaveVertex({ currentVertex });
    previousVertex = currentVertex;
  }
}
