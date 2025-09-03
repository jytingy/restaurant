import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";
import api from "../lib/axios";


const CreateRestaurantPage = () => {
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");    
    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!name || !price || !rating || !review) {
            toast.error("Please fill in all fields.");
            return;
        }

        try {
        const res = await api.post("/restaurants", {
            name,
            price,
            rating,
            review
        });
            
            toast.success("Restaurant created!");
            navigate("/");
        } catch (error) {
            console.log("Error creating restaurant", error);
            toast.error("Failed to create restaurant");
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Link to={"/"} className="btn btn-ghost mb-6">
                        <ArrowLeftIcon className="size-5"/>
                            Back to Restaurants
                    </Link>

                    <div className="card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">Create New Restaurant</h2>
                            <form onSubmit={handleSubmit}>

                                <div className="form-control mb-4">
                                    <label className="label"> 
                                        <span className="label-text">Restaurant Name</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Restaurant Name"
                                        className="input input-bordered"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}/>
                                </div>
                                
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <textarea
                                       placeholder="Write review here..."
                                       className="textarea textarea-bordered h-32"
                                       value={review}
                                       onChange={(e) => setReview(e.target.value)}/>
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label"> 
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Price"
                                        className="input input-bordered"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}/>
                                </div>       

                                <div className="form-control mb-4">
                                    <label className="label"> 
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Rating"
                                        className="input input-bordered"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}/>
                                </div>
                                
                                <div className="card-actions justify-end">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? "Creating..." : "Create Restaurant"}
                                    </button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateRestaurantPage;