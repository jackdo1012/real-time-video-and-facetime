
const mongoose = require('mongoose');

const authUser = new mongoose.Schema({
    given_name: {type: String, required: true},
    email: {type: String, required: true},
    nickname: {type: String, required: true},
    name: {type: String, required: true},
    picture: {type: String, required: true},
}, {timestamps: true})

module.exports = new mongoose.model('authUser', authUser)