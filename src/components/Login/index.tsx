import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { saveNickname, setOnlineStatus, setSocket } from "../../reducers/gameSlice"
import { io } from "socket.io-client"

export default function Login() {
    const [nickname, setNickname] = useState('')
    const state = useSelector((state) => state.game)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // dispatch({ type: 'LOGIN', payload: nickname })
        // Guardar en localStorage el nickname y en el estado global
        localStorage.setItem('nickname', nickname)
        dispatch(saveNickname(nickname))
        
        // Establecer la conexión con el servidor ¿Exise ya el nickname?
        const socket = io('http://localhost:3000', { transports: ['websocket'] })
        socket.on('connect', () => {
            console.log('Conectado al servidor')
            dispatch(setSocket(socket))
            dispatch(setOnlineStatus(true))
        })
        socket.on('disconnect', () => {
            console.log('Desconectado del servidor')
            dispatch(setSocket(socket))
            dispatch(setOnlineStatus(false))
        })
        console.log(`${nickname} se está registrando en el servidor...`)
        navigate('/main-menu')

    }
  return (
    <form onSubmit={handleSubmit} className="alert alert-primary">
        <div className="mb-3">
            <label htmlFor="nickname" className="form-label">Nickname</label>
            <input type="text" id="nickname" onChange={handleChange} value={nickname} className="form-control" />
        </div>
        
        <button type="submit" className="btn btn-primary">Siguiente</button>
    </form>
  )
}