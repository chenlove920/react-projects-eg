import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/test/Home";
import Test1 from "../pages/test/Test1";
import Test2 from "../pages/test/Test2";
import About from "../pages/test/About";
import Teststore from "../pages/test/Teststore";
export default  createBrowserRouter([
    {
        path:'/',
        Component:Home,
        children:[
            {
                path:'test1',
                Component: Test1
            },
            {
                path:'test2',
                Component: Test2
            }
        ]
    },
    {
        path:'about',
        Component:About
    },
    {
        path:'teststore',
        Component: Teststore
    }
])

