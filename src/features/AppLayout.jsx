import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import CartOverview from "./cart/CartOverview"
import { useSelector } from "react-redux"
import { getQuantity } from "../store"

function AppLayout() {
    const numQuantity = useSelector(getQuantity)
    return (
        <div className="relative">
            <Header/>
           <main>
            <Outlet/>
           </main>
           
           {numQuantity?<CartOverview/>: null}
           

        </div>
    )
}

export default AppLayout
