import React from "react";
import ReactDOM from "react-dom/client";
import { RoomProvider } from "./ContextApi";

// this will act as root directory for our react project or
// else we can say that this is the index for all files
// here we will be having the react-router-dom directory
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// all the component that is required
import Home from "./component/Home";
import Header from "./component/Header";
import Rooms from "./component/Rooms";
import SingleRoom from "./component/SingleRoom";
import Error from "./component/Error";

const Main = () => {
    return (
        <div className="app">
            <Header />

            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/rooms",
                element: <Rooms />,
            },
            {
                path: "/rooms/:slug",
                element: <SingleRoom />,
                // in think we need to pass the props here
            },
            {
                // the star route is for all route
                path: "*",
                element: <Error />,
                // in think we need to pass the props here
            },
        ],
        errorElement: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RoomProvider>
        <RouterProvider router={appRouter} />
    </RoomProvider>
);
