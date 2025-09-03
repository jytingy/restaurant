import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateRestaurantPage from "./pages/CreateRestaurantPage";
import RestaurantPage from "./pages/RestaurantPage";

const App = () => {
  return (
    <div className='relative h-full w-full'>
    <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#470f96_100%)]"/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreateRestaurantPage/>}/>
        <Route path="/restaurants/:id" element={<RestaurantPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
