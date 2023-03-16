import CarForm from "./components/carForm.component";
import CarList from "./components/carList.component";
import CarSearch from "./components/carSearch.component";
import CarValue from "./components/carValue.component";

function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
