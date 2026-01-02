import MainLayout from '../../layout/MainLayout.jsx'
import { privateRoute } from './privateRoute.js'
import React from "react";
console.log('privateRoute:', privateRoute); 

export const getRoute = () => {
    return {
        path: '/',
        element: <MainLayout/>,
        children: privateRoute
    }
}