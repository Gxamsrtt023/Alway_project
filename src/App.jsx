import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Q1 from './Q1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Q1 />
    </>
  )
}

export default App
