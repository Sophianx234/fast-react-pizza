import Button from "../components/Button"
import { formatCurrency } from "../utils/helpers"

function MenuItem({item}) {
    console.log(item)
    const {id, unitPrice,name, imageUrl, ingredients,soldOut} = item
    return (
        <div className={`flex space-x-4 py-2 ${soldOut && '  z-0 grayscale'} `}>
            <img src={imageUrl} alt={name} className="w-28" />
            <div className=" flex flex-col justify-between w-full">
                <div>

                <h3 className="text-stone-800  font-semibold text-lg">{name}</h3>
                <p className="text-sm text-stone-500">{ingredients.join(', ')}</p>
                </div>
                <div className="grid grid-cols-[2fr_1fr] items-center">
            <p className="font-semibold text-stone-600 ">{formatCurrency(unitPrice)}
            </p>
            
            {!soldOut&& <Button type='secondary'>Add to Cart</Button>}


                </div>
            </div>
        </div>
    )
}

export default MenuItem
