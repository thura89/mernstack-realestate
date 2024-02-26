import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";

dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);

app.listen(PORT, () => {
  console.log(`Server is runnning on ${PORT}`);
});

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.status(200).send(`Helloe from the server`);
// });
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server is runing in ${port}`);
// });
