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
        return "yellow";
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
          autoClose: queueItems.length*1000,
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
    <>
      <button className="btn" onClick={clearCart}>
        clear cart
      </button>
      <div className="container">
        <h1>Responsive Table</h1>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>id</th>
              <th>Product Name</th>
              <th>price</th>
              <th>SKU</th>
              <th>status</th>
              <th>description</th>
            </tr>
            <>
              {cartData?.map((item, index) => (
                <tr key={index}>
                  <td data-th="Supplier Code">{item?.id}</td>
                  <td data-th="Supplier Name">{item?.name}</td>
                  <td data-th="Invoice Number">{item?.price}</td>
                  <td data-th="Invoice Date">{item?.sku}</td>
                  <td
                    data-th="Due Date"
                    style={{ color: getStatusColor(item?.status) }}
                  >
                    {item?.status}
                  </td>
                  <td data-th="Net Amount">{item?.description}</td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
        <h3>Thank you</h3>
      </div>
    </>
  );
}
