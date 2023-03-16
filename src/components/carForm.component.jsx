import { useDispatch, useSelector } from "react-redux";
import { addCar, newCarCost, newCarName } from "../store";
const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(newCarName(event.target.value));
  };
  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(newCarCost(carCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name: name, cost: cost })); //{name, cost}
  };
  return (
    <div className="car-from panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanden"
              value={name}
              onChange={handleNameChange}
            ></input>
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanden"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
