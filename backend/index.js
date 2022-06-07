const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const authRoutes = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require("cors");


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connexion à la DB réussie"))
  .catch((err) => console.log(err));

  app.use(cors())
app.use(express.json());

// Users
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoute);

//Products
app.use("/api/products", productRoute);

//Cart
app.use("/api/cart", cartRoute);

//Order
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute)


app.listen(process.env.PORT || 3001, () => {
  console.log("Server running on port" + (process.env.PORT ? process.env.PORT : " 3001"));
});
