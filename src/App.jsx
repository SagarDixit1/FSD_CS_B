import { Route, Routes } from 'react-router-dom'
import Home from'./Components/Home'
import Counter from'./Components/Counter'
import Stopwatch from'./Components/Stopwatch'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/counter" element={<Counter/>}></Route> 
      <Route path="/stopwatch" element={<Stopwatch/>}></Route> 
      <Route path="*" element={<h1>No Page Availabe</h1>}></Route> 
    </Routes>
    </>
  )
}

export default App
