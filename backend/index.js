import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookR from "./routes/bookR.js";
import cors from "cors";

const app = express();
// middle ware for parsing body request
app.use(express.json());

// midddle ware for handling CORS policy
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to my site");
});

app.use("/books", bookR);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to the port:  ${PORT}`);
    });
  })

  .catch((error) => {
    console.log(error);
  });
