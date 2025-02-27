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
import VegMenu from "./pages/VegMenu";
import NonVegMenu from "./pages/NonVegMenu";


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
                path: 'employee',
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
                path: 'nonvegmenu',
                element: <NonVegMenu/>
            },
            {
                path: 'vegmenu',
                element: <VegMenu/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
])

export default router