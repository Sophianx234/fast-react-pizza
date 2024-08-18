import Header from "./components/Header"
import Homepage from "./components/Homepage"

function AppLayout() {
    return (
        <div>
           <Header/> 
           <main>
            <Homepage/>
           </main>
        </div>
    )
}

export default AppLayout
