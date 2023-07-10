import "./App.css"
import Nav from "./components/Navbar/Nav.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails.tsx";
import Cart from "./components/Cart/Cart.tsx"

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/:id" element={<ProductDetails />}/>
                <Route path="/" element={<ProductList />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </Router>
    );
}

export default App
