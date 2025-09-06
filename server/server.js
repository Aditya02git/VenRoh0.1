import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client } from "node-appwrite";
import ideaRoutes from "./routes/ideaRoutes.js";
import startupRoutes from "./routes/startupRoutes.js";
import investorRoutes from "./routes/investorRoutes.js";
import vcRoutes from "./routes/vcRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Appwrite connection test route
app.get("/api/test-connection", async (req, res) => {
  try {
    const client = new Client()
      .setEndpoint(process.env.APPWRITE_ENDPOINT)
      .setProject(process.env.APPWRITE_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    // ✅ If client successfully initializes, return success
    if (client) {
      return res.status(200).json({ message: "✅ Appwrite Connected Successfully" });
    } else {
      throw new Error("Client not initialized");
    }
  } catch (error) {
    console.error("❌ Connection test failed:", error.message);
    return res.status(500).json({ message: "❌ Appwrite Connection Failed", error: error.message });
  }
});

// ✅ Main routes
app.use("/api", ideaRoutes);
app.use("/api", startupRoutes);
app.use("/api", investorRoutes);
app.use("/api", vcRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));


/* Top 5 Investable Sectors
1. Capital Goods
2. Electric Mobility
3. Electronic Components & Materials
4. Food Processing
5. Pharmaceuticals */