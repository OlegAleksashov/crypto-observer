const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;
const publicRouter = require("./routers");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
 
const db = mysql.createConnection({
  host: process.env.DATABASE_HOAT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((error) => {
  if(error){
    console.log(error)
  } else {
    console.log("Connected")
  }
})

//console.log(__dirname)

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
