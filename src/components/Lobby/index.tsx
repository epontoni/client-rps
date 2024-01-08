import { useDispatch, useSelector } from 'react-redux'
import './Lobby.css'
import { useEffect } from 'react'
import ClipBoard from '../ClipBoard'
import { useNavigate } from 'react-router-dom'
import { setRoom } from '../../reducers/gameSlice'

export default function Lobby() {
    const state = useSelector((state) => state.game)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isOwner = state?.room?.owner?.socketId === state?.socket?.id

    useEffect(() => {
      if (state.nickname === "") {
        navigate("/");
      }

      state.socket.on("roomJoined", (data) => {
        console.log("Sala unida", data);
        dispatch(setRoom(data));
        navigate("/lobby");
      });

      state.socket.on("gameStarted", () => {
        navigate("/game");
      })
    }, []);

    const handleStartGame = () => {
      //alert('Not implemented yet')
      state.socket.emit('startGame', state.room.roomId)
      navigate('/game')
    }
  return (
    <div className='text-center d-flex flex-column gap-4'>
        <h2>Lobby</h2>
        <h2>Room created by <span className='text-primary'>{ state?.room?.owner?.nickname }</span></h2>
        <div>
          { isOwner ? // si no soy el owner, no mostrar el código de la sala
          (
            <div>
            <h3>Share the code to join the room</h3>
            <ClipBoard value={state?.room?.roomId} />
            </div>
          ) : ''
          }
        </div>
        <div>
          { state.room?.players?.length > 1
            ? (<>
              <div className='alert alert-danger'>
                <h4 className='mb-3'>Arena</h4>
                <h5><span className='text-primary'>{state?.room?.players[0]?.nickname}</span> VS <span className='text-primary'>{state?.room?.players[1]?.nickname}</span></h5>
              </div>
              <div className='d-flex align-items-center justify-content-center gap-3'>
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Waiting for {state?.room?.players[0]?.nickname} to start the game</span>
                </div>
                <span className='align-self-center'>Waiting for {state?.room?.players[0]?.nickname} to start the game</span>
              </div>
              </>)
            : (
              <div className='d-flex align-items-center justify-content-center gap-3'>
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Waiting for your opponent...</span>
                </div>
                <span className='align-self-center'>Waiting for your opponent...</span>
              </div>
            ) 
          }
        </div>
        <div>
          { 
            isOwner
            ? (<button className='btn btn-success' onClick={handleStartGame} disabled={ state.room?.players?.length === 2 ? false : true}>Start the game!</button>) 
            : '' 
          }
          
        </div>
    </div>
  )
}
