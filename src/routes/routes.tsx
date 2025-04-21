import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Login} from '../pages/Login';
import {TaskTrackerPage} from '../pages/TaskTrackerPage';
import { Register } from '../pages/register';

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
        path: "/task-tracker",
        element: <TaskTrackerPage />,
    }
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
