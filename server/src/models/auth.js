
const mongoose = require('mongoose');

const authUser = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    
})

module.exports = new mongoose.model('authUser', authUser)