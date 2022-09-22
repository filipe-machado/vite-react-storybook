import { useState } from 'react'
// import Button from './components/atoms/Button'
import { Primary } from './components/molecules/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Primary  />
    </div>
  )
}

export default App
