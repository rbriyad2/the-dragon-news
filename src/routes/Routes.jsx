import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Loginlayout from "../layouts/Loginlayout/Loginlayout";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Loginlayout></Loginlayout>,
    children:[
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
      }
    ]
  },
  
    {
      path: "category",
      element: <Main></Main>,
      children:[
        {
          path: ":id",
          element: <Category></Category>,
          loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path: '/news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News></News></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
        
      ]
    }
  ]);
  export default router;