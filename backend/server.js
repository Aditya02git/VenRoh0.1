import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";
import connectionRoutes from "./routes/connection.route.js";
import messageRoutes from "./routes/message.route.js";

import { connectDB } from "./lib/db.js";

import Stripe from 'stripe';
import { app, server } from "./lib/socket.js";

dotenv.config();

// const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/connections", connectionRoutes);
app.use("/api/v1/messages", messageRoutes);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/create-checkout-session', async (req,res) => {
  try {
    const {priceId} = req.body;

    const session = await stripe.checkout.sessions.create({
      mode:'subscription',
      payment_method_types:['card'],
      line_items:[
        {
          price: priceId,
          quantity: 1,
        }
      ],
      success_url:'http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url:'http://localhost:5173/cancel'
    })

    res.json({url:session.url})
    
  } catch (error) {
    console.log('Error:',error);
    res.status(500).json({error:error.message})
  }
})

// New route to retrieve Stripe session details
app.get('/api/v1/stripe/session/:sessionId', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
    res.json({ session });
  } catch (error) {
    console.error("Error retrieving Stripe session:", error);
    res.status(500).json({ error: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
