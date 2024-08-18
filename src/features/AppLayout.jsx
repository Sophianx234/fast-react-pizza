import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import CartOverview from "./cart/CartOverview"

function AppLayout() {
    return (
        <div>
            <Header/>
           <main>
            <Outlet/>
           </main>
           <CartOverview/>
        </div>
    )
}

export default AppLayout
