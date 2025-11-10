import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "./config";
import { createUser, getUserByEmail } from "./database";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!,
      callbackURL: "http://localhost:3001/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      let existingUser = await getUserByEmail(profile.emails![0]!.value);

      if (!existingUser) {
        existingUser = await createUser({
          email: profile.emails![0]!.value!,
          username: profile.emails![0]!.value!.split("@")[0]!,
          first_name: profile.name?.givenName || "",
          last_name: profile.name?.familyName || "",
          login_method: "google",
          roles: "user",
          profile_picture_url:
            profile.photos && profile.photos.length > 0
              ? profile.photos[0]!.value
              : "",
        });
      }
      return done(null, existingUser!);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user as any));

export default passport;
