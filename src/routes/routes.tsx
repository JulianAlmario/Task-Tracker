import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Login} from '../pages/Login';
import {TaskTrackerPage} from '../pages/TaskTrackerPages';
import { Register } from '../pages/register';

const router = createBrowserRouter([
    {
        path: "/login", 
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/",
        element: <TaskTrackerPage />,
    }
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
