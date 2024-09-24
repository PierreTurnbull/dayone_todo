import { createBrowserRouter, Navigate } from "react-router-dom";
import { Todos } from "./components/Todos/Todos";
import { Todo } from "./components/Todo/Todo";
import { NotFound } from "./components/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/todos",
        element: <Todos />,
    },
    {
        path: "/todos/:id",
        element: <Todo />,
    },
    {
        path: "/404",
        element: <NotFound />,
    },
    {
        path: "*",
        element: <Navigate to="/todos" />,
    },
]);