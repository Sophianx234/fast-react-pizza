import Button from "../components/Button"

function CartOverview() {
    return (
        <div className="bg-zinc-900 text-gray-200 text-base  flex justify-between px-4 py-4">
            <div className="flex space-x-4">
                <div><span>1</span> <span>Pizzas</span></div>
                <p>$12</p>
            </div>
                <Button to='cart'>Open Cart &rarr;</Button>
        </div>
    )
}

export default CartOverview
