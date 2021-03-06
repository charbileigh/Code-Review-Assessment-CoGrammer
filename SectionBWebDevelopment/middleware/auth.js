const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next){
    const token = req.header['x-auth-token'];

    if (!token){
        res.status(401).json({ msg: 'No token, authorization denied'});
    }

    try {
        // verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        // Add user from payload
        req.user = decoded;
        next();
    } catch(e){
        res.status(400).json({ msg: 'Invalid token' });
    }
}

module.exports = auth;
