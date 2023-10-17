const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const sequelize = require("./Config/Database");
const User = require("./Models/UserModel");

app.use(cors({ credentials: true, origin: "http://localhost:3000 "}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

sequelize.sync();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});