import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import certificateRoutes from "./routes/certificateRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/certificates", certificateRoutes);

// Server Start
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
