import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    room: {},
    nickname: '',
    socket: null,
    onlineStatus: false,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers:{
        createRoom: (state, action) => {
            console.log('Creating game...', action.payload)
            state.room = action.payload
        },
        setRoom: (state, action) => {
            state.room = action.payload
        },
        setSocket: (state, action) => {
            console.log('Seteando el socket', action.payload)
            state.socket = action.payload
        },
        joinRoom: (state, action) => {
            state.room = action.payload
        },
        saveNickname: (state, action) => {
            state.nickname = action.payload
        },
        setOnlineStatus: (state, action) => {
            state.onlineStatus = action.payload
        },
        setPlayer: (state, action) => {
            state.player = action.payload
        
        }
    }
});

export const { setSocket, createRoom, joinRoom, saveNickname, setOnlineStatus, setRoom, setPlayer } = gameSlice.actions
export default gameSlice;