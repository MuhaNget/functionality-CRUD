const Users = require("../models").user

exports.createUser = async(req, res) => {
    try {
        const user = await Users.create(req.body);
        return res.status(201).json({success: true, data: user})
    } catch (error) {
        return res.status(400).json({success: false, error: error.message})
    }
}