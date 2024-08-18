import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./features/components/Homepage"
import AppLayout from "./features/AppLayout"
import Error from "./features/components/Error"
import Menu from "./features/menu/Menu"
import {loader as menuLoader} from './features/menu/Menu'

const router = createBrowserRouter([
  { 
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: '/menu',
        element: <Menu/>,
        loader: menuLoader
      }
    ]


  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
 