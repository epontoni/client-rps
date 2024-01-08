import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setRoom } from "../../reducers/gameSlice";
import JoinRoom from "../JoinRoom";
import Instructions from "../Instructions";

export default function MainMenu() {
  const state = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.game.nickname);
  const navigate = useNavigate()

  useEffect(() => {
    console.log('[MainMenu]', localStorage.getItem('nickname'))
    if (!localStorage.getItem('nickname') || userLogin === '') {
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
    <div className="main-menu-container">
      <div className="menu">
        <h2>Game main menu</h2>
        <h3>Welcome {userLogin}!</h3>
        <div>{state.onlineStatus ? `🟢 Connected (${state.socket.id})` : `🔴 Disconnected `}</div>
        <div className="d-flex my-4">
          <button onClick={handleCreateRoom} className="btn btn-primary m-auto">Create Room</button>
        </div>
        <ul>
          <li>[Unirse a Sala]</li>
        </ul>
      </div>
      <Instructions />
    </div>
  </div>
  );
}
