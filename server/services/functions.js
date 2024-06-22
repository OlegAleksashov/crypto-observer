const User = require("../database/models/user");

module.exports.findUser = await User.findOne({
  where: {
    email: email,
  },
});
