import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          </Route>
          <Route path='/logout' element={<Logout/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='*' element={<h1 className='error'>404 No page Found</h1>} />
        </Routes>
    </div>
  )
}

export default App
