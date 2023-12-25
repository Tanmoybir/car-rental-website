import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Cars from "../pages/Cars/Cars";
import About from "../pages/About/About";
import Booking from "../pages/Booking/Booking";

const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/cars',
                element:<Cars/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/booking',
                element:<Booking/>
            }
        ]
    }
])

export default myCreateRouter;