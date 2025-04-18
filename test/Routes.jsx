import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import Login from "./Login"
import Signup from "./Signup"
import Profile from "./Profile"

export const routing = createBrowserRouter([
    {
        path:"/",
        element: Layout,
        children:[
            {
                index: "/login",
                element:<Login></Login>
            },
            {
                path:"/singup",
                element:<Signup />
            },
            {
                path:"/profile",
                element:<Profile />
            }
        ]
    }
])