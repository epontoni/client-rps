import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setRoom } from "../../reducers/gameSlice"

export default function JoinRoom() {
    const [pin, setPin] = useState('')
    const state = useSelector((state) => state.game)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(state.nickname === '')
        {
            navigate('/')
        }
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPin(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Unirse a sala...')
        if(pin.length != 6) return
        state.socket.emit('joinRoom', {roomId: pin, socketId: state.socket.id, nickname: state.nickname})
        //navigate('/room/:pin')
        state.socket.on('roomJoined', (data) => {
            console.log('Sala unida', data)
            dispatch(setRoom(data))
            navigate('/lobby')
        })

    }
  return (
    <form onSubmit={handleSubmit} className="alert alert-primary">
        <div className="mb-3">
            <label htmlFor="pin" className="form-label">PIN Room</label>
            <input type="text" id="pin" onChange={handleChange} value={pin} className="form-control" />
        </div>
        
        <button type="submit" className="btn btn-primary">Join</button>
    </form>
  )
}