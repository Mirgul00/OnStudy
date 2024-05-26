import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/index";
import SatPage from "../../pages/SatPage";
import IeltsPage from "../../pages/IeltsPage/IeltsPage";
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
        id: 'SatPage',
        path: "/sat",
        element: < SatPage/>

    },
    {
        id: 'IeltsPage',
        path: "/ielts",
        element: < IeltsPage/>
      
    },
    {
        id: 'ContactPage',
        path: "/contact",
        element: <ContactPage />
    }

    
]);
