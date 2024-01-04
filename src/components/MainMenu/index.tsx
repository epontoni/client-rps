import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export default function MainMenu() {
  const socket = useSelector((state) => state.game.socket);
  const userLogin = useSelector((state) => state.game.nickname);
  const navigate = useNavigate()

  useEffect(() => {
    console.log('[MainMenu]', localStorage.getItem('nickname'))
    if(!localStorage.getItem('nickname') || userLogin === '') {
      navigate('/')
    }
  }, [])

  return (
    <div>
      <h2>Menú principal del juego</h2>
      <h3>Bienvenido { userLogin }!</h3>
      <div>{ socket?.connected ? `🟢 Conectado (${socket.id})` : `🔴 Desconectado` }</div>
      <ul>
        <li>[Crear Sala]</li>
        <li>[Unirse a sala]</li>
      </ul>
    </div>
  )
}
