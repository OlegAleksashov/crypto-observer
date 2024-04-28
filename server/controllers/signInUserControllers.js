const User = require("../database/models/user");

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
