const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const SECRET_KEY = 'sercretkey';


const registerCreation = async (req, res) =>{
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save()
        res.status(201).json({ message: "User Created Successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error Signing Up!" });
    }
};

const registerGet = async (req, res) => {   
    try {
        const user = await User.find()
        res.status(201).json(user);
    } catch (error) {
        res.status(501).json({ error: "Unable to get User" });
    }
};

const login = async (req, res) =>{
    try {
        const { name, password } = req.body;
        const user = await User.findOne({name})
        if (!user) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
        const token = jwt.sign({ userId: user.Id }, SECRET_KEY, { expiresIn: '1hr' });
        res.json({ message: "Login Succesfully" });
    } catch (error) {
        res.status(401).json({ error: "Error Logging In" });
    }
};


module.exports = { registerCreation, registerGet, login };