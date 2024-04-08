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
    <div className="card-container">
      <h1>Product List</h1>
      <div className="cards-wrapper">
        <div className="container-wrapper">
          {products.map((product) => (
            <div className="cards" key={product.id}>
              <div className="imgBx">
                <img
                  src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                  alt="nike-air-shoe"
                />
              </div>

              <div className="contentBx">
                <h2>{product?.name}</h2>

                <div className="size">
                  <h3 className="attribute">sku :</h3>
                  <h3 className="attribute">{product?.sku}</h3>
                </div>

                <div className="color">
                  <h3 className="attribute">price :</h3>
                  <h3 className="attribute">{product?.price}</h3>
                </div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
