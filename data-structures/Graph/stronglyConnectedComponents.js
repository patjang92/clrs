import depthFirstSearch from './depthFirstSearch';
import Queue from '../Queue/Queue';
import Stack from '../Stack/Stack';

export default function stronglyConnectedComponents(graph) {

  let verticesByDecreasingFinishTime = getVerticesByDecreasingFinishTime(graph);
  // compute Gt
  graph.reverse();

  return getStronglyConnectedComponents(graph, verticesByDecreasingFinishTime);
}

function getVerticesByDecreasingFinishTime(graph) {
  // call DFS(G) to compute finishing times u.f for each vertex u

  let time = 0;
  // const startTimes = {};  
  const finishTimes = {};
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
      time++;
      finishTimes[currentVertex.getKey()] = time;
      stack.push(currentVertex);
    }
  };

  graph.getAllVertices().forEach(vertex => {
    if (!seen.hasOwnProperty(vertex)) {
      depthFirstSearch(graph, vertex, callbacks);
    }
  })

  // console.log("finishTimes = ", finishTimes);

  return stack;

}

function getStronglyConnectedComponents(graph, stack) {
  // call DFS(Gt) but in the main loop of DFS< consider the vertices in order of decreasing u.f (as computed in line 1)
  // output the vertices of each tree in the depth-first forest formed in line 3 as a separate strongly connected component
  let time = 0;
  // const startTimes = {};  
  const finishTimes = {};
  const seen = {};

  let sccSets = [];
  let sccSet = [];


  const enterVertexFactory = ((sccSet) => {
    // let sccSet = [];
    console.log("creating new enterVertex function");
    return ({ currentVertex }) => {
      console.log(`entering vertex ${currentVertex.getKey()}`)
      seen[currentVertex.getKey()] = true;
      sccSet.push(currentVertex);
      console.log('pushed to sccSet, now looks like: ', sccSet.map(v => v.getKey()))
      // console.log('sccSet :', sccSet);
    }
  });

  const callbacks = {
    allowTraversal: ({ nextVertex }) => {
      console.log('considering traveling to nextVertex: ', nextVertex.getKey());
      console.log('seen this vertex? ', seen.hasOwnProperty(nextVertex.getKey()));
      return !seen.hasOwnProperty(nextVertex.getKey());
    },
    enterVertex: ({ currentVertex }) => {
      seen[currentVertex.getKey()] = true;
      sccSet.push(currentVertex);
      console.log('sccSet :', sccSet);
    },
    leaveVertex: ({ currentVertex }) => {
    }
  };

  while(!stack.isEmpty()) {
    let vertex = stack.pop();
    console.log("stack.pop = ", vertex.getKey());
    if (!seen.hasOwnProperty(vertex.getKey())) {
      console.log(`${vertex.getKey()} has not been seen yet, doing dfs`);

      // callbacks.enterVertex = enterVertexFactory(sccSet);
      sccSet = [];
      depthFirstSearch(graph, vertex, callbacks);

      console.log("dfs finished, sccSet = ", sccSet.map(v => v.getKey()))
      sccSets.push(sccSet);
    }      
  }

  console.log('sccSets :', sccSets.map((set) => set.map(v => v.getKey())));
  return sccSets;
}
 



