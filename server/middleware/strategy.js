const passport = require("passport");
const User = require("../database/models/user");
const { ExtractJwt, Strategy } = require("passport-jwt");
const { SECRET_KEY } = process.env;

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

const strategy = new Strategy(options, async (jwt_payload, done) => {
  const { email, password } = jwt_payload;

  if (!email || !password) {
    console.log("EMAIL: " + email, "PASSWORD: " + password);
    console.log(jwt_payload);
    return done("Request from passport failed", false);
  }

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (password === user.password) {
    return done(null, user);
  } else {
    return done("Wrong password", false);
  }
});

module.exports = strategy;
