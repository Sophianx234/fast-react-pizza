import { useDispatch, useSelector } from "react-redux"
import Button from "../components/Button"
import CartItem from "./CartItem"
import { getCart, getQuantity } from "../../store"
import { clearCart } from "./CartSlice"
import ErrorCart from "./ErrorCart"

function Cart() {
    const fakeCart = [
        {
            "id": 1,
            "name": "Margherita",
            "unitPrice": 12,
            "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
            "ingredients": [
                "tomato",
                "mozzarella",
                "basil"
            ],
            "soldOut": false
        }   ]

    const cart = useSelector(getCart)
    const numQuantity = useSelector(getQuantity)
    const dispatch = useDispatch()

    function handleClearCart(e){
        e.preventDefault()
        dispatch(clearCart())
        
    }
    

    return (
        <div className="flex flex-col mx-auto max-w-[800px] justify-center  px-6 mt-8 ">
            <Button to='menu' type='linkMain'>&larr; Back to menu</Button>
            { numQuantity ?
        <div className="mt-6">
            <h4 className="text-lg font-medium">Your cart, damian</h4>
            <ul className="divide-y  mt-2">
            {cart.map(item=><CartItem item={item} key={item.id} />)}
            </ul>
            { numQuantity?
            <div className="space-x-4">
                <Button type='primary'>Order Pizzas</Button>
                <Button type='transparent' handleClick={handleClearCart}>clear Cart</Button>
            </div>: null}

        </div>: <ErrorCart/>
        
          }  
        </div>
    )
}

export default Cart
