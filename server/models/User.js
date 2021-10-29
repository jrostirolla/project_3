const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Email invalid: please enter a valid email'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    prevBuilds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Builder'
        },
    ],
});

const User = model('User', userSchema);

module.exports = User;