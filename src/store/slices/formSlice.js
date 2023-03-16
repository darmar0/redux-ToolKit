import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: { name: "", cost: 0 },
  reducers: {
    newCarName(state, action) {
      state.name = action.payload;
    },
    newCarCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { newCarCost, newCarName } = formSlice.actions;
export const formReducer = formSlice.reducer;
