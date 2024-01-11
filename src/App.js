import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Page/Home";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {" "}
        <Route path="/" element={<Home />}></Route>{" "}
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
