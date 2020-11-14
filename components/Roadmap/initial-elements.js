import React from 'react';
export default [
  {
    id: '5fafabac610bee0017eba0da',
    type: 'input',
    data: {
      label: <>Frontend</>,
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
    id: '5fafabd1610bee0017eba0de',
    data: {
      label: <>Internet</>,
    },
    position: { x: 247, y: 102 },
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
  },
  {
    id: '5fafac07610bee0017eba0e4',
    data: {
      label: <>HTML</>,
    },
    position: { x: 493, y: 205 },
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
  },
  {
    id: '5fafabe0610bee0017eba0e0',
    position: { x: 48, y: 193 },
    data: {
      label: <>JS</>,
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
    id: '5fafabf4610bee0017eba0e2',
    data: {
      label: <>CSS</>,
    },
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
    position: { x: 265, y: 195 },
  },
  {
    id: '5fafac39610bee0017eba0e8',
    type: 'output',
    data: {
      label: <>Learn the basic</>,
    },
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
    position: { x: 148, y: 384 },
  },
  {
    id: '5fafac56610bee0017eba0ea',
    type: 'output',
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
    data: { label: <>Making layout</> },
    position: { x: 381, y: 389 },
  },
  {
    id: '5fafac22610bee0017eba0e6',
    type: 'output',
    style: {
      background: 'yellow',
      color: '#000',
      border: '1px solid #222138',
      width: 180,
      fontWeight: 'bold',
    },
    data: { label: <>Learn Basic HTML </> },
    position: { x: 507, y: 303 },
  },
  {
    id: 'e1-2',
    source: '5fafabac610bee0017eba0da',
    target: '5fafabd1610bee0017eba0de',
    animated: true,
  },
  {
    id: 'e2-3',
    source: '5fafabd1610bee0017eba0de',
    target: '5fafac07610bee0017eba0e4',
    animated: true,
  },
  {
    id: 'e2-3',
    source: '5fafabd1610bee0017eba0de',
    target: '5fafac07610bee0017eba0e4',
    animated: true,
  },
  {
    id: 'e2-4',
    source: '5fafabd1610bee0017eba0de',
    target: '5fafabe0610bee0017eba0e0',
    animated: true,
  },
  {
    id: 'e2-5',
    source: '5fafabd1610bee0017eba0de',
    target: '5fafabf4610bee0017eba0e2',
    animated: true,
  },
  {
    id: 'e5-6',
    source: '5fafabf4610bee0017eba0e2',
    target: '5fafac39610bee0017eba0e8',
    animated: true,
  },
  {
    id: 'e5-7',
    source: '5fafabf4610bee0017eba0e2',
    target: '5fafac56610bee0017eba0ea',
    style: { stroke: '#f6ab6c' },
    animated: true,
    labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  },
  {
    id: 'e3-8',
    source: '5fafac07610bee0017eba0e4',
    target: '5fafac22610bee0017eba0e6',
    style: { stroke: '#f6ab6c' },
    animated: true,
    labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  },
];
