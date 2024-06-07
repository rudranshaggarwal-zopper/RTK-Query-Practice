import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const myRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        // loader:true,
        children:[
            {
                path:"/inApp",
                element:<>In app</>
            },
            {
                path:"/inside",
                element:<>Inside app</>
            }
        ]
    },
    {
        path:"about",
        element:<>About</>,
        children:[
            {
                path:"inside",
                element:<>Inside about</>
            }
        ]
    }
])
