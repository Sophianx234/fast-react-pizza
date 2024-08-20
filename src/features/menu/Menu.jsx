import { useLoaderData, useNavigation } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { HashLoader } from "react-spinners";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  
  return (
    <div className="mx-auto flex max-w-[900px] justify-center">
      
      <ul className="mt-8 w-full space-y-2 divide-y px-32">
        {menu.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
