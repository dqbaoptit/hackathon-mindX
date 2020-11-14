import React from 'react';
export default [
  {
    id: '1',
    type: 'input',
    data: {
      label: <>Welcome to React Flow!</>,
    },
    position: { x: 250, y: 0 },
    style: {
      background: '#3d1057',
      color: '#fff',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
  },
  {
    id: '2',
    data: {
      label: <>This is a default node</>,
    },
    position: { x: 100, y: 100 },
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
  },
  {
    id: '3',
    data: {
      label: <>This one has a custom style</>,
    },
    position: { x: 400, y: 100 },
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
  },
  {
    id: '4',
    position: { x: 250, y: 200 },
    data: {
      label: 'Another default node',
    },
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
  },
  {
    id: '5',
    data: {
      label: 'Node id: 5',
    },
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
    position: { x: 250, y: 325 },
  },
  {
    id: '6',
    type: 'output',
    data: {
      label: <>An output node</>,
    },
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
    position: { x: 100, y: 480 },
  },
  {
    id: '7',
    type: 'output',
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
    data: { label: 'Another output node' },
    position: { x: 400, y: 450 },
  },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    animated: true,
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    animated: true,
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    style: { stroke: '#f6ab6c' },
    animated: true,
    labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  },
];
