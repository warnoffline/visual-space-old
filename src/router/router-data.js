import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import OurWorks from "../pages/OurWorks/OurWorks";
import IntVisual from "../pages/IntVisual/IntVisual";
import Modeling from "../pages/Modeling/Modeling";
import Design from "../pages/Design/Design";

export const routes = [
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/works',
        element: <OurWorks/>
    },
    {
        path: '/intvisual',
        element: <IntVisual/>
    },
    {
        path: '/modeling',
        element: <Modeling/>
    },
    {
        path: '/design',
        element: <Design/>
    },
]