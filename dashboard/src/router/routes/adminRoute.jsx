import { lazy } from "react";
import React from "react";
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller")) ;
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));
const Seller = lazy(() => import("../../views/admin/Seller"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest")) ;
const DeactiveSeller = lazy(() => import("../../views/admin/DeactiveSeller"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const Category = lazy(() => import("../../views/admin/Category"));
const Orders = lazy(() => import("../../views/admin/Orders")) ;
const AdminDashboard = lazy(() => import('./../../views/admin/AdminDashboard'));

export const adminRoute = [
    {
        path: '/admin/dashboard',
        element: <AdminDashboard/>,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/orders',
        element: <Orders/>,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/category',
        element: <Category/>,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/sellers',
        element: <Seller/>,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/payment-request',
        element: <PaymentRequest/>,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/deactive-sellers',
        element: <DeactiveSeller/>,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/sellers-request',
        element: <SellerRequest/>,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/sellers/details/:sellerId',
        element: <SellerDetails/>,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/chat-seller',
        element: <ChatSeller/>,
        ability: 'admin'
    },
]