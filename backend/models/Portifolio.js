const mongoose = require('mongoose');

const { Schema } = mongoose;

const portifolioSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

mongoose.Model('portifolio', portifolioSchema);