const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        trim: true,
        validate: {
            validator: (v) => {
                return validator.isEmail(v)
            },
            message: `{VALUE} is not an email`
        }
    },
    password :{
        type: String,
        trim: true
    }
})

const User = mongoose.model('User' ,userSchema)

module.exports = User