import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("Db is connected"))
  .catch((error) => console.log(error.message));

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}!!!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
