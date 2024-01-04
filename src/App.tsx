import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';

function App() {
  const userLogin = useSelector((state) => state.game.nickname);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false)

  return (
    <>
      <Header />
      {
        userLogin === '' ? (
          <Login />
        ) : ''
      }
      <Outlet />
    </>
  )
}

export default App
