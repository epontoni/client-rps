import { useDispatch, useSelector } from "react-redux";
import Score from "../Score";
import Joystick from "../Joystick";
import { useEffect, useState } from "react";
import { setRoom } from "../../reducers/gameSlice";

export default function Game() {
  const state = useSelector((state) => state.game);
  const [round, setRound] = useState();
  const dispatch = useDispatch();
  const isOwner = state?.room?.owner?.socketId === state?.socket?.id;

  useEffect(() => {
    state?.socket?.on("roundPlayed", (data) => {
      console.log("roundPlayed", data);
      dispatch(setRoom(data));
    });
  }, []);

  useEffect(() => {
    if(state?.room?.rounds?.length >= 1) {
      setRound(state?.room?.rounds[state?.room?.rounds?.length - 1])
    }
    console.log('round', round)
  }, [state?.room?.rounds]);

  return (
    <>
      <h2 className="text-center">Round: {state?.room?.rounds?.length}</h2>
      <div className="d-flex justify-content-between">
        <div className="alert alert-secondary text-center">
          <h2 className="text-center">{state?.room?.owner?.nickname}</h2>
          <Score score={state?.room?.players[0]?.score} />
          <Joystick disabled={!isOwner} choice={round && round?.p1.play} />
        </div>
        <div className="alert alert-secondary text-center">
          <h2>{state?.room?.players[1]?.nickname}</h2>
          <Score score={state?.room?.players[1]?.score} />
          <Joystick disabled={isOwner} choice={round && round?.p2.play} />
        </div>
      </div>
    </>
  );
}
