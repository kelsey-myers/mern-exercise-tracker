const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
        trim: true, //whitespace
        minlength: 3 //3 charas long
    },
}, {
    timestamps: true, //when created and modified
});

const User = mongoose.model('User', userSchema);

module.exports = User;