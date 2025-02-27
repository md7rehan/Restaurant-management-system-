import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import EmployeeList from "./pages/EmployeeList";
import EmployeeForm from "./pages/EmployeeForm";
import Offers from "./pages/Offers";
import Revenue from "./pages/Revenue";
import FoodMenu from "./pages/FoodMenu";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'billing',
                element: <Billing/>
            },
            {
                path: 'employeelist',
                element: <EmployeeList/>
            },
            {
                path: 'employeeform',
                element: <EmployeeForm/>
            },
            {
                path: 'offers',
                element: <Offers/>
            },
            {
                path: 'revenue',
                element: <Revenue/>
            },
            {
                path: 'foodmenu',
                element: <FoodMenu/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
])

export default router