import { useState } from "react";
import { useDispatch } from "react-redux";
import { editCar } from "../store";

const CarEdit = ({ car, handleSubmit }) => {
  const [editedName, setEditName] = useState(car.name);
  const [editedCost, setEditCost] = useState(car.cost);
  const dispatch = useDispatch();
  const onEditCar = (carForEdit) => {
    const editedCar = { ...carForEdit, name: editedName, cost: editedCost };
    dispatch(editCar(editedCar));
    handleSubmit();
  };
  const handleEditName = (event) => {
    setEditName(event.target.value);
  };
  const handleEditCost = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    setEditCost(carCost);
  };
  return (
    <div key={car.id} className="panel">
      <form onSubmit={onEditCar}>
        <input onChange={handleEditName} value={editedName}></input>
        <input
          onChange={handleEditCost}
          value={editedCost || ""}
          type="number"
        ></input>
      </form>
      <button className="button is-link" onClick={() => onEditCar(car)}>
        Submit
      </button>
      <hr />
    </div>
  );
};

export default CarEdit;
