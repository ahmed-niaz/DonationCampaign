
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element:  <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <h2>Home</h2>,
        },
        {
            path: '/donation',
            element: <div>Donation</div>
        },
        {
            path: '/statistics',
            element: <div>Stai</div>
        }
      ]
    },
   
  ]);