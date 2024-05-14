const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;
const publicRouter = require("./routers");
const sequelize = require("./database/conection.js");
const passport = require("passport");
const app = express();
const middleware = require("./middleware/passport.js");

app.use(cors());

app.use(express.json());
app.use(publicRouter);

app.use(passport.initialize());
app.use(passport.session());

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
    console.log("Hello from server, port:", PORT);
  } catch (e) {
    console.log(`SOME ERR: ${e}`);
  }
}

start();
