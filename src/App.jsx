import LandPage from "./pages/LandPage"
import '@fortawesome/fontawesome-svg-core/styles.css';


import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { getDashboardData, getUsername, logIn, logOut } from "./HelperFunctions/Helper";
import DashBoard from "./Components/DashBoard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Expenses from "./Components/Expenses";



const router = createBrowserRouter([
  {
    path: '/',
    element: <LandPage />,
    loader: getUsername,
    errorElement: <h1>This page doesnt exist.</h1>,
    children: [
      {
        path: '/',
        element: <DashBoard />,
        loader: getDashboardData,
        errorElement: <h1>This is error from child element. 404 not found.</h1>
      },
      {
        path: 'logout',
        action: logOut,
      },
      {
        path: 'logIn',
        action: logIn,
      },
      {
        path: 'expenses',
        element: <Expenses />
      }
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    <ToastContainer />
    </>
  )
}

export default App
