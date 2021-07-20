const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Task = require('../../models/Task');

// @route GET api/tasks
// @desc Get All Tasks
// @access Public
router.get('/', (req, res) => {
    Task.find()
        .sort({ date: -1})
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({ msg: 'page not found', error: err }))
});

// @route POST api/tasks
// @desc Create A Task
// @access Public
router.post('/create', auth, (req, res) => {
    const { name, description } = req.body;
    const newTask = new Task({
        name,
        description
    });
    newTask.save()
        .then(task => res.json(task))
        .catch(err => res.status(400).json({ msg: "Something went wrong", error: err}));
});

// @route DELETE api/tasks/delete/:id
// @desc Delete A Task
// @access Public
router.delete('/delete/:id', auth, (req, res) => {
    Task.findById(req.params.id)
        .then(task => task.remove().
            then(() => res.json({ success: true }))
            .catch(err => res.status(400).json({ success: false, "Error": err })))
        .catch(err => res.status(404).json({ success: false, "Error": err }));
});

// @route UPDATE api/tasks/update/:id
// @desc Updates An Item
// @access Public
router.put('/update/:id', auth, (req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.name = req.body.name,
            task.description = req.body.description 
            task.save()
                .then(() => res.json({ succes: true }))
                .catch(err => res.status(400).json({ success: false, "Error": err }));
        })
        .catch(err => res.status(404).json({ success: false, "Error": err }));
});

module.exports = router;
