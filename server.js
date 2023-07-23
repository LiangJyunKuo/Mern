import "express-async-errors";

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import morgan from "morgan";
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

import mongoose from "mongoose";

import cookieParser from "cookie-parser";
app.use(cookieParser());

import cloudinary from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/dist")));

//Setup json middleware
app.use(express.json());

//Setup authMiddleware
import { authenticateUser } from "./middleware/authMiddleware.js";
app.use("/api/v1/jobs", authenticateUser, jobRouter);

////routers   /////////////////////////////////

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

import jobRouter from "./routes/jobRouter.js";
app.use("/api/v1/jobs", authenticateUser, jobRouter);

import authRouter from "./routes/authRouter.js";
app.use("/api/v1/auth", authRouter);

import userRouter from "./routes/userRouter.js";
app.use("/api/v1/users", authenticateUser, userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

//error handle middleware

import errorHandlerMiddleware from "./middleware/errorHandleMiddleware.js";
app.use(errorHandlerMiddleware);

//////////////////////////////////////////////////
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
