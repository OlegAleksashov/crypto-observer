// TODO:
const bcrypt = require("bcryptjs");

const createNewUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    console.log(req.body); // services
    return res.status(200).json({ message: `Hello ${name}` });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
};

module.exports = { createNewUser };