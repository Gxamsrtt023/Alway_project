import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'
import Answer1 from './answer1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Answer1/>
    </>
  )
}

export default App
