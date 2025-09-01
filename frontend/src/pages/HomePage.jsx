import {useEffect, useState} from "react";
import Navbar from "../components/NavBar";
import RestaurantCard from "../components/RestaurantCard";
import axios from "axios";

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async() => {
            try {
                const res = await axios.get("http://localhost:5000/api/restaurants");
                console.log(res.data.data);
                setRestaurants(res.data.data);
            } catch (error) {
                console.log("Error fetching restaurants");
            } finally {
                setLoading(false);
            }
        };
        
        fetchRestaurants();
        
    }, []);

return (
    <div className="min-h-screen">
        <Navbar/>

        <div className="max-w-7xl mx-auto p-4 mt-6">
            {loading && (
                <div className="text-center text-primary py-10">
                    Loading restaurants...
                </div>
            )}

            {restaurants.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant._id} restaurant={restaurant}/>

                    ))}
                </div>
            )}
        </div>
    </div>
    );
};

export default HomePage;