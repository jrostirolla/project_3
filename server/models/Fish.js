const { Schema, model } = require('mongoose');

const fishSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    primaryFish: {
        type: Boolean,
    },
    compatible: [{
        name: {
            type: String
        }
    }],
    temp: {
        type: String,
        required: true,
    },
    tips: {
        type: String,
    },
});

const Fish = model('Fish', fishSchema);

module.exports = Fish;