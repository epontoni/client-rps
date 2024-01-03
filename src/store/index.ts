import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import gameSlice from "../reducers/gameSlice";

const store = configureStore({
    reducer: {
        game: gameSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => [thunk],
})

export default store;