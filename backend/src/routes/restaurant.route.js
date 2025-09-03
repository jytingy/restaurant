import express from 'express';

import { createRestaurant, deleteRestaurant, getRestaurants, getRestaurantById, updateRestaurant } from '../controllers/restaurant.controller.js';
// contains all endpoints for restaurant

const router = express.Router();

// get function
router.get("/", getRestaurants);
router.get("/:id", getRestaurantById);

// our post function
router.post("/", createRestaurant);

// update function
router.put("/:id", updateRestaurant);

// delete function
router.delete("/:id", deleteRestaurant);

export default router;