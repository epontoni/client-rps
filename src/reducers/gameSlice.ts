import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    room: {},
    nickname: '',
    socket: null,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers:{
        createRoom: (state, action) => {
            console.log('Creating game...', action.payload)
           state.room = action.payload
        },
        setSocket: (state, action) => {
            console.log('Seteando el socket', action.payload)
            state.socket = action.payload
        },
        joinRoom: (state, action) => {
            state.room = action.payload
        },
        setNickname: (state, action) => {
            state.nickname = action.payload
        },
    }
});

export const { setSocket, createRoom, joinRoom, setNickname } = gameSlice.actions
export default gameSlice;