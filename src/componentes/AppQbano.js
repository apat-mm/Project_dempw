/* import HomeQbano from "."; */
import { CartProvider } from "../Context/CartContext";
import Cart from "./Cart";
/* import HomeQbano from "./HomeQbano"; */
import Products from "./Products";

const AppQbano = () => {
    return(
        <CartProvider>
            <Cart/>
            <Products/>
        </CartProvider>
    );
}

export default AppQbano;