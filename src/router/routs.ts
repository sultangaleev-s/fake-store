import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
import CategoryPage from "../pages/CategoryPage";
import ErrorPage from "../pages/ErrorPage";
import ProductPage from "../pages/ProductPage";

export const routes = [
    {path: "/", element: HomePage},
    {path: "/categories", element: CategoriesPage},
    {path: "/categories/:category", element: CategoryPage},
    {path: "/product/:product", element: ProductPage},
    {path: "*", element: ErrorPage}
]