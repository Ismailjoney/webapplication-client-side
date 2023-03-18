import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Page/Home/Home";
import CategoriesQuizItemDetails from "../pages/Page/HomeCompo/QuizItem/QuizItemDetails/CategoriesQuizItemDetails";
import LogIn from "../pages/Page/Login/LogIn";
import Registration from "../pages/Page/Registration/Registration";
import UserFeedBack from "../pages/UserFeedBack/UserFeedBack";
import PrivetRoute from "./privetRoute/PrivetRoute";
 

export const route = createBrowserRouter ([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categorie/:id',
                element:<PrivetRoute><CategoriesQuizItemDetails></CategoriesQuizItemDetails></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/categoriesItems/${params.id}`)
            },
            {
                path:'/feedback',
                element:<UserFeedBack></UserFeedBack>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/reg',
                element: <Registration></Registration>
            }
        ]
    }
])