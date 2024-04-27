// // TODO:
// const bcrypt = require("bcryptjs");
// const mysql = require("mysql2");

// const createNewUser = async (req, res) => {
//   const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE,
//   });

//   try {
//     const { name, email, password, confirmPassword } = req.body;
//     db.query(
//       "SELECT email FROM users WHERE email = ?",
//       [email],
//       async (error, results) => {
//         if (error) {
//           console.log(error);
//           return res.status(500).json({ message: "Server error" });
//         }

//         if (results.length > 0) {
//           return res
//             .status(400)
//             .json({ message: "That email is already in use" });
//         } else if (password !== confirmPassword) {
//           return res.status(400).json({ message: "Passwords don't match" });
//         }
//         let hashPassword = await bcrypt.hash(password, 8);
//         db.query(
//           "INSERT INTO users SET ?",
//           {
//             name: name,
//             email: email,
//             password: hashPassword,
//           },
//           (error, results) => {
//             if (error) {
//               console.log(error);
//               return res.status(500).json({ message: "Server error" });
//             } else {
//               return res.status(200).json({ message: "User registered!" });
//             }
//           }
//         );
//       }
//     );
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = { createNewUser };
const User = require("../database/models/user");

module.exports.postSignUp = (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (!user) {
        User.create({
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        })
          .then((response) => {
            res.json({ response });
          })
          .catch((error) => console.log(error));
      } else {
        res.json({ message: "User already exists!" });
      }
    })
    .catch((error) => console.log(error));
};

module.exports.postSignIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user, error) => {
      if (error) {
        console.log(error);
        res.staus(500).json({
          error: "Internal error please try again",
        });
      } else if (!user) {
        res.staus(401).json({
          error: "User email does not exist",
        });
      } else {
        user.authenticate(password, (error, same) => {
          if (error) {
            res.staus(500).json({
              error: "Internal error please try again",
            });
          } else if (!same) {
            res.staus(401).json({
              error: "That password is incorrect",
            });
          } else {
            res.json({
              message: "Welcome!",
              user: user,
              error: false,
            });
          }
        });
      }
    })
    .catch((error) => console.log(error));
};
