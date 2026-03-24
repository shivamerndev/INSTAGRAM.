import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID } from "../config/env.config.js"

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
    try {
        const { idToken } = req.body;

        // verify token with google
        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();

        const { sub, name, email, picture } = payload;

        console.log({ sub, name, email, picture })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};