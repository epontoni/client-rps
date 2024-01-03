import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Headers';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const state = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false)

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
