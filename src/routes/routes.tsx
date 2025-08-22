import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Login} from '../pages/Login';
import {TaskTrackerPage} from '../pages/TaskTrackerPage';
import { Register } from '../pages/register';
import Schedule from '../pages/Schedule';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/login", 
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <TaskTrackerPage />,
    },
    {
        path: "/schedule",
        element: <Schedule />,
    }
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;