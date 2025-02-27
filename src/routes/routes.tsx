import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Login} from '../pages/Login';
// import Register from '../pages/register';
import {TaskTrackerPage} from '../pages/TaskTrackerPages';

const router = createBrowserRouter([
    {
        path: "/login", // Ruta para el login
        element: <Login />,
    },
    // {
    //     path: "/register", // Ruta para el login
    //     element: <Register />,
    // },
    {
        path: "/",
        element: <TaskTrackerPage />,
    }
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
