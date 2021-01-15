import React from 'react'
import ReactFlow, { Background } from 'react-flow-renderer'

const elements = [
  {
    id: '1',
    type: 'default',
    sourcePosition: 'right',
    targetPosition: 'right',
    data: { label: 'Data Source & Mapping' },
    position: { x: 20, y: 150 },
    style: {
      background: 'black',
      color: 'white',
      border: '1px solid #0896c2',
    },
  },

  {
    id: '2',
    type: 'default',
    targetPosition: 'left',
    sourcePosition: 'right',
    data: { label: 'Interpolation Algorithms & Data Metrics' },
    position: { x: 240, y: 82 },
    style: {
      background: 'black',
      border: '1px solid #0896c2',
      color: 'white',
    },
  },
  {
    id: '3',
    type: 'default',
    targetPosition: 'left',
    sourcePosition: 'right',
    data: { label: 'Geospatial Assignments' },
    position: { x: 450, y: 150 },
    style: {
      background: 'black',
      border: '1px solid #0896c2',
      color: 'white',
    },
  },
  {
    id: '4',
    type: 'default',
    targetPosition: 'left',
    sourcePosition: 'right',
    data: { label: 'Data Visualization & Stratum Analysis' },
    position: { x: 660, y: 82 },
    style: {
      background: 'black',
      border: '1px solid #0896c2',
      color: 'white',
    },
  },
  {
    id: '5',
    type: 'default',
    targetPosition: 'left',
    sourcePosition: 'right',
    data: { label: 'Calculation Engine' },
    position: { x: 870, y: 150 },
    style: {
      background: 'black',
      border: '1px solid #0896c2',
      color: 'white',
    },
  },
  {
    id: '6',
    type: 'default',
    sourcePosition: 'left',
    targetPosition: 'left',
    data: { label: 'Acquisition Summary' },
    position: { x: 1100, y: 89 },
    style: {
      background: 'black',
      border: '1px solid #0896c2',
      color: 'white',
    },
  },
  // animated edge
  {
    id: 'e1-1',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#0896c2' },
  },
  {
    id: 'e2-2',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: '#0896c2' },
  },
  {
    id: 'e2-3',
    source: '3',
    target: '4',
    animated: true,
    style: { stroke: '#0896c2' },
  },
  {
    id: 'e2-4',
    source: '4',
    target: '5',
    animated: true,
    style: { stroke: '#0896c2' },
  },
  {
    id: 'e2-5',
    source: '5',
    target: '6',
    animated: true,
    style: { stroke: '#0896c2' },
  },
]

const App = () => (
  <div class='container'>
    <ReactFlow elements={elements} snapToGrid={true}>
      <Background color='#aaa' gap={16} />
    </ReactFlow>
  </div>
)

export default App
