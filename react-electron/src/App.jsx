import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React</h1>
      <div className="card">
        <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App