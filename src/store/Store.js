import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Slice/dataSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
