import React from "react";
import ReactDOM from "react-dom/client";
import "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup.jsx";
import Verification from './Pages/Verification/Verification.jsx'
import Chat from "./Pages/Chat/Chat";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/verification/:phoneNumber',
    element: <Verification />,
  },
  {
    path: "/chat",
    element: <Chat />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
  />
);

