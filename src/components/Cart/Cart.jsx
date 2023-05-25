import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <p>No hay items en el carrito</p>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${total}</h3>
      <button
        onClick={() => {
          if (
            window.confirm(
              "¿Estás seguro de que quieres eliminar todos los items del carrito?"
            )
          ) {
            clearCart();
          }
        }}
        className="Option"
      >
        Limpiar carrito
      </button>
      <Link to="/checkout" className="Option">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
