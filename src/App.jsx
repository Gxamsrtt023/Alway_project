import './App.css'
import Signup from './signup'
import Start from './start'
import Login from './login'
import Q1 from './Q1'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Answer4 from './answer4'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/start" element={<Start />}/>
        <Route path="/Q1" element={<Q1 />}/>
        <Route path="/answer4" element={<Answer4 />}/>
        
    </Routes>
    </BrowserRouter>
    </>
  
  )
}

export default App
