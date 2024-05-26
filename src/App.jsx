import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Q4 from './Q4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Q4 />
    </>
  )
}

export default App
