import { Form, redirect } from "react-router-dom"
import Button from "../components/Button"
import { useSelector } from "react-redux"
import { getCart } from "../../store"
import { createOrder } from "../services/apiRestaurant"

function CreateOrder() {
    const cart = useSelector(getCart)
    console.log(cart)
    return (
        <div className="w-[650px] flex flex-col mx-auto mt-6">

        <h1 className="text-xl font-medium text-stone-900">Ready to order? Let&apos;s go!</h1>

        <Form action="" method="POST" className="grid grid-1 items-center space-y-6 mt-8 ">
        <label className="space-y-1" onSubmit={e=>e.preventDefault()}>
            <p className="text-neutral-500 text-lg pl-3  ">First Name</p>
            <input type="text" name="name" id="" className="i w-full py-3 rounded-full focus:ring focus:outline-none focus:ring-yellow-200 focus:ring-offset-1 indent-5 bg-white focus:bg-whit" required/>

        </label>
        <label className="space-y-1">
            <p className="text-neutral-500 text-lg pl-3  ">Phone Number</p>
            <input type="text" name="phone" id="" className=" w-full py-3 rounded-full focus:ring focus:outline-none focus:ring-yellow-200 focus:ring-offset-1 indent-5" required/>

        </label>
        <label className="space-y-1">
            <p className="text-neutral-500 text-lg pl-3  ">Address</p>
            <input type='tel' name="address" id="" className="w-full py-3 rounded-full focus:ring focus:outline-none focus:ring-yellow-200 focus:ring-offset-1 indent-5" required/>

        </label>
        <input type="hidden" name='cart' value={JSON.stringify(cart)} />
        <label className="flex items-center gap-2" >
            <input type="checkbox" name="priority" id="" className="size-4 font-semibold text-stone-900"/>
            Want to give your order priority?
        </label>
        <div className="grid grid-cols-[.7fr_2fr]">
            
            <Button type='primary'>Order now</Button>
        </div>
        </Form>
        </div>
    )
}

export default CreateOrder

export async function action({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    const order ={
        ...data, cart:JSON.stringify(data.cart),
        priority: data.priority === 'on'

    }
    console.log(data)
    console.log(order)
    const newOrder = await createOrder(order)
     return  redirect(`/order/${newOrder.id}`)

}
