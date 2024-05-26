import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Q2 from './Q2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Q2 />
    </>
  )
}

export default App
