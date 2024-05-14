const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../database/models/user");

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new LocalStrategy.Strategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
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
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);
