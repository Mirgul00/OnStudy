import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/index";
import AboutUs from "../../pages/AboutUs/index";
import SatPage from "../../pages/SatPage";
import IeltsPage from "../../pages/IeltsPage/IeltsPage";


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

    }

    
]);
