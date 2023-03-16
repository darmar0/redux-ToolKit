import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
import CarEdit from "./carEdit-component";

const SingleCar = ({ car, bold }) => {
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const handleSubmit = () => {
    setEditMode(!editMode);
  };

  return (
    <div className={`panel ${bold && "bold"}`}>
      {!editMode ? (
        <div>
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            className="button is-danger"
            onClick={() => handleCarDelete(car)}
          >
            Delete
          </button>
          <button
            className="button is-danger"
            onClick={() => setEditMode(!editMode)}
          >
            Edit
          </button>
          <hr />
        </div>
      ) : (
        <CarEdit car={car} handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default SingleCar;
