import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config/env.config.js";

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
        },

        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minlength: 3,
            maxlength: 30,
            index: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Invalid email"],
        },
        googleId: {
            type: String,
            unique: true,
            sparse: true, // allow multiple null values
        },
        password: {
            type: String,
            required: function () { // arrow function cannot be used here because we need access to 'this'
                return !this.googleId
            }, // password is required if googleId is not provided
            minlength: 6,
            select: false, // important (hide password by default)
        },

        bio: {
            type: String,
            maxlength: 150,
            default: "",
        },

        profileImage: {
            type: String,
            default: "https://ik.imagekit.io/hnoglyswo0/avatar-photo-default-user-icon-600nw-2558759027.webp?updatedAt=1773986129958"
        },

        isPrivate: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);


userSchema.pre("save", async function () {
    if (!this.password || !this.isModified("password")) return // agar password change nahi hua to skip
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateToken = async function (data) {
    return await jwt.sign(data, JWT_SECRET, { expiresIn: "1h" })
}

export default model("User", userSchema)