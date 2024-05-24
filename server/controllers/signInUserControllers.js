const User = require("../database/models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

module.exports.postSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    //console.log("EMAIL: " + email, "PASSWORD: " + password);
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPassValid = bcrypt.compareSync(password, user.password);

    if (!isPassValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, password: user.password },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    return res.status(201).json({
      token,
      user: { user: user.name, id: user.id, email: user.email },
      message:
        "Hello " +
        user.email +
        "\nPlease go to the homepage\nand see what you can do!",
    });
  } catch (e) {
    console.log(e);
  }
};
