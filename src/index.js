const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();
const usersRoutes = require("./routes/users");
const featureRoutes = require("./routes/feature");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1/users", usersRoutes);
app.use("/v1/feature", featureRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
