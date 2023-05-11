import "./ItemDetail.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    if (quantity <= stock) {
      setQuantityAdded(quantity);

      const item = {
        id,
        name,
        price,
      };

      addItem(item, quantity);
    } else {
      alert("No hay suficientes productos en stock");
    }
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categorías: {category}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        {stock === 0 ? (
          <p className="Info">Producto fuera de stock</p>
        ) : quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount cantidadInicial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
