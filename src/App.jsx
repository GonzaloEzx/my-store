import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <CartProvider>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item" element={<ItemDetail />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
