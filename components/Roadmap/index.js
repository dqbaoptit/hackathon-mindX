import React, { useState } from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  Background,
} from 'react-flow-renderer';
import initialElements from './initial-elements';

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
};
const OverviewFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  console.log(elements);

  return (
    <>
      {/* <div onClick={()=>{setElements(...elements,{
      
    })}}>Add Node</div> */}
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onElementClick={(e) =>
          console.log(e.target.childNodes[0].getAttribute('data-nodeid'))
        }
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid={true}
        snapGrid={[15, 15]}
      >
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </>
  );
};
export default OverviewFlow;
