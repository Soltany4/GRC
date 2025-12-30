import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Add  full name']
    },
    email: {
        type: String,
        required: [true, 'Add your email']
    },
    dob: {
        type: String,
        required: [true, 'Add your date of birth']
    },
    role: {
        type: String,
        required: [true, 'Add your role']
    },
    password: {
        type: String,
        required: [true, 'Add a password']
    }
}, {
    timestamps: true
})

export default mongoose.model("User", userSchema)