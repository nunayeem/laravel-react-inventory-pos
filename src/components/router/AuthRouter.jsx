import { createBrowserRouter } from "react-router-dom";
import Login from "../modules/auth/Login";

const AuthRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,   // Default / route = Login
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Login />,   // Redirect all unknown URLs to login
  }
]);

export default AuthRouter;
