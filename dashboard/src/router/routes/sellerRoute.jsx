import { lazy } from "react";
import React from "react";
const Home = lazy(() => import('../../views/pages/Home'));

export const sellerRoute = [
    {
        path: '/',
        element: <Home/>,
        ability: ['admin', 'seller']
    }
]