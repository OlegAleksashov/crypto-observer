// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });
// const PORT = process.env.PORT;
// const publicRouter = require("./routes");
// const cors = require("cors");

// const app = express();

// app.use(
//   cors({
//     corsOptions: {
//       origin: (origin, callback) => {
//         if (originsWhitelist.includes(origin)) {
//           callback(null, true);
//         } else {
//           callback(new Error("Not allowed by CORS"));
//         }
//       },
//     },
//   })
// );
// app.use(express.json());
// app.use(publicRouter);

// async function start() {
//   try {
//     await sequelize.sync();
//     app.listen(PORT);
//     console.log("Hello from server, port:", PORT);
//   } catch (e) {
//     console.log(`SOME ERR: ${e}`);
//   }
// }

// start();