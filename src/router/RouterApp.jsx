import { createBrowserRouter } from "react-router-dom";
import MenuPage from "../pages/Menu/MenuPage";
import StockPage from "../pages/Stock/StockPage";
import VentaPage from "../pages/Venta/VentaPage";
import MenuPrincipal from "../pages/Menu/MenuPrincipal";
import VentaReport from "../pages/Venta/VentaReport";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<MenuPage/>,
        children:[
            {
                path:"",
                element:<MenuPrincipal/>
            },
            {
                path:"stock",
                element:<StockPage/>
            },
            {
                path:"venta",
                children:[
                    {
                        path:'mantenimiento',
                        element:<VentaPage/>,
                    },
                    {
                        path:"report",
                        element:<VentaReport/>
                    }
                ]
            }
        ]
    }
])



