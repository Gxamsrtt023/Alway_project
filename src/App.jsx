import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './signup'
import Start from './start'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup />
      <Start />
    </>
  )
}

export default App
