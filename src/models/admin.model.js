const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    permission: {
        type: String,
        default: "admin"
    },
}, { timestamps: true });

export const adminModel = mongoose.model('Admin', adminSchema);

