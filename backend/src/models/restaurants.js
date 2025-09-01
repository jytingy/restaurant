import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        required: true
    },

    review: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;