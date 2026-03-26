import express from 'express';
import { googleAuth } from '../controllers/google.auth.js';
import passport from "../config/passport.config.js";

const router = express.Router();

router.post("/google", googleAuth)

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    const { id, displayName, photos: [{ value: image }], emails: [{ value: email }] } = req.user;
    console.log({ id, displayName, image, email })
    res.redirect('/api/auth/profile');
});

router.get('/profile', (req, res) => {
    res.send(`<h1>Shivam Profile</h1><pre>${JSON.stringify(req.user, null, 2)}</pre>`);
});

export default router;