import "bootstrap/dist/css/bootstrap.min.css";
import "./components/CustomNavbar";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <CustomNavbar additionalText="I migliori piatti del web" />
      <Home />
    </div>
  );
}

export default App;
