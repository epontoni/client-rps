import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
import MainMenu from "./components/MainMenu/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      /*{ index: true, element: <MainMenu /> },
      { path: "room/:id", element: <Room /> },*/
      { path: "main-menu", element: <MainMenu /> },
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
