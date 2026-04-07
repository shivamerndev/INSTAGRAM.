import express from "express";
import cors from "cors"
import { userRoutes, postRoutes, commentsRoutes, followsRoutes, messagesRoutes, likesRoutes } from "./routes/routes.index.js";
import parser from "cookie-parser"
import googleRoutes from "../src/routes/google.route.js"
import passport from "passport"
import upload from "./config/multer.config.js";
import storyRoutes from "./routes/story.routes.js";
import morgan from "morgan"

const app = express()
app.use(passport.initialize());
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(parser())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(upload.array("media", 7))

app.use("/api/user", userRoutes)
app.use("/api/posts", postRoutes)
app.use('/api/comments', commentsRoutes);
app.use('/api/follows', followsRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/likes', likesRoutes);
app.use("/api/auth", googleRoutes)
app.use("/api/stories", storyRoutes)


app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

export default app