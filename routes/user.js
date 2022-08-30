const express = require('express');
const router = express.Router();

const {User, validate} = require('../database/user');

router.post('/new', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({message: error.details[0].message});

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({message: 'User already registered.'});

    user = new User(req.body);
    await user.save();
    res.send(user);
})

router.get('/all', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

router.get('/:email', async (req, res) => {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({message: 'The user with the given email was not found.'});
    res.send(user);
})

module.exports = router;