import Graph from './Graph';
import GraphVertex from './GraphVertex';
import Queue from '../Queue/Queue';

function initCallbacks(callbacks = {}) {
  let visited = {};
  const enterVertex = ((visited) => ({ currentVertex }) => {
    visited[currentVertex.getKey()] = true;
  })(visited)

  const allowTraversal = ((visited) => ({ nextVertex }) => {
    return !visited.hasOwnProperty(nextVertex);
  })(visited)

  const leaveVertex = () => {};

  const bfsCallbacks = {};
  bfsCallbacks.enterVertex = callbacks.enterVertex || enterVertex;
  bfsCallbacks.allowTraversal = callbacks.allowTraversal || allowTraversal;
  bfsCallbacks.leaveVertex = callbacks.leaveVertex || leaveVertex;

  return bfsCallbacks;
}

export default function breadthFirstSearch(graph, startVertex, callbacks) {
  let bfsCallbacks = initCallbacks(callbacks);

  let queue = new Queue();
  let previousVertex = null;

  queue.enqueue(startVertex);
  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    console.log("start of new loop");
    console.log('currentVertex.value :', currentVertex.value);
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

