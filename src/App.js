import React from 'react'
import ReactFlow, { Background } from 'react-flow-renderer'

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',

    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
]

const App = () => (
  <div class='container'>
    <ReactFlow elements={elements} snapToGrid={true}>
      <Background color='#aaa' gap={16} />
    </ReactFlow>
  </div>
)

export default App
