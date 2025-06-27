const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }, // e.g., user, admin
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String}
});

module.exports = mongoose.model('User', userSchema);

