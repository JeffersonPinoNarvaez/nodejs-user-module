const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is mandatory']
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is mandatory']
    },
    password: {
        type: String,
        required: [true, 'Password is mandatory'],
    },
    email: {
        type: String,
        required: [true, 'Email is mandatory'],
    },
    status: {
        type: Boolean,
        default: true,
    }
})

UserSchema.methods.toJSON = function() {
    const { __v, password, _id,...user } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', UserSchema)