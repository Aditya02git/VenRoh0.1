import express from "express";

import { protectRoute } from "../middleware/auth.middleware.js";

import { getSuggestedConnections, getPublicProfile, updateProfile, searchUsers, deleteAccount } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/suggestions", protectRoute, getSuggestedConnections);

router.get("/:username", protectRoute, getPublicProfile);

router.put("/profile", protectRoute, updateProfile);

router.get("/search",protectRoute, searchUsers);

router.delete("/delete", protectRoute, deleteAccount);


export default router;