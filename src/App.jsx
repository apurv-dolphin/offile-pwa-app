import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import OrderStatus from "./components/OrderStatus";
import NavBar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Card />} />
        <Route path="/order" element={<OrderStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
