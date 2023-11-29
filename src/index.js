const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./config/db");
const usersRoutes = require("./routes/users");
const middleLogReq = require("./middleware/logs");

app.use(middleLogReq);
app.use(express.json());
app.use("/v1/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
