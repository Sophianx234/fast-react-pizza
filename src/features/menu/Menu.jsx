import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
    const menu = useLoaderData()
    console.log(menu)
    return (
        <div className="flex mx-auto max-w-[900px] justify-center  ">
            <ul className="mt-8 divide-y space-y-2 w-full px-32">
            {menu.map(item=><MenuItem item={item} key={item.id}/>)}
            </ul>
        </div>
    )
}

export async function loader(){
    const menu = await getMenu()
    return menu;

}

export default Menu
