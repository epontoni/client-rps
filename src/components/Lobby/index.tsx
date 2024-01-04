import { useDispatch, useSelector } from 'react-redux'
import './Lobby.css'
import { useEffect } from 'react'

export default function Lobby() {
    const state = useSelector((state) => state.game)
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])
  return (
    <div>
        <h2>Lobby</h2>
        <h3>Room: { state.room.roomId }</h3>
        <h3>Owner: { state.room.owner }</h3>
        <h3>Players: { state.room.players.length }</h3>
    </div>
  )
}
