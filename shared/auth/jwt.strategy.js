const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("../config");
const prismaClient = require("../prismaClient");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET,
};

const verify = async (jwt_payload, done) => {
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        id: jwt_payload.sub,
      },
      omit: { password: true },
    });

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(options, verify);
