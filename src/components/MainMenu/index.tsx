import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setRoom } from "../../reducers/gameSlice";
import JoinRoom from "../JoinRoom";

export default function MainMenu() {
  const state = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.game.nickname);
  const navigate = useNavigate()

  useEffect(() => {
    console.log('[MainMenu]', localStorage.getItem('nickname'))
    if(!localStorage.getItem('nickname') || userLogin === '') {
      navigate('/')
    }
  }, [])

  const handleCreateRoom = () => {
    console.log('Creando sala...')
    state.socket.emit('createRoom', {socketId: state.socket.id, nickname: userLogin})

    state.socket.on('roomCreated', (data) => {
      console.log('Sala creada', data)
      dispatch(setRoom(data))
      navigate('/lobby')
    })
  }

  return (
    <div>
      <h3>Welcome { userLogin }!</h3>
      <div>{ state.onlineStatus ? `🟢 Connected (${state.socket.id})` : `🔴 Disconnected` }</div>
      <div className="d-flex my-4">
        <button onClick={handleCreateRoom} className="btn btn-primary m-auto">Create room</button>
      </div>
      <JoinRoom />
    </div>
  )
}
