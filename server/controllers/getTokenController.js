const User = require("../database/models/user");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

module.exports.getAuth = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: user.id,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });

    return res.json({
      token,
      user: { id: user.id, email: user.email },
      message: "Hello " + user.email,
    });
  } catch (e) {
    console.log(e);
  }
};
