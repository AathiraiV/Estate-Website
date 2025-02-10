import express from "express";
import cors from "cors"; // Import CORS
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

// Enable CORS middleware
app.use(cors({origin: process.env.FRONTEND_URL, credentials: true})); // This allows cross-origin requests

// Parse incoming JSON requests
app.use(express.json());

// Define your routes
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test",testRoute);
// Start the server
app.listen(8800, () => {
    console.log("Server is running on port 8800");
});
// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});