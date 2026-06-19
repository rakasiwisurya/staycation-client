import { combineReducers } from "@reduxjs/toolkit";
import checkout from "./checkout";
import page from "./page";

export default combineReducers({
  checkout,
  page,
});
