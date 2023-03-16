import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carsData: [],
  },
  reducers: {
    searchTermChange(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.carsData.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    editCar(state, action) {
      const updated = state.carsData.map((car) =>
        car.id === action.payload.id
          ? { ...car, name: action.payload.name, cost: action.payload.cost }
          : car
      );

      state.carsData = updated;
    },
    removeCar(state, action) {
      const updated = state.carsData.filter((car) => car.id !== action.payload);
      state.carsData = updated;
    },
  },
});

export const { searchTermChange, addCar, removeCar, editCar } =
  carSlice.actions;
export const carsReducer = carSlice.reducer;
