import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateRestaurant from "./pages/CreateRestaurant";
import RestaurantPage from "./pages/RestaurantPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme='night'>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreateRestaurant />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
      </Routes>
    </div>
  );
};

export default App;
