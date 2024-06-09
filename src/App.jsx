import './App.css'
import Signup from './signup'
import Start from './start'
import Login from './login'
import Q1 from './Q1'
import Answer3 from './answer3'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Answer1 from './answer1'             
import Answer4 from './answer4'
import Answer2 from './answer2'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/start" element={<Start />}/>
        <Route path="/Q1" element={<Q1 />}/>
        <Route path="/answer1" element={<Answer1/>}/>
        <Route path="/answer3" element={<Answer3 />}/>
        <Route path="/answer4" element={<Answer4 />}/>
        <Route path="/answer2" element={<Answer2/>}/>
    </Routes>
    </BrowserRouter>
    </>
  
  )
}

export default App
