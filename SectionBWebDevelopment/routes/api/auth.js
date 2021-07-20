const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const config = require('config');
const jwt = require('jsonwebtoken');

// Item Model
const User = require('../../models/User');

// @route POST api/tasks/auth
// @desc Auth
// @access Public
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Validation
    if (!email || !password){
        return res.status(400).json({ msg: 'Please fill in all the fields' });
    }

    // Check User
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'user does not exists' });

            //  Validdate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid password' });

                    jwt.sign(
                        { id: user.id},
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err
                            res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
                        }
                    )
                })
        });
});

module.exports = router;
