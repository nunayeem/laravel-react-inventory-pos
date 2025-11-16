import { createBrowserRouter } from "react-router-dom";
import Master from "../layouts/Master";
import Dashboard from "../modules/Dashboard";
import Home from "../modules/Home";

const ProjectRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/home',
                element: <Home/>
            }
        ]
    }
])

export default ProjectRouter
