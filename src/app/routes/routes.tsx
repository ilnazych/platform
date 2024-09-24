import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/pages/error/ErrorPage";
import Auth from "../../components/pages/auth/Auth";
import App from "../../App";
import { Main } from "../../components/pages/main/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Main/>,
        },
    ]
},
{
    path: 'auth',
    element: <Auth/>,
  }
    
  ]);