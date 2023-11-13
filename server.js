const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const monsterprepRoutes = require("./routes/monsterprepRoutes");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/monster", monsterprepRoutes);

mongoose.connect(process.env.MONGO_URI);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
