import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { sendConnectionRequest, acceptConnectionRequest, rejectConnectionRequest,getConnectionRequests, getUserConnections, removeConnection, getConnectionStatus } from "../controllers/connection.controller.js";

const router = express.Router();

router.post("/request/:userId", protectRoute, sendConnectionRequest);//function that helps you to send connection request to your friend
router.put("/accept/:requestId", protectRoute, acceptConnectionRequest);//function that helps to accept request
router.put("/reject/:requestId", protectRoute, rejectConnectionRequest);//function that helps to reject request
//Get all connection requests for the  current user
router.get("/requests", protectRoute, getConnectionRequests);
//Get alll connections for a user
router.get("/", protectRoute, getUserConnections);
router.delete("/:userId", protectRoute, removeConnection);
router.get("/status/:userId", protectRoute, getConnectionStatus);

export default router;