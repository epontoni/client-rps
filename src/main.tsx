import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
import MainMenu from "./components/MainMenu/index.tsx";
import Lobby from "./components/Lobby/index.tsx";
import Login from "./components/Login/index.tsx";
import Instructions from "./components/Instructions/index.tsx";
import Game from "./components/Game/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      /*{ path: "room/:id", element: <Room /> },*/
      { path: "main-menu", element: <MainMenu /> },
      { path: "lobby", element: <Lobby /> },
      { path: "game", element: <Game /> },
      { path: "how-to-play", element: <Instructions /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>{/* Something */}</RouterProvider>
    </Provider>
  </React.StrictMode>
);
