const { createUser, loginUser } = require('../services/user.services');

const register = async (req, res, next) => {

    try {

        const { name, email, password } = req.body;
        const result = await createUser({name, email, password});
    
        if (result.status === 200) {
            res.status(201).json({ success: true, message: 'User registered successfully', userId: result.client_id });
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        next(error);
    } 
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const result = await loginUser({username, password});
        console.log(`result after fetching login ${JSON.stringify(result)}`)
        if (result.status === 200) {
            res.json({ success: true, message: 'Login successful', user: result.user });
        } else {
            res.status(401).json(result);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {register,login}