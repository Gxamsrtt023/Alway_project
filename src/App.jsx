import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Q5 from './Q5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Q5 />
    </>
  )
}

export default App
