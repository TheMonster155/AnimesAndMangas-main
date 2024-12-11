import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import mangasReducer from "./reduces/mangaReduces.js";
import reviewsReducer from "./reduces/commentsRedux.js";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./components/Context/CartContext.jsx";
import actionFigureReducer from "./reduces/actionFigureRedux.js";
const reducer = combineReducers({
  mangas: mangasReducer,
  reviewsSlice: reviewsReducer,
  actionFigures: actionFigureReducer,
});

const store = configureStore({ reducer });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </Provider>
  </StrictMode>
);
