import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: String,
        default: "0" // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg"
    },
    address: {
        type: String,
        required: [true, "Please enter your address!"]
    },
    phone: {
        type: String,
        required: [true, "Please enter your phone number!"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)