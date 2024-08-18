import { useSelector } from "react-redux";
import Button from "../components/Button";
import { getQuantity, getTotalPrice } from "../../store";
import { formatCurrency } from "../utils/helpers";

function CartOverview() {
  const numItems = useSelector(getQuantity);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className="sticky bottom-0 left-0 right-0 flex justify-between bg-zinc-900 px-6 py-4 text-base text-zinc-200 mt-24" >
      <div className="flex space-x-4">
        <div>
          <span>{numItems}</span> <span>Pizzas</span>
        </div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <Button to="cart" type="link">
        Open Cart &rarr;
      </Button>
    </div>
  );
}

export default CartOverview;
