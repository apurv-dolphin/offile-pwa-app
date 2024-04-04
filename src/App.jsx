import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import OrderStatus from "./components/OrderStatus";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Card />} />
        <Route path="/order" element={<OrderStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
