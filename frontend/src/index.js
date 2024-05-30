import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup.jsx";
import Verification from "./Pages/Verification/Verification";
import Chat from "./Pages/Chat/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signin />,
      },
      {
        path: '/signup',
        element: <Signup/>,
        },
      {
        path: '/verification',
        element: <Verification/>,
        },
      {
        path: "/chat",
        element: <Chat/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
  />
);

