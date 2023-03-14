import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Page/Home/Home";
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
                element: <ProgrammingQuizItemDetails></ProgrammingQuizItemDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/categoriesitem/${params.id}`)
            }
        ]
    }
])