import { useEffect, useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "../../App.css";
import { useOnlineStatus } from "../../context/OnlineStatusContext";
import { toast } from "react-toastify";

function Dashboard() {
  const { online } = useOnlineStatus();
  const [count, setCount] = useState(0);
  const [offlineIncrements, setOfflineIncrements] = useState(0);

  const handleIncrement = () => {
    if (online) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setOfflineIncrements((prevIncrement) => prevIncrement + 1);
    }
  };

  useEffect(() => {
    if (online && offlineIncrements > 0) {
      toast.warn(`you have click ${offlineIncrements} times.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCount((prevCount) => prevCount + offlineIncrements);
      setOfflineIncrements(0); // Reset offline increments
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [online]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Dashboard;
