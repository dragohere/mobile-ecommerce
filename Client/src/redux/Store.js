import { createStore } from "redux";
import rootReducer from "./rootReducer";
// import productReducer from "./Products/ProductReducer";

const store = createStore(rootReducer);

export default store;
