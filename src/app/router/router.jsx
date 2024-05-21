import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/index";
import AboutUs from "../../pages/AboutUs/index";

export const router = createBrowserRouter([
    {
        id: 'Base',
        path: "/",
        element: <MainPage />
    },
    {
        id: 'AboutUs',
        path: "/aboutus",
        element: < AboutUs/>
    }
]);
