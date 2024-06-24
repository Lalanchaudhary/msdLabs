const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Request schema
const requestSchema = new Schema({
    // Request fields
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
