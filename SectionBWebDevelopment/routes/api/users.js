const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const config = require('config');
const jwt = require('jsonwebtoken');

// Item Model
const User = require('../../models/User');

// @route POST api/items
// @desc Create A User
// @access Public
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Validation
    if (!name || ! email || !password){
        return res.status(400).json({ msg: 'Please fill in all the fields'});
    }

    // Check User
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'user already exists'});

            const newUser = new User({ name, email, password});
            
            // Create Hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
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
                        .catch(err => res.status(400).json({ msg: "something went wrong", error: err }))
                })
            });
        });
});

module.exports = router;
