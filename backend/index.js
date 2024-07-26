import "dotenv/config";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import genreRoutes from "./routes/genreRoute.js";
import moviesRoutes from "./routes/moviesRoute.js";
import uploadRoutes from "./routes/uploadRoute.js";
import morgan from "morgan";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/genre", genreRoutes);
app.use("/api/v1/movies", moviesRoutes);
app.use("/api/v1/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
