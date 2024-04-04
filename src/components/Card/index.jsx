import { useOnlineStatus } from "../../context/OnlineStatusContext";
import "./card.css";
import useCartStore from "../../store/CartStore";

const products = [];

// Function to generate random price
const getRandomPrice = () => {
  return (Math.random() * 100).toFixed(2);
};

const generateRandomNumber = () => {
  const min = 1000; // Minimum 4-digit number
  const max = 9999; // Maximum 4-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate 20 products
for (let i = 0; i < 20; i++) {
  products.push({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: getRandomPrice(),
    status: "pending",
    sku: generateRandomNumber(),
    description: `Description of Product ${i + 1}`,
  });
}

function Card() {
  const { online } = useOnlineStatus();
  const addToCartData = useCartStore((state) => state.addToCart);

  const addToCart = (item) => {
   const status = online ? "success" : "queue";

   // Add product with updated status to cart
   addToCartData({ ...item, status });
  };                       

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
