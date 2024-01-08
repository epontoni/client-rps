import { useSelector } from "react-redux"
import Score from "../Score"
import Joystick from "../Joystick"

export default function Game() {
  const state = useSelector((state) => state.game)
  return (<>
    <h2 className="text-center">Round: 0</h2>
    <div className="d-flex justify-content-between">
      <div className="alert alert-secondary text-center">
        <h2 className="text-center">{state?.room?.owner?.nickname}</h2>
        <Score />
        <Joystick />
      </div>
      <div className="alert alert-secondary text-center">
        <h2>{state?.room?.players[1]?.nickname}</h2>
        <Score />
        <Joystick />
      </div>
    </div>
    </>)
}
