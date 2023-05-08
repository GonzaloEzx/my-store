import { useCartContext } from "../../context/CartContextIndex";

const CartItem = () => {
  const { cartList, clearCart } = useCartContext();
  return (
    <div>
      {cartList.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt="imagen" className="w-25" />
          Nombre: {product.name} - Cantidad: {product.quantity}
          <button> X </button>
        </li>
      ))}
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default CartItem;
