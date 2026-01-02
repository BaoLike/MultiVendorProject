import { lazy } from "react";
const Login = lazy(() => import('../../views/auth/login'));
const Register = lazy(() => import('../../views/auth/Register'))
import React from "react";
const AdminLogin = lazy(() => import('./../../views/auth/AdminLogin'));
const publicRoute = [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/admin/login',
        element: <AdminLogin/>
    },
];

export default publicRoute;