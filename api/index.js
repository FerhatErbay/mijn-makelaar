import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import gebruikerRouter from "./routes/gebruiker.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Verbonden met MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("Server draait op port 3000!");
});

app.use("/api/user", gebruikerRouter);
app.use("/api/auth", authRouter);
