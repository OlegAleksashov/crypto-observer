// TODO: remove tags
// TODO: add json response & status code

const User = require("../models/user");
const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password); // services
  return res.status(201).json({msg: "OK"});

  /*  if (error) {
    const errorDetails = error.details.map((d) => d.message).join("<br>");
    res.send(`<h2>Validation error:</h2>${errorDetails}`);
    return;
  }

  const newUser = new User({
    name: value.name,
    email: value.email,
    password: value.password,
  });

  try {
    const savedUser = await newUser.save();
    res.send(`<h2>Form submitted successfully!</h2>`);
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("<h2>Internal Server Error</h2>");
  }*/
};
// I have to make an essence called User

module.exports = { createNewUser };