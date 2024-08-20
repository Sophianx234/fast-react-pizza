import { useDispatch, useSelector } from "react-redux"
import Button from "../components/Button"
import { formatCurrency } from "../utils/helpers"
import { addItem, deleteItem } from "../cart/CartSlice"
import { useState } from "react"
import RegulateQuantity from "../components/RegulateQuantity"

function MenuItem({item}) {
    const dispatch = useDispatch()
    const {id, unitPrice,name, imageUrl, ingredients,soldOut} = item
    const [clicked, setClicked] = useState(false)
    console.log(clicked)

    const cart = useSelector(store=>store.cart.cart)
    console.log(cart)

    function handleAddItem(e){
        e.preventDefault();
        const newItem = {
            id, unitPrice,name,imageUrl, ingredients,soldOut
        }
        dispatch(addItem(newItem))
        setClicked(clicked=>!clicked)

    }
    function handleDeleteItem(e){
        e.preventDefault();
        dispatch(deleteItem(id))
        setClicked(clicked=>!clicked)



    }
    return (
        <div className={`flex space-x-4 py-2 ${soldOut && '  z-0 grayscale'} `}>
            <img src={imageUrl} alt={name} className="w-28" />
            <div className=" flex flex-col justify-between w-full">
                <div>

                <h3 className="text-stone-800  font-semibold text-lg">{name}</h3>
                <p className="text-sm text-stone-500">{ingredients.join(', ')}</p>
                </div>
                <div className="grid grid-cols-[2fr_1.5fr] items-center">
            <p className="font-semibold text-stone-600 ">{formatCurrency(unitPrice)}
            </p>
            <div className="grid grid-cols-[1fr_2fr] items-center gap-6">
                <RegulateQuantity/>


            {!soldOut&& <Button type='secondary' handleClick ={clicked? handleDeleteItem:handleAddItem}>{clicked? "Delete":`Add to Cart`}</Button>}
            </div>


                </div>
            </div>
        </div>
    )
}

export default MenuItem
