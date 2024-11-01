import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./features/components/Homepage"
import AppLayout from "./features/AppLayout"
import Error from "./features/components/Error"
import Menu from "./features/menu/Menu"
import {loader as menuLoader} from './features/menu/Menu'
import Cart from "./features/cart/Cart"
import CreateOrder from "./features/order/CreateOrder"
import {action as orderAction} from './features/order/CreateOrder'
import Order from "./features/order/Order"
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
        loader: menuLoader,
        errorElement: <Error/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: 'order/new',
        element: <CreateOrder/>,
        action: orderAction
      },
      {
        path: 'order/:id',
        element: <Order/>
        
        
      }
    ]


  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
 