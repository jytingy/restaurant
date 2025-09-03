import { DessertIcon } from "lucide-react";
import { Link } from "react-router";

const NoRestaurants = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <DessertIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">No resturants yet</h3>
      <p className="text-base-content/70">
        Tried out some new places? Start creating some reviews.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Your First Restaurant
      </Link>
    </div>
  );
};
export default NoRestaurants;