import { createBrowserRouter } from "react-router-dom";
import Master from "../layouts/Master";
import Dashboard from "../modules/Dashboard";
import Home from "../modules/Home";
import Login from "../modules/auth/Login";
import NotFound from "../modules/NotFound";
import CategoryAdd from "../modules/category/CategoryAdd";
import CategoryList from "../modules/category/CategoryList";

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
                path: '*',
                element: <NotFound/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/category/create',
                element: <CategoryAdd/>
            },
            {
                path: '/category',
                element: <CategoryList/>
            }
        ]
    }
])

export default ProjectRouter
