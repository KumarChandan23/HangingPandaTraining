import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import UpdateAccount from "./UpdateAccount";
import Account from "./Account";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                index: true,
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element: <SignUp />
            },
            {
                path:'/update-account',
                element: <UpdateAccount />
            },
            {
                path:'/user-account',
                element:<Account />
            }
        ]
    }
])