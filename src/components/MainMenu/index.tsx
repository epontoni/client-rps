import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export default function MainMenu() {
  const state = useSelector((state) => state.game);
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
    state.socket.emit('createRoom', {owner: userLogin})
  }

  return (
    <div>
      <h2>Game main menu</h2>
      <h3>Welcome { userLogin }!</h3>
      <div>{ state.onlineStatus ? `🟢 Connected (${state.socket.id})` : `🔴 Disconnected` }</div>
      <div className="d-flex my-4">
        <button onClick={handleCreateRoom} className="btn btn-primary m-auto">Create room</button>
      </div>
      <ul>
        <li>[Unirse a sala]</li>
      </ul>
    </div>
  )
}
