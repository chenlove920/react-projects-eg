import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Month from "../pages/Month";
import Year from "../pages/Year";
import New from "../pages/New";

export default createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                Component: Month,
                index:true
            },
            {
                path: 'year',
                Component: Year
            }
        ]
    },
    {
        path: '/new',
        Component: New
    }
])