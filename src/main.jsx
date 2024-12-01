import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Imported from Redux Provider
import {persistor, Store} from "./redux/Store.jsx"; // Imported my Redux store
import App from "./App.jsx";
import { PersistGate } from 'redux-persist/integration/react';
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}> {/* PLease App must be wrapped with the Redux Provider for it to work */}
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
