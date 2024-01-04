import { useDispatch, useSelector } from 'react-redux'
import './Lobby.css'
import { useEffect } from 'react'
import ClipBoard from '../ClipBoard'
import { useNavigate } from 'react-router-dom'

export default function Lobby() {
    const state = useSelector((state) => state.game)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      if(state.nickname === '')
      {
          navigate('/')
      }
  }, [])
  return (
    <div className='text-center'>
        <h2>Lobby</h2>
        <h3>Share the code to join the room</h3>
        <ClipBoard value={state.room?.roomId} />
        <h3>Owner: { state.room?.owner }</h3>
        <h3>Players: { state.room?.players?.length }</h3>
    </div>
  )
}
