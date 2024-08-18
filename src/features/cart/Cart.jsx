import { useSelector } from "react-redux"
import Button from "../components/Button"
import CartItem from "./CartItem"
import { getCart } from "../../store"

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
        },
        {
            "id": 2,
            "name": "Capricciosa",
            "unitPrice": 14,
            "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg",
            "ingredients": [
                "tomato",
                "mozzarella",
                "ham",
                "mushrooms",
                "artichoke"
            ],
            "soldOut": true
        },
        {
            "id": 3,
            "name": "Romana",
            "unitPrice": 15,
            "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-3.jpg",
            "ingredients": [
                "tomato",
                "mozzarella",
                "prosciutto"
            ],
            "soldOut": false
        },
            ]

    const cart = useSelector(getCart)

    return (
        <div className="flex flex-col mx-auto max-w-[800px] justify-center  px-6 mt-8  ">
            <Button to='menu' type='linkMain'>&larr; Back to menu</Button>
        <div className="mt-6">
            <h4 className="text-lg font-medium">Your cart, damian</h4>
            <ul className="divide-y  mt-2">
            {cart.map(item=><CartItem item={item} key={item.id} />)}
            </ul>

        </div>
        
            
        </div>
    )
}

export default Cart
