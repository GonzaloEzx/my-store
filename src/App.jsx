import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <CartProvider>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <button onClickCapture={1}>boton</button>
    </div>
  );
}

export default App;
