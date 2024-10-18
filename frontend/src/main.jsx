import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import HomePage from './features/home/HomePage'
import LoginForm from './features/login/LoginForm'
import RegistrationForm from "./features/login/RegistrationForm";
import JoinPage from "./features/room/JoinPage"
import Play from "./features/play/Play";
import RoomPage from "./features/room/RoomPage";
import Chat from "./components/Chat";
import { SocketProvider } from "./services/SocketContext";
import { AuthProvider } from "./services/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    ),
  },
  {

    path: "/register",
    element: (
      <AuthProvider>
        <RegistrationForm />
      </AuthProvider>
    ),
  },
  {

    path: "/join",
    element: <JoinPage />,
  },
  {
    path: "/play",
    element: <Play />,
  },
  {
    path: "/room",
    element: <RoomPage />,
  },
  {
    path: "/chat",
    element: (
      <SocketProvider>
        <Chat />
      </SocketProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomNavbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);