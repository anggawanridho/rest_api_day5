const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = `mySecretKeyIsMyDogsName`;

async function registerUser(req, res) {
    try {
        const { username, password, role } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await UserModel.push({
            username,
            password: hashedPassword,
            role
        });

        return res.status(201).json({
            message: 'User created',
            result: {
                username: result.username,
                id: result.id
            }
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred", message: `${error.message}` });
    }
}

async function loginUser(req, res) {
    try {
        const {username, password} = req.body;
        const user = await UserModel.findUser(username);
        if (!user) {
            return res.status(400).json({
                message: 'Authentication Failed, user not found'
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: 'Authentication Failed, wrong password'
            })
        }
        
        const token = jwt.sign({ username, role: user.role }, secretKey, { expiresIn: '1h' });
        res.status(200).json({
            message: 'Authentication success',
            token
        })

    } catch (error) {
        // Handle the error appropriately
        res.status(500).json({ error: "An error occurred", message: `${error.message}` });
    }
}

async function listUser(req, res) {
    try {
        const allUsers = await UserModel.listAllUsers(); // Fetch all users logic
        res.status(200).json({
            message: 'List of users',
            allUsers
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred", message: `${error.message}` });
    }
}


module.exports = {
    loginUser,
    registerUser,
    listUser,
    // updateExistingBook,
    // removeBook
};