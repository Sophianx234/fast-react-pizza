import { useDispatch, useSelector } from "react-redux"
import { increaseItem } from "../cart/CartSlice"
import { getCart } from "../../store"

function RegulateQuantity({id}) {
    const dispatch = useDispatch()
    
    function handleInc(){
        dispatch(increaseItem(id))
        
    }
    function handleDec(){
        dispatch(increaseItem(id))

    }
    return (
        <div className="flex space-x-2 items-center justify-center">
                    <button className="bg-yellow-400 px-1.5 text-sm  rounded-full text-yellow-950 " onClick={handleDec}>-</button >
                    <p>1</p>
                    <button className="bg-yellow-400 px-1.5 text-sm  rounded-full text-yellow-950 " onClick={handleInc}>+</button>
                </div>
    )
}

export default RegulateQuantity
