import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      /*{ index: true, element: <MainMenu /> },
      { path: "room/:id", element: <Room /> },*/
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
