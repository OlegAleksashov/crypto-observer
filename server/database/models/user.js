const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../conection");

const bcrypt = require("bcryptjs");
const saltRounds = 8;

const User = sequelize.define("user", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  // hash: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
}, {
  timestamps: false
});

// User.beforeCreate((user, options) => {
//   return bcrypt
//     .hash(user.hash, saltRounds)
//     .then((hash) => {
//       user.hash = hash;
//     })
//     .catch((err) => {
//       console.log(err);
//       throw new Error();
//     });
// });

// User.prototype.authenticate = async function (value, callback) {
//   await bcrypt.compare(value, this.hash, function (err, same) {
//     if (err) {
//       console.log(err);
//       callback(err);
//     } else {
//       console.log("authenticate", err, same);
//       callback(err, same);
//     }
//   });
// };

module.exports = User;
