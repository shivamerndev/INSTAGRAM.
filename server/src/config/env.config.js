import { config } from "dotenv"

config()

export const { PORT, MONGO_URI, JWT_SECRET, JWT_REFRESH_SECRET, IMAGEKIT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env