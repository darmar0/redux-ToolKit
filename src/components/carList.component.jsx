import { useSelector } from "react-redux";
import SingleCar from "./singleCar.component";

const CarList = () => {
  const { cars, name } = useSelector(
    ({ form, cars: { carsData, searchTerm } }) => {
      const filteredCars = carsData.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { cars: filteredCars, name: form.name };
    }
  );
  return (
    <div className="car-list">
      {cars.map((car) => {
        const bold =
          name && car.name.toLowerCase().includes(name.toLowerCase());
        return <SingleCar key={car.id} car={car} bold={bold} />;
      })}
    </div>
  );
};

export default CarList;
