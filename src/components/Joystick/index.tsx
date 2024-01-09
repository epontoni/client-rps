import { useSelector } from "react-redux"
import './Joystick.css'


export default function Joystick({ disabled, choice }) {
    const state = useSelector((state) => state.game)
    const className = disabled ? 'btn btn-light btn-lg m-2 notAllowed' : 'btn btn-light btn-lg m-2'

    const move = {
        rock: '🪨',
        paper: '📄',
        scissors: '✂️'
    }

    const play = (move: string) => () => {
        console.log(`Play ${move}`)
        state?.socket?.emit('play', {
            roomId: state?.room?.roomId,
            move,
            socketId: state?.socket?.id,
            isOwner: state?.room?.owner?.socketId === state?.socket?.id
        })
    }
  return (
    <div>
        <button onClick={play('rock')} disabled={disabled} className={className}>🪨</button>
        <button onClick={play('paper')} disabled={disabled} className={className}>📄</button>
        <button onClick={play('scissors')} disabled={disabled} className={className}>✂️</button>
        <div className="choice">{move[choice]}</div>
    </div>
  )
}
