const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;
const publicRouter = require("./routers");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(publicRouter);

async function start() {
  try {
    app.listen(PORT);
    console.log("Hello from server, port:", PORT);
  } catch (e) {
    console.log(`SOME ERR: ${e}`);
  }
}

start();