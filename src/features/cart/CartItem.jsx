import Button from "../components/Button"


function CartItem({item}) {
    const {name} = item
    return (
        <div className="py-4 grid grid-cols-[3fr_.4fr] items-center justify-between pr-4 text-stone-500">
            <div className="flex space-x-3">
                <span>1x</span>
                <span>{name}</span>
                

            </div>
            <Button type='secondary'>Delete</Button>
            
                
        </div>
    )
}

export default CartItem
