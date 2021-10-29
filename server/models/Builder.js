const { Schema, model } = require('mongoose');

const builderSchema = new Schema({
    temp: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true,
    },
    planted: {
        type: Boolean,
        required: true,
    },
    centrepiece: {
        type: String,
    },
    fishAdditions: [{
        name: String,
    }],
    builtBy: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const Builder = model('Builder', builderSchema);

module.exports = Builder;