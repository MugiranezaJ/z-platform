// import express from 'express';
// import dotenv from 'dotenv';
// import config from './config';
// import authRoutes from './routes/authRoutes';
// import profileRoutes from './routes/profileRoutes';
// import verificationRoutes from './routes/verificationRoutes';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware and route setup
// app.use(express.json());
// app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);
// app.use('/verification', verificationRoutes);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import config from "./config";
import authRoutes from "./routes/authRoutes";
import profileRoutes from "./routes/profileRoutes";
import verificationRoutes from "./routes/verificationRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

console.log("BD_URL", config.db.connectionString);
// Connect to the database
mongoose
  .connect(config.db.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
    // Middleware and route setup
    app.use(express.json());
    app.use("/auth", authRoutes);
    app.use("/profile", profileRoutes);
    app.use("/verification", verificationRoutes);

    // Start the server
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
