import express from "express";
import cors from "cors";  // Import CORS package
import authRoutes from "./routes/auth.route.js"; // Import your routes (auth routes in this case)

const app = express();

// Enable CORS globally (if you want to allow all origins)
app.use(cors());  // This will allow all origins by default

// Parse incoming JSON requests
app.use(express.json());

// Use your authentication routes
app.use("/api/auth", authRoutes);

// Start the server on the specified port (8800 in your case)
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
