import { useDispatch, useSelector } from "react-redux"
import Score from "../Score"
import Joystick from "../Joystick"
import { useEffect } from "react"
import { setRoom } from "../../reducers/gameSlice"

export default function Game() {
  const state = useSelector((state) => state.game)
  const dispatch = useDispatch()

  useEffect(() => {
    state?.socket?.on('roundPlayed', (data) => {
      console.log('roundPlayed', data)
      dispatch(setRoom(data))
    })
  }, [])

  return (<>
    <h2 className="text-center">Round: {state?.room?.rounds?.length}</h2>
    <div className="d-flex justify-content-between">
      <div className="alert alert-secondary text-center">
        <h2 className="text-center">{state?.room?.owner?.nickname}</h2>
        <Score score={state?.room?.players[0]?.score} />
        <Joystick />
      </div>
      <div className="alert alert-secondary text-center">
        <h2>{state?.room?.players[1]?.nickname}</h2>
        <Score score={state?.room?.players[1]?.score} />
        <Joystick />
      </div>
    </div>
    </>)
}
