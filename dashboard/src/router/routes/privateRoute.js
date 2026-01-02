import { adminRoute } from "./adminRoute.jsx";
import { sellerRoute } from "./sellerRoute.jsx";

export const privateRoute = [
    ...adminRoute,
    ...sellerRoute
]