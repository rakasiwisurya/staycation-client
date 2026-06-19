import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// configureStore wires in the thunk middleware and Redux DevTools out of the box.
const store = configureStore({
  reducer: rootReducer,
});

export default store;
