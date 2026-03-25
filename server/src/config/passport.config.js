import passport from 'passport';
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './env.config.js';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

export default passport