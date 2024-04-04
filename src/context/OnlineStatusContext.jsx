import { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";

const OnlineStatusContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useOnlineStatus = () => useContext(OnlineStatusContext);

export const OnlineStatusProvider = ({ children }) => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      const isOnline = navigator.onLine;
      if (!isOnline) {
        toast.error("You are offline!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("You are back online!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setOnline(isOnline);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  return (
    <OnlineStatusContext.Provider value={{ online }}>
      {children}
      <ToastContainer />
    </OnlineStatusContext.Provider>
  );
};

OnlineStatusProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OnlineStatusProvider;
