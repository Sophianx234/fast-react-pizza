import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import CartOverview from "./cart/CartOverview";
import { useSelector } from "react-redux";
import { getQuantity } from "../store";
import Spinner from "./components/Spinner";

function AppLayout() {
  const numQuantity = useSelector(getQuantity);
  const navigation = useNavigation()
    const isLoading = navigation.state === 'loading';
  

  return (
    <div className="flex h-screen flex-col justify-between">
      <div>
      {isLoading && <Spinner isLoading={isLoading} />}
        <Header />

        <main>
          <Outlet />
        </main>
      </div>

      {numQuantity ? <CartOverview /> : null}
    </div>
  );
}

export default AppLayout;
