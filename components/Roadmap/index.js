import React, { useState, useEffect } from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useStoreState,
} from 'react-flow-renderer';
import Line from './line';

const NodesDebugger = ({}) => {
  const nodes = useStoreState((state) => state.nodes);
  console.log(nodes);
  return null;
};

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
};
const OverviewFlow = ({ contributing, initialElements, setElements }) => {
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <ReactFlow
      elements={initialElements}
      onElementClick={(e, els) => console.log(e, els)}
      connectionLineComponent={Line}
      onConnect={onConnect}
      onLoad={onLoad}
    >
      <NodesDebugger />
      {contributing && (
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#ff0072';
            if (n.type === 'default') return '#1a192b';
            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;
            return '#fff';
          }}
          nodeBorderRadius={2}
        />
      )}
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};
export default OverviewFlow;
