import express from "express";
import cors from "cors"
import { userRoutes, postRoutes, commentsRoutes, followsRoutes, messagesRoutes, likesRoutes, authRoutes } from "./routes/routes.index.js";
import parser from "cookie-parser"
import googleRoutes from "../src/routes/google.route.js"
import passport from "passport"
import storyRoutes from "./routes/story.routes.js";
import morgan from "morgan"
import { frontendPath } from "./frontend.js"
import serverToClient from './frontend.js'

const app = express()

app.use(passport.initialize());
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(parser())
app.use(cors({ origin: "http://localhost:5173", methods: ["POST", "GET", "PUT", "PATCH", "DELETE"], credentials: true }))


app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/posts", postRoutes)
app.use('/api/comments', commentsRoutes);
app.use('/api/follows', followsRoutes);
app.use('/api/chat', messagesRoutes);
app.use('/api/likes', likesRoutes);
app.use("/api/auth", googleRoutes)
app.use("/api/stories", storyRoutes)

app.use(express.static(frontendPath));
app.get(/.*/, serverToClient);

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

export default app;