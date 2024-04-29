const User = require("../database/models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

module.exports.postSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
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

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });

    return res.json({ token, user: { id: user.id, email: user.email } });
  } catch (e) {
    console.log(e);
  }
};
