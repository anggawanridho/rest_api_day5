const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = `mySecretKeyIsMyDogsName`;

async function registerUser(req, res) {
    try {
        const {username, password, role} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        UserModel.push({
            username,
            password: hashedPassword,
            role
        })

        res.status(201).json({
            message: 'User created'
        })
    } catch (err) {
        res.status(500).json({ error: "An error occurred", message: `${error.message}` }); 
    }
}

async function loginUser(req, res) {
    try {
        const {username, password} = req.body;
        const user = UserModel.find(user => user.username === username);
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



module.exports = {
    loginUser,
    registerUser,
    // addNewBook,
    // updateExistingBook,
    // removeBook
};