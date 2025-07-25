import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { deleteNotification, getUserNotifications, markNotificationAsRead } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUserNotifications);//get notificatiion


router.put("/:id/read", protectRoute, markNotificationAsRead);//markk notification as read
router.delete("/:id", protectRoute, deleteNotification);// delete the notification


export default router;