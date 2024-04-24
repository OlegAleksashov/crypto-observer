// TODO:
const bcrypt = require("bcryptjs");
const mysql = require("mysql2");

const createNewUser = async (req, res) => {
  const db = mysql.createConnection({
    host: process.env.DATABASE_HOAT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  });

  try {
    const { name, email, password, confirmPassword } = req.body;
    console.log(req.body); // services
    //res.send("FORM")
    db.query(
      "SELECT email FROM users WHERE email = ?",
      [email],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Server error" });
        }

        if (results.length > 0) {
          return res
            .status(400)
            .json({ message: "That email is already in use" });
        } else if (password !== confirmPassword) {
          return res.status(400).json({ message: "Passwords don't match" });
        }

        db.query(
          "INSERT INTO users SET ?",
          {
            name: name,
            email: email,
            password: password,
          },
          (error, results) => {
            if (error) {
              console.log(error);
              return res.status(500).json({ message: "Server error" });
            } else {
              return res.status(200).json({ message: "User registered!" });
            }
          }
        );
      }
    );

    //return res.status(200).json({ message: `Hello ${name}` });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createNewUser };
