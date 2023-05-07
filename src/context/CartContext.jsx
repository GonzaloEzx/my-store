import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemIndex = cart.findIndex((prod) => prod.id === item.id);

    if (itemIndex === -1) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((prod) => prod.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// import { createContext, useState } from "react"

// export const CartContext = createContext({
//     cart: [],
// });

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([])

//     console.log(cart)

//     const addItem = (item, quantity) => {
//         if (!isInCart(item.id)) {
//             setCart((prev) => [...prev, { ...item, quantity }])
//         } else {
//             console.error("El producto ya fue agregado")
//         }
//     };

//     const removeItem = (itemId) => {
//         const cartUpdated = cart.filter((prod) => prod.id !== itemId)
//         setCart(cartUpdated)
//     };

//     const clearCart = () => {
//         setCart([])
//     };

//     const isInCart = (itemId) => {
//         return cart.some((prod) => prod.id === itemId)
//     };

//     return (
//         <CartContext.Provider value={{
//             cart,
//             addItem,
//             removeItem,
//             clearCart
//         }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
