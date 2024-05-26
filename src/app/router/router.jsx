import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/index";
import AboutUsPage from "../../pages/AboutUsPage/index";
import ContactPage from "../../pages/ContactPage.jsx";

export const router = createBrowserRouter([
    {
        id: 'Base',
        path: "/",
        element: <MainPage />
    },
    {
        id: 'AboutUsPage',
        path: "/aboutus",
        element: < AboutUsPage/>
    },
    {
        id: 'ContactPage',
        path: "/contact",
        element: <ContactPage />
    }
]);
