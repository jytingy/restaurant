import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const RestaurantPage = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        const fetchRestaurant = async() => {
            try {
                const res = await api.get(`/restaurants/${id}`);
                setRestaurant(res.data.data);
            } catch(error){
                console.log("Error fetching restaurant", error);
                toast.error("Failed to fetch restaurant.");
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurant();
    }, [id]);    

    const handleDelete = async () => {
        if(!window.confirm("Are you sure you want to delete this restaurant?")) return;

        try {
            await api.delete(`/restaurants/${id}`);
            toast.success("Restaurant deleted");
            navigate("/");
        } catch (error) {
            console.log("Error deleting restaurant");
            toast.error("Failed to delete restaurant");
        }
    };

    const handleSave = async () => {
        if(!restaurant.name.trim() || !restaurant.review.trim()) {
          toast.error("Please fill in all fields.");
          return;  
        };

        setSaving(true);

        try {
            await api.put(`/restaurants/${id}`, restaurant);
            toast.success("Restaurant updated successfully.")
            navigate("/")
        } catch (error) {
            console.log("Error saving restaurant:", error);
            toast.error("Failed to update restaurant");
        } finally {
            setSaving(false);
        }
    };

    if(loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10"/>
            </div>
        );
    }

return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5" />
              Delete Restaurant
            </button>
          </div>

            <div className="card bg-base-100">
                <div className="card-body">

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Restaurant</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Restaurant name"
                            className="input input-bordered"
                            value={restaurant.name}
                            onChange={(e) => setRestaurant({...restaurant, name: e.target.value})}
                        />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text"> Review </span>
                        </label>
                        <textarea
                            placeholder="Write review here..."
                            className="textarea textarea-bordered h-32"
                            value={restaurant.review}
                            onChange={(e) => setRestaurant({...restaurant, review: e.target.value})}
                        />
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                            {saving ? "Saving..." : "Save changes"}
                        </button>

                    </div>
                </div>
            </div>
         
   
        </div>
      </div>
    </div>
  );
};


export default RestaurantPage;