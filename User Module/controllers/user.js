const { response } = require('express')
const bcrypt = require('bcryptjs')

const User = require('../models/user')

const post = async (req, resp = response) => {
    let { firstName, middleName, lastName, password, email } = req.body;
    const user = new User({ firstName, lastName, middleName, password, email });
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
    try {
        await user.save();
        resp.status(200).json({
            data: user
        })
    } catch (error) {
        throw Error("Error from user/post: " + error)
    }
}

const getAll = async (req, resp = response) => {
    const { from = 0, limit = 5 } = req.query;
    const query = { status: true }
    try {
        const [total, users] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
                .limit(Number(limit))
                .skip(Number(from))
        ])
        resp.status(200).json({
            total: total,
            data: users
        })
    } catch (error) {
        throw new Error("Error from user/getAll " + error);
    }
}


module.exports = {
    post,
    getAll
}