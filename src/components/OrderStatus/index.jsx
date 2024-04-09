import { toast } from "react-toastify";
import { useOnlineStatus } from "../../context/OnlineStatusContext";
import useCartStore from "../../store/CartStore";
import "./order.css";
import { useEffect } from "react";

export default function OrderStatus() {
  const { online } = useOnlineStatus();
  const cartData = useCartStore((state) => state.cartItems);
  const processQueue = useCartStore((state) => state.processQueue);
  const clearCart = useCartStore((state) => state.clearCart);

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "green";
      case "queue":
        return "#fb9329";
      case "failed":
        return "red";
      default:
        return "black";
    }
  };

  useEffect(() => {
    if (online) {
      const queueItems = cartData.filter((item) => item.status === "queue");
      if (queueItems.length > 0) {
        toast.info("Processing...", {
          position: "top-right",
          autoClose: queueItems.length * 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // Process queue items
        processQueue(queueItems);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [online]);

  return (
    <div className="order-status">
      <button className="btn" onClick={clearCart}>
        clear cart
      </button>
      <div className="containers">
        <h1>Responsive Table</h1>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>SKU</th>
              <th>Brand</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
            <>
              {cartData?.map((item, index) => (
                <tr key={index}>
                  <td data-th="id">{item?.id}</td>
                  <td data-th="Product Name">{item?.name}</td>
                  <td data-th="Price">{item?.price}</td>
                  <td data-th="SKU">{item?.sku}</td>
                  <td data-th="Brand">{item?.brand}</td>
                  <td
                    data-th="Status"
                    style={{ color: getStatusColor(item?.status) }}
                  >
                    {item?.status}
                  </td>
                  <td data-th="Description">{item?.description}</td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
        <h3>Thank you</h3>
      </div>
    </div>
  );
}
