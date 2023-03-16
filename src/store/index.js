import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  searchTermChange,
  editCar,
} from "./slices/carsSlice";
import { formReducer, newCarCost, newCarName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export {
  store,
  addCar,
  removeCar,
  searchTermChange,
  newCarCost,
  newCarName,
  editCar,
};
