import { useDispatch } from "react-redux";
import Button from "../components/Button"
import { deleteItem } from "./CartSlice";


function CartItem({item}) {
    const {name, id} = item
    const dispatch = useDispatch()
     function handleDeleteItem(e){
        e.preventDefault();
        dispatch(deleteItem(id))



    }
    return (
        <div className="py-4 grid grid-cols-[3fr_.4fr] items-center justify-between pr-4 text-stone-500">
            <div className="flex space-x-3">
                <span>1x</span>
                <span>{name}</span>
                

            </div>
            <Button type='secondary' handleClick={handleDeleteItem}>Delete</Button>
            
                
        </div>
    )
}

export default CartItem

