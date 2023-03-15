import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Page/Home/Home";
import CategoriesQuizItemDetails from "../pages/Page/HomeCompo/QuizItem/QuizItemDetails/CategoriesQuizItemDetails";
import ProgrammingQuizItemDetails from "../pages/Page/HomeCompo/QuizItem/QuizItemDetails/CategoriesQuizItemDetails";

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
                // element: <ProgrammingQuizItemDetails></ProgrammingQuizItemDetails>,
                element:<CategoriesQuizItemDetails></CategoriesQuizItemDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/categoriesItems/${params.id}`)
            }
        ]
    }
])