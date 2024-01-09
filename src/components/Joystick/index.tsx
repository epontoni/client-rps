import { useSelector } from "react-redux"


export default function Joystick() {
    const state = useSelector((state) => state.game)

    const play = (move: string) => () => {
        console.log(`Play ${move}`)
        state?.socket?.emit('play', {
            roomId: state?.room?.roomId,
            move,
            socketId: state?.socket?.id
        })
    }
  return (
    <div>
        <button onClick={play('rock')} className="btn btn-light btn-lg m-2">🪨</button>
        <button onClick={play('paper')} className="btn btn-light btn-lg m-2">📄</button>
        <button onClick={play('scissors')} className="btn btn-light btn-lg m-2">✂️</button>
    </div>
  )
}
