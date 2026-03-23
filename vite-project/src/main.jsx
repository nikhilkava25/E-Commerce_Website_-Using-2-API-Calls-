import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext";
import { DataProvider as NewDataProvider } from "./context/NewDataContext";
import { CartProvide } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <CartProvide>
        <NewDataProvider>
          <App />
          <ScrollToTop
            color="white"
            smooth
            style={{
              backgroundColor: "#BA8E23",
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
          />
        </NewDataProvider>
      </CartProvide>
    </DataProvider>
    <ToastContainer />
  </StrictMode>,
);
