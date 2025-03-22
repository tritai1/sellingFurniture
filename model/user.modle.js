const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    passWord: String,
    token: String,
    phoneNumber: String,
    avatar: String,
    roleId: String,
    status: String,
    position: Number,
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date  // tọa thêm trường deletedAt: Date để có thể lấy được thời gian thay đổi trường trong database
},
    { timestamps: true }
)


const User = mongoose.model("User", userSchema, "user")

module.exports = User;