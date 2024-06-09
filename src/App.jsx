import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Answer2 from './answer2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Answer2 />
    </>
  )
}

export default App
