import { useDispatch, useSelector } from 'react-redux'
import './Lobby.css'
import { useEffect } from 'react'
import ClipBoard from '../ClipBoard'
import { useNavigate } from 'react-router-dom'
import { setRoom } from '../../reducers/gameSlice'

export default function Lobby() {
    const state = useSelector((state) => state.game)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      if (state.nickname === "") {
        navigate("/");
      }

      state.socket.on("roomJoined", (data) => {
        console.log("Sala unida", data);
        dispatch(setRoom(data));
        navigate("/lobby");
      });
    }, []);

    const handleStartGame = () => {
      alert('Not implemented yet')
    }
  return (
    <div className='text-center d-flex flex-column gap-4'>
        <h2>Lobby</h2>
        <h2>Room created by <span className='text-primary'>{ state.room?.owner?.nickname }</span></h2>
        <h3>Share the code to join the room</h3>
        <ClipBoard value={state.room?.roomId} />
        <div className='d-flex align-items-center justify-content-center gap-3'>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Waiting for players...</span>
          </div>
          <span className='align-self-center'>Waiting for players...</span>
        </div>
        <div>{ state.room?.players?.length > 1 ? (state.room.players[1].nickname) : '...' }</div>
        <div>
          <button className='btn btn-success' onClick={handleStartGame} disabled={state.room?.players?.length === 2 ? false : true}>Start the game!</button>
        </div>
    </div>
  )
}
