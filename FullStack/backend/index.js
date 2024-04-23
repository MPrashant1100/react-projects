import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODB_URI } from "./config.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

//Middleware for handling cors POLICY
//Option 1 Default
app.use(cors());

//Option 2: Allow custom origin
// app.use(
//   cors({
//     origin: "http://localhost:3000/",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  // console.log(req)
  return res.status(200).send("Welcome to server for backend");
});

//Middleware
app.use("/book", booksRoute);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(" App connected to database ");
    app.listen(PORT, () => {
      console.log(`Server is listen on:  ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
