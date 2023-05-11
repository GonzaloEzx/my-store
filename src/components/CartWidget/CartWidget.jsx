import "./CartWidget.css";
import cart from "./assets/shopping_cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="cart_widget"
      style={{ display: totalQuantity > 0 ? "block" : true }}
    >
      <a className="cart_icon">
        <img className="cart_img" src={cart} alt="cart-widget" />
        <div className="cart-counter">{totalQuantity}0</div>
      </a>
    </Link>
  );
};

export default CartWidget;
