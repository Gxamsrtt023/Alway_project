import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './signup'
import Start from './start'
import Login from './login'
import Q1 from './Q1'
import { Route, Routes,BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/start" element={<Start />}/>
        <Route path="/Q1" element={<Q1 />}/>
        
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
