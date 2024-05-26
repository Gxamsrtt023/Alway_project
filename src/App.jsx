import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Q3 from './Q3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Q3 />
    </>
  )
}

export default App
